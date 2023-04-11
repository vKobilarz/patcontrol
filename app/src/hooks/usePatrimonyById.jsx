import { useEffect, useState } from 'react';
import useAuthentication from './useAuthentication';
import AUTHENTICATION_TYPE from '../constants/authenticationType';
import { getPatrimonyById } from '../services/patrimony';

const onlineHandler = async (id) => {
  return await getPatrimonyById(id);
};

const offlineHandler = async () => {
  console.warn('usePatrimonyById / offlineHandler -> Not implemented yet');
};

const handlers = {
  [AUTHENTICATION_TYPE.ONLINE]: onlineHandler,
  [AUTHENTICATION_TYPE.OFFLINE]: offlineHandler,
};

const usePatrimonyById = (id) => {
  const { authenticationType } = useAuthentication();
  const [data, setData] = useState();

  useEffect(() => {
    const getPatrimonyById = handlers[authenticationType];

    if (typeof getPatrimonyById === 'function') {
      getPatrimonyById(id).then((response) => {
        setData(response.data);
      });
    }
  }, []);

  return { data };
};

export default usePatrimonyById;
