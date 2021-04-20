import Patrimony from './Patrimony';

interface Room {
  name: string;
  rfid?: string;
  info: {
    total: number;
    scanned: number;
    notFound: number;
    notRegistered: number;
    lastScan: Date;
  };
  status: {
    hasError: boolean;
  };
  patrimonies?: Patrimony[];
}

export default Room;
