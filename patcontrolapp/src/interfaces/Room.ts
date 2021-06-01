import Patrimony from './Patrimony';

interface Room {
  name: string;
  info: {
    total: number;
    scanned: number;
    notFound: number;
    notRegistered: number;
    lastScan?: Date;
    formattedLastScan: string;
  };
  status: {
    hasError: boolean;
  };
  patrimonies?: Patrimony[];
}

export default Room;
