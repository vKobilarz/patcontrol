import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ToastAndroid } from 'react-native';

import BluetoothSerial from 'react-native-bluetooth-serial';

import BtDevice from '../interfaces/BtDevice';

interface BluetoothContextState {}

const BluetoothContext = createContext<BluetoothContextState>(
  {} as BluetoothContextState
);

export const BluetoothProvider: FC = ({ children }) => {
  const [devices, setDevices] = useState<BtDevice[]>();
  const [activeDevice, setActiveDevice] = useState<BtDevice>();
  const [isEnabled, setIsEnabled] = useState();
  const [connected, setConnected] = useState<boolean>();

  useEffect(() => {
    Promise.all([BluetoothSerial.isEnabled(), BluetoothSerial.list()]).then(
      (values) => {
        const [isEnabled, devices] = values;

        setDevices(devices);
        setIsEnabled(isEnabled);
      }
    );

    BluetoothSerial.on('bluetoothEnabled', () =>
      ToastAndroid.show('Bluetooth enabled', ToastAndroid.SHORT)
    );
    BluetoothSerial.on('bluetoothDisabled', () =>
      ToastAndroid.show('Bluetooth disabled', ToastAndroid.SHORT)
    );
    BluetoothSerial.on('error', (err) => console.log(`Error: ${err.message}`));
    BluetoothSerial.on('connectionLost', () => {
      if (activeDevice) {
        ToastAndroid.show(
          `Connection to device ${activeDevice.name} has been lost`,
          ToastAndroid.SHORT
        );
      }

      setConnected(false);
    });

    write();
  }, []);

  const connect = async () => {
    const isEnabled = await BluetoothSerial.enable();
    const isConnected = await BluetoothSerial.isConnected();

    if (isEnabled && !BluetoothSerial.isConnected) {
      try {
        await BluetoothSerial.connect('98:D3:61:F5:E1:47');
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  const write = async () => {
    const isEnabled = await BluetoothSerial.isEnabled();
    const isConnected = await BluetoothSerial.isConnected();

    if (!isConnected) {
      await connect();
    }

    console.log(`Enabled: ${isEnabled}, Connected: ${isConnected}`);
    try {
      await BluetoothSerial.write('teste');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <BluetoothContext.Provider value={{}}>{children}</BluetoothContext.Provider>
  );
};

export function useBluetooth(): BluetoothContextState {
  return useContext(BluetoothContext);
}
