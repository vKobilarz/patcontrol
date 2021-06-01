import moment from 'moment';
import Room from '../interfaces/Room';

const updateRoomsInfo = (rooms: Room[]): Room[] => {
  const updatedRooms: Room[] = rooms.map((room) => {
    const { patrimonies } = room;

    const scannedPatrimonies = patrimonies.filter(
      (pat) => pat.status.isScanned && pat.status.isFound
    );

    const notFoundPatrimonies = patrimonies.filter(
      (pat) => pat.status.isScanned && !pat.status.isFound
    );

    const notRegisteredPatrimonies = patrimonies.filter(
      (pat) => !pat.status.isScanned && pat.status.isFound
    );

    return {
      ...room,
      info: {
        ...room.info,
        total: patrimonies.length,
        scanned: scannedPatrimonies.length,
        notFound: notFoundPatrimonies.length,
        notRegistered: notRegisteredPatrimonies.length,
        formattedLastScan: room.info.lastScan
          ? moment(room.info.lastScan).format('HH:mm DD/MM/YYYY')
          : '-',
      },
      status: { hasError: true },
    };
  });

  return updatedRooms;
};

export default updateRoomsInfo;
