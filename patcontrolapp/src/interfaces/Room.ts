import Patrimony from './Patrimony';

interface Room {
  name: string;

  patrimony: {
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
    list?: Patrimony[];
  };
}

export default Room;
