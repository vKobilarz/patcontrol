import { useEffect, useState } from 'react';
import AUTHENTICATION_TYPE from '../constants/authenticationType';
import useAuthentication from './useAuthentication';
import { getAllRooms } from '../services/room';

const updateRoomsWithInfo = (rooms) => {
  return rooms.map((room) => {
    const { patrimonies } = room;

    const scannedPatrimonies = patrimonies.filter(
      (pat) => !!pat.last_scanned_date && !!pat.rfid,
    );

    const notFoundPatrimonies = patrimonies.filter(
      (pat) => !pat.last_scanned_date && !!pat.rfid,
    );

    const notRegisteredPatrimonies = patrimonies.filter((pat) => !pat.rfid);

    return {
      ...room,
      info: {
        ...room.info,
        total: patrimonies.length,
        scanned: scannedPatrimonies.length,
        notFound: notFoundPatrimonies.length,
        notRegistered: notRegisteredPatrimonies.length,
      },
    };
  });
};

const onlineHandler = async () => {
  return await getAllRooms();
};

const offlineHandler = async () => {
  console.warn('UseRooms / offlineHandler -> Not implemented yet');
};

const useRooms = () => {
  const { authenticationType } = useAuthentication();
  const [data, setData] = useState();

  const handlers = {
    [AUTHENTICATION_TYPE.ONLINE]: onlineHandler,
    [AUTHENTICATION_TYPE.OFFLINE]: offlineHandler,
  };

  useEffect(() => {
    const getRooms = handlers[authenticationType];

    if (typeof getRooms === 'function') {
      getRooms().then((response) => {
        const roomsWithInfo = updateRoomsWithInfo(response.data);

        setData(roomsWithInfo);
      });
    }
  }, []);

  return {
    data,
  };
};

export default useRooms;
