import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';

import CardContainer from '../../components/CardContainer';
import CardBody from '../../components/CardBody';
import CardRow from '../../components/CardRow';
import CardText from '../../components/CardText';
import CardTitle from '../../components/CardTitle';
import PageContainer from '../../components/PageContainer';
import PageTitleContainer from '../../components/PageTitleContainer';
import PageTitle from '../../components/PageTitle';

import Room from '../../interfaces/Room';

import {
  TableRow,
  TableRowButton,
  TableHeaderText,
  TableBodyText,
  Table,
} from './styles';

const initRoom: Room = {
  name: 'C102',
  rfid: '123',
  info: {
    total: 30,
    scanned: 22,
    notFound: 3,
    notRegistered: 5,
    lastScan: new Date(),
  },
  status: {
    hasError: true,
  },
  patrimonies: [
    {
      description: 'Mesa',
      lastScannedDate: new Date(),
      number: '1',
      rfid: '154',
      status: {
        isFound: true,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '2',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '3',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '4',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '5',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '6',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '7',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '8',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '9',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '10',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '11',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '12',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '13',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '14',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '15',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '16',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '17',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '18',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '19',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: 'Cadeira',
      lastScannedDate: new Date(),
      number: '20',
      rfid: '156',
      status: {
        isFound: false,
        isScanned: true,
      },
    },
    {
      description: '',
      lastScannedDate: new Date(),
      number: '',
      rfid: '1566',
      status: {
        isFound: true,
        isScanned: false,
      },
    },
  ],
};

const RoomDetail: FC = () => {
  const [room, setRoom] = useState<Room>(initRoom);

  return (
    <PageContainer>
      <ScrollView style={{ width: '100%' }} keyboardShouldPersistTaps="handled">
        <PageTitleContainer>
          <PageTitle>Detalhes da Sala</PageTitle>
        </PageTitleContainer>
        <CardContainer>
          <CardTitle error={room.status.hasError}>{room.name}</CardTitle>
          <CardBody>
            <CardRow>
              <CardText>Encontrados:</CardText>
              <CardText>{room.info.scanned}</CardText>
            </CardRow>
            <CardRow>
              <CardText>Não Encontrados:</CardText>
              <CardText>{room.info.notFound}</CardText>
            </CardRow>
            <CardRow>
              <CardText>Não Registrados:</CardText>
              <CardText>{room.info.notRegistered}</CardText>
            </CardRow>
            <CardRow>
              <CardText>Total:</CardText>
              <CardText>{room.info.total}</CardText>
            </CardRow>
            <CardRow>
              <CardText>Último Scan:</CardText>
              <CardText>{moment().format('HH:mm DD/MM/YYYY')}</CardText>
            </CardRow>
          </CardBody>
        </CardContainer>

        <Table>
          <TableRow variant="title">
            <TableHeaderText width="20%">Scan?</TableHeaderText>
            <TableHeaderText width="20%">Regist?</TableHeaderText>
            <TableHeaderText width="60%">Descrição</TableHeaderText>
          </TableRow>
          {room.patrimonies.map((patrimony) => (
            <TableRowButton key={patrimony.number}>
              <TableBodyText width="20%">
                <Icon
                  name={patrimony.status.isFound ? 'check-square' : 'square'}
                  size={20}
                  color="#fff"
                />
              </TableBodyText>
              <TableBodyText width="20%">
                <Icon
                  name={patrimony.status.isScanned ? 'check-square' : 'square'}
                  size={20}
                  color="#fff"
                />
              </TableBodyText>
              <TableBodyText width="55%">
                {patrimony.description || '-'}
              </TableBodyText>
              <TableBodyText width="5%">
                <Icon name="chevron-right" size={20} color="#fff" />
              </TableBodyText>
            </TableRowButton>
          ))}
        </Table>
      </ScrollView>
    </PageContainer>
  );
};

export default RoomDetail;
