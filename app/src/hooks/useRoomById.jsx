import { useEffect, useState } from 'react';
import useAuthentication from './useAuthentication';
import AUTHENTICATION_TYPE from '../constants/authenticationType';
import { getRoomById } from '../services/room';

const getFormattedPatrimonies = (patrimonies) => {
  const scanned = patrimonies.filter(
    (pat) => !!pat.last_scanned_date && !!pat.rfid,
  );

  const notFound = patrimonies.filter(
    (pat) => !pat.last_scanned_date && !!pat.rfid,
  );

  const notRegistered = patrimonies.filter((pat) => !pat.rfid);

  return { scanned, notFound, notRegistered };
};

const onlineHandler = async (id) => {
  return await getRoomById(id);
};

const offlineHandler = async () => {
  console.warn('UseRoomsById / offlineHandler -> Not implemented yet');
};

const handlers = {
  [AUTHENTICATION_TYPE.ONLINE]: onlineHandler,
  [AUTHENTICATION_TYPE.OFFLINE]: offlineHandler,
};

const useRoomById = (id) => {
  const { authenticationType } = useAuthentication();
  const [data, setData] = useState();

  useEffect(() => {
    const getRoomById = handlers[authenticationType];

    if (typeof getRoomById === 'function') {
      getRoomById(id).then((response) => {
        const roomsWithFormattedPatrimonies = {
          ...response.data,
          formattedPatrimonies: getFormattedPatrimonies(
            response.data.patrimonies,
          ),
        };

        setData(roomsWithFormattedPatrimonies);
      });
    }
  }, []);

  return { data };
};

export default useRoomById;
