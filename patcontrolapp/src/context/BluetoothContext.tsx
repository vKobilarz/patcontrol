import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';

import { BleManager, Device, ScanMode } from 'react-native-ble-plx';

interface BluetoothContextState {
  devices: Device[];
  state: string;
  isScanning: boolean;

  startDeviceScan(): void;
  stopDeviceScan(): void;
}

const BluetoothContext = createContext<BluetoothContextState>(
  {} as BluetoothContextState
);

const btManager = new BleManager();

export const BluetoothProvider: FC = ({ children }) => {
  const [devices, setDevices] = useState<Device[]>([]);
  const [btState, setBtState] = useState<string>('');
  const [isScanning, setIsScanning] = useState<boolean>(false);

  const addDevice = (device: Device) => {
    console.log('device added');
    // const foundDeviceIndex = devices.findIndex((d) => d.id === device.id);

    // if (foundDeviceIndex >= 0) {
    //   const updatedDevices = [...devices];

    //   updatedDevices[foundDeviceIndex] = device;

    //   setDevices(updatedDevices);
    // }

    setDevices([...devices, device]);
  };

  useEffect(() => {
    btManager.onStateChange((state) => {
      setBtState(state);
    }, true);
  }, []);

  const startDeviceScan = () => {
    setIsScanning(true);

    btManager.startDeviceScan(
      null,
      { allowDuplicates: true, scanMode: ScanMode.LowLatency },
      (err, device) => {
        if (err) {
          console.warn(err);

          return;
        }

        if (device) {
          addDevice(device);
        }
      }
    );
  };

  const stopDeviceScan = () => {
    btManager.stopDeviceScan();

    setIsScanning(false);
  };

  return (
    <BluetoothContext.Provider
      value={{
        devices,
        state: btState,
        isScanning,
        startDeviceScan,
        stopDeviceScan,
      }}
    >
      {children}
    </BluetoothContext.Provider>
  );
};

export function useBluetooth(): BluetoothContextState {
  return useContext(BluetoothContext);
}
