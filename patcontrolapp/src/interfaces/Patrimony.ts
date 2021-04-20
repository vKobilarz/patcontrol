interface Patrimony {
  description: string;
  number: string;
  rfid: string;
  lastScannedDate: Date;
  status: {
    isScanned: boolean;
    isFound: boolean;
  };
}

export default Patrimony;
