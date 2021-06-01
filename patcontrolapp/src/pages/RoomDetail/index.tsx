import React, { FC, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, useNavigation } from '@react-navigation/core';
import moment from 'moment';

import CardContainer from '../../components/CardContainer';
import CardBody from '../../components/CardBody';
import CardRow from '../../components/CardRow';
import CardText from '../../components/CardText';
import CardTitle from '../../components/CardTitle';
import PageContainer from '../../components/PageContainer';
import PageTitleContainer from '../../components/PageTitleContainer';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';

import Room from '../../interfaces/Room';

import {
  TableRow,
  TableRowButton,
  TableHeaderText,
  TableBodyText,
  Table,
} from './styles';
import { usePatrimony } from '../../context/PatrimonyContext';

const RoomDetail: FC = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();
  const { getRoomByName } = usePatrimony();

  const [room, setRoom] = useState<Room>();

  useEffect(() => {
    // @ts-ignore
    const foundRoom = getRoomByName(params.roomName);

    if (!foundRoom) {
      goBack();

      return;
    }

    setRoom(foundRoom);
  });

  if (!room) return null;

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
              <CardText>{room.info.formattedLastScan}</CardText>
            </CardRow>
          </CardBody>
        </CardContainer>

        <Button iconName="search">Escanear sala</Button>

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
