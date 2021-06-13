import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ToastAndroid } from 'react-native';

import BtDevice from '../interfaces/BtDevice';

interface BluetoothContextState {}

const BluetoothContext = createContext<BluetoothContextState>(
  {} as BluetoothContextState
);

export const BluetoothProvider: FC = ({ children }) => {
  return (
    <BluetoothContext.Provider value={{}}>{children}</BluetoothContext.Provider>
  );
};

export function useBluetooth(): BluetoothContextState {
  return useContext(BluetoothContext);
}
