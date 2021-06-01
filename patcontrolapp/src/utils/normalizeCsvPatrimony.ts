import CsvPatrimony from '../interfaces/CsvPatrimony';
import Patrimony from '../interfaces/Patrimony';

const normalizeCsvPatrimony = (csvPatrimony: CsvPatrimony): Patrimony => {
  return {
    description: csvPatrimony.patrimonyName,
    number: csvPatrimony.patrimonyNumber,
    rfid: csvPatrimony.rfid,
    lastScannedDate: csvPatrimony.lastScannedDate
      ? new Date(csvPatrimony.lastScannedDate)
      : null,
    status: {
      isFound: (csvPatrimony?.rfid || '').length > 1,
      isScanned: !!csvPatrimony.lastScannedDate,
    },
  };
};

export default normalizeCsvPatrimony;
