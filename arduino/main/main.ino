#include <SPI.h>
#include <MFRC522.h>
#include <SoftwareSerial.h>

// PINS
#define RFID_RST_PIN 5
#define RFID_SS_PIN 10
#define BUZZER_PIN 8
#define LED_R_PIN 2
#define LED_G_PIN 3
#define LED_B_PIN 4
#define BAUD_RATE 9600

MFRC522 rfid(RFID_SS_PIN, RFID_RST_PIN);
MFRC522::MIFARE_Key key;
byte nuidPICC[4];

int currentState = 2;
// 0 -> Inactive
// 1 -> Room Scanning
// 2 -> Patrimony Scanning

int previousState = 0;
String lastRfidUid = "";

void setup() {
  Serial.begin(BAUD_RATE);
  SPI.begin();
  rfid.PCD_Init();

  for (byte i = 0; i < 6; i++) {
    key.keyByte[i] = 0xFF;
  }

  pinMode(BUZZER_PIN, OUTPUT);
  
  pinMode(LED_R_PIN, OUTPUT);
  pinMode(LED_G_PIN, OUTPUT);
  pinMode(LED_B_PIN, OUTPUT);
  
  Serial.println("Initialized!");
}

String stateToString(int state) {
  switch (state) {
    case 0: return "Inactive";
    case 1: return "Room Scanning";
    case 2: return "Patrimony Scanning";
    default: return "";
  }
}

void handleStateChange(int currentState) {
  digitalWrite(LED_R_PIN, LOW);
  digitalWrite(LED_G_PIN, LOW);
  digitalWrite(LED_B_PIN, LOW);

  switch (currentState) {
    case 0: digitalWrite(LED_R_PIN, HIGH);
      break;
    case 1: digitalWrite(LED_G_PIN, HIGH);
      break;
    case 2: digitalWrite(LED_B_PIN, HIGH);
      break;
  }
}

void checkStateChange() {
  if (currentState != previousState) {
    String message = "[Status Change] " + stateToString(previousState);
    message += " -> " + stateToString(currentState);

    handleStateChange(currentState);
    
    Serial.println(message);
  }

  previousState = currentState;
}

bool checkCompatibleMifareType(MFRC522::PICC_Type piccType) {
  if (piccType != MFRC522::PICC_TYPE_MIFARE_MINI &&  
    piccType != MFRC522::PICC_TYPE_MIFARE_1K &&
    piccType != MFRC522::PICC_TYPE_MIFARE_4K) {
    Serial.println(F("Your tag is not of type MIFARE Classic."));
    return false;
  }

  return true;
}

String uidByteToString(byte *buffer, byte bufferSize) {
  String uidString = "";
  
  for (byte i = 0; i < bufferSize; i++) {
    if (i != 0) {
      uidString += ".";
    }
    
    uidString += buffer[i];
  }

  return uidString;
}

bool isNewRfidUid(String rfidUid) {
  if (lastRfidUid != rfidUid) {
    Serial.println("[RIFD Scanned] " + rfidUid);

    lastRfidUid = rfidUid;

    return true;
  }

  return false;
}

bool readRfid() {
  if (!rfid.PICC_IsNewCardPresent()) {
    return false;
  }

  if (!rfid.PICC_ReadCardSerial()) {
    return false;  
  }

  MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);

  if (!checkCompatibleMifareType(piccType)) {
    return false;
  }

  for (byte i = 0; i < 4; i++) {
    nuidPICC[i] = rfid.uid.uidByte[i];
  }

  String rfidUid = uidByteToString(rfid.uid.uidByte, rfid.uid.size);

  return isNewRfidUid(rfidUid);
}

void roomScanning() {
  
}

void patrimonyScanning() {
    if (readRfid()) {
      digitalWrite(BUZZER_PIN, HIGH);
      delay(100);
    } else {
      digitalWrite(BUZZER_PIN, LOW);
    };
}

void readBluetoothSerial() {
//  String bluetoothMessage = "";
//
//  int btMessageLength = bt.available();
//    
//  while (bt.available() > 0) {
//    char asciiChar = bt.read();
//
//    bluetoothMessage += asciiChar;
//  }
//
//  if (bluetoothMessage != "") {
//  Serial.println("[BT MESSAGE] " + bluetoothMessage);
//  }
}

void loop() {
  readBluetoothSerial();
  
  checkStateChange();
  
  switch (currentState) {
    case 1: roomScanning();
      break;
    case 2: patrimonyScanning();
      break;
  }
}
