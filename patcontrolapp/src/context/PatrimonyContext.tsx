import React, { createContext, FC, useContext, useState } from 'react';
import CsvPatrimony from '../interfaces/CsvPatrimony';
import Patrimony from '../interfaces/Patrimony';
import Room from '../interfaces/Room';
import normalizeCsvPatrimony from '../utils/normalizeCsvPatrimony';
import updateRoomsInfo from '../utils/updateRoomsInfo';

interface PatrimonyContextState {
  rooms: Room[];
  isImported: boolean;
  setCsvRooms(csvPatrimonies: CsvPatrimony[]): void;
  getRoomByName(roomName: string): Room | undefined;
  getPatrimonyByNumber(params: IgetPatrimonyByNumber): Patrimony | undefined;
}

interface IgetPatrimonyByNumber {
  roomName: string;
  patrimonyNumber: string;
}

const PatrimonyContext = createContext<PatrimonyContextState>(
  {} as PatrimonyContextState
);

export const PatrimonyProvider: FC = ({ children }) => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isImported, setIsImported] = useState(false);

  const setCsvRooms = (csvPatrimonies: CsvPatrimony[]) => {
    if (!csvPatrimonies) return;

    const normalizedRooms: Room[] = [];

    csvPatrimonies.map((csvPatrimony) => {
      const foundRoom = normalizedRooms.find(
        (room) => room.name === csvPatrimony.room
      );

      if (!foundRoom) {
        normalizedRooms.push({
          name: csvPatrimony.room,
          info: {
            notFound: 0,
            notRegistered: 0,
            scanned: 0,
            total: 0,
            formattedLastScan: null,
          },
          status: { hasError: true },
          patrimonies: [normalizeCsvPatrimony(csvPatrimony)],
        });
      } else {
        foundRoom.patrimonies.push(normalizeCsvPatrimony(csvPatrimony));
      }
    });

    const rooms = updateRoomsInfo(normalizedRooms);

    setRooms(rooms);
    setIsImported(true);
  };

  const getRoomByName = (roomName: string): Room | undefined => {
    return rooms.find((room) => room.name === roomName);
  };

  const getPatrimonyByNumber = ({
    patrimonyNumber,
    roomName,
  }: IgetPatrimonyByNumber): Patrimony | undefined => {
    const room = getRoomByName(roomName);

    if (!room) return;

    return room.patrimonies?.find(
      (patrimony) => patrimony.number === patrimonyNumber
    );
  };

  return (
    <PatrimonyContext.Provider
      value={{
        rooms,
        isImported,
        setCsvRooms,
        getRoomByName,
        getPatrimonyByNumber,
      }}
    >
      {children}
    </PatrimonyContext.Provider>
  );
};

export function usePatrimony(): PatrimonyContextState {
  return useContext(PatrimonyContext);
}
