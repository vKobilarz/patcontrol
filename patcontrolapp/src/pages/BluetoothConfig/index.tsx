import React, { FC } from 'react';
import { Device } from 'react-native-ble-plx';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../components/Button';
import CardBody from '../../components/CardBody';
import CardButtonContainer from '../../components/CardButtonContainer';
import CardRow from '../../components/CardRow';
import CardText from '../../components/CardText';
import CardTitle from '../../components/CardTitle';
import PageContainer from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { useBluetooth } from '../../context/BluetoothContext';

const BluetoothConfig: FC = () => {
  const {
    devices,
    state,
    isScanning,
    startDeviceScan,
    stopDeviceScan,
  } = useBluetooth();

  const handleScanPress = isScanning ? stopDeviceScan : startDeviceScan;

  const handleDevicePress = async (device: Device) => {
    try {
      const response = await device.connect();

      console.log(response);
    } catch (err) {
      console.log(err.reason);
    }
  };

  return (
    <PageContainer>
      <ScrollView style={{ width: '100%' }} keyboardShouldPersistTaps="handled">
        <PageTitle>Bluetooth Config</PageTitle>
        <CardButtonContainer>
          <CardTitle error={state !== 'PoweredOn'}>State</CardTitle>
          <CardBody>
            <CardRow>
              <CardText>State: </CardText>
              <CardText>{state}</CardText>
            </CardRow>
            <CardRow>
              <CardText>isScanning: </CardText>
              <CardText>{isScanning ? 'true' : 'false'}</CardText>
            </CardRow>
            <CardRow>
              <CardText>Device Length: </CardText>
              <CardText>{devices.length}</CardText>
            </CardRow>
          </CardBody>
        </CardButtonContainer>

        <Button onPress={handleScanPress}>
          {isScanning ? 'Stop Scan' : 'Start Scan'}
        </Button>

        {devices.map((device, index) => (
          // @ts-ignore
          <CardButtonContainer
            key={`${index}-${device.id}`}
            onPress={() => handleDevicePress(device)}
          >
            <CardTitle error={false}>{device.id}</CardTitle>
            <CardBody>
              <CardRow>
                <CardText>isConnectable</CardText>
                <CardText>{device.isConnectable ? 'true' : 'false'}</CardText>
              </CardRow>
              <CardRow>
                <CardText>localName</CardText>
                <CardText>{device.localName}</CardText>
              </CardRow>
              <CardRow>
                <CardText>mtu</CardText>
                <CardText>{device.mtu}</CardText>
              </CardRow>
              <CardRow>
                <CardText>name</CardText>
                <CardText>{device.name}</CardText>
              </CardRow>
              <CardRow>
                <CardText>overflowServiceUUIDs</CardText>
                <CardText>{device.overflowServiceUUIDs?.length}</CardText>
              </CardRow>
              <CardRow>
                <CardText>rssi</CardText>
                <CardText>{device.rssi}</CardText>
              </CardRow>
              <CardRow>
                <CardText>txPowerLevel</CardText>
                <CardText>{device.txPowerLevel}</CardText>
              </CardRow>
            </CardBody>
          </CardButtonContainer>
        ))}
      </ScrollView>
    </PageContainer>
  );
};

export default BluetoothConfig;
