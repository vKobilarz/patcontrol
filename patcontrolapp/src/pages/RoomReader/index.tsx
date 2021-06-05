import { useRoute } from '@react-navigation/core';
import React, { FC } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import PageContainer from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';

const RoomReader: FC = () => {
  const { params } = useRoute();

  // @ts-ignore
  const { roomName } = params;

  return (
    <PageContainer>
      <ScrollView style={{ width: '100%' }} keyboardShouldPersistTaps="handled">
        <PageTitle>Sala #{roomName}</PageTitle>
      </ScrollView>
    </PageContainer>
  );
};

export default RoomReader;
