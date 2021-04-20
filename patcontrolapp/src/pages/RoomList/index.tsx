import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import moment from 'moment';

import CardContainer from '../../components/CardContainer';
import CardBody from '../../components/CardBody';
import CardRow from '../../components/CardRow';
import CardText from '../../components/CardText';
import CardTitle from '../../components/CardTitle';
import PageContainer from '../../components/PageContainer';
import PageTitleContainer from '../../components/PageTitleContainer';
import PageTitle from '../../components/PageTitle';

interface Room {
  name: string;
  rfid?: string;
  patrimony: {
    total: number;
    scanned: number;
    notFound: number;
    notRegistered: number;
    lastScan: Date;
  };
  status: {
    hasError: boolean;
  };
}

const roomsTest: Room[] = [
  {
    name: 'C102',
    rfid: '123',
    patrimony: {
      total: 30,
      scanned: 22,
      notFound: 3,
      notRegistered: 5,
      lastScan: new Date(),
    },
    status: {
      hasError: true,
    },
  },
  {
    name: 'C103',
    patrimony: {
      total: 40,
      scanned: 33,
      notFound: 6,
      notRegistered: 1,
      lastScan: new Date(),
    },
    status: {
      hasError: true,
    },
  },
  {
    name: 'C104',
    patrimony: {
      total: 23,
      scanned: 22,
      notFound: 1,
      notRegistered: 0,
      lastScan: new Date(),
    },
    status: {
      hasError: true,
    },
  },
  {
    name: 'C105',
    rfid: '1489',
    patrimony: {
      total: 30,
      scanned: 30,
      notFound: 0,
      notRegistered: 0,
      lastScan: new Date(),
    },
    status: {
      hasError: false,
    },
  },
];

const RoomList: FC = () => {
  const [rooms, setRooms] = useState<Room[]>(roomsTest);

  return (
    <PageContainer>
      <PageTitleContainer>
        <PageTitle>Salas</PageTitle>
      </PageTitleContainer>
      <ScrollView
        style={{ width: '100%', marginTop: 8 }}
        keyboardShouldPersistTaps="handled"
      >
        {rooms.map((room) => (
          <CardContainer key={room.name}>
            <CardTitle error={room.status.hasError}>{room.name}</CardTitle>
            <CardBody>
              <CardRow>
                <CardText>Encontrados:</CardText>
                <CardText>{room.patrimony.scanned}</CardText>
              </CardRow>
              <CardRow>
                <CardText>Não Encontrados:</CardText>
                <CardText>{room.patrimony.notFound}</CardText>
              </CardRow>
              <CardRow>
                <CardText>Não Registrados:</CardText>
                <CardText>{room.patrimony.notRegistered}</CardText>
              </CardRow>
              <CardRow>
                <CardText>Total:</CardText>
                <CardText>{room.patrimony.total}</CardText>
              </CardRow>
              <CardRow>
                <CardText>Último Scan:</CardText>
                <CardText>{moment().format('HH:mm DD/MM/YYYY')}</CardText>
              </CardRow>
            </CardBody>
          </CardContainer>
        ))}
      </ScrollView>
    </PageContainer>
  );
};

export default RoomList;
