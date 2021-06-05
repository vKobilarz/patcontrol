import React, { FC } from 'react';

import { PatrimonyProvider } from './PatrimonyContext';
import { BluetoothProvider } from './BluetoothContext';

const Providers: FC = ({ children }) => {
  return (
    <PatrimonyProvider>
      <BluetoothProvider>{children}</BluetoothProvider>
    </PatrimonyProvider>
  );
};

export default Providers;
