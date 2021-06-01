import React, { FC, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';

import CardButtonContainer from '../../components/CardButtonContainer';
import CardBody from '../../components/CardBody';
import CardRow from '../../components/CardRow';
import CardText from '../../components/CardText';
import CardTitle from '../../components/CardTitle';
import PageContainer from '../../components/PageContainer';
import PageTitleContainer from '../../components/PageTitleContainer';
import PageTitle from '../../components/PageTitle';

import Room from '../../interfaces/Room';
import { usePatrimony } from '../../context/PatrimonyContext';

const RoomList: FC = () => {
  const { rooms } = usePatrimony();
  const navigation = useNavigation();

  const handleOnRoomPress = (roomName: string) => {
    navigation.navigate('RoomDetail', { roomName });
  };

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
          <CardButtonContainer
            key={room.name}
            onPress={() => handleOnRoomPress(room.name)}
          >
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
          </CardButtonContainer>
        ))}
      </ScrollView>
    </PageContainer>
  );
};

export default RoomList;
