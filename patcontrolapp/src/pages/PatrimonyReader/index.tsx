import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/core';
import { ScrollView } from 'react-native-gesture-handler';

import Patrimony from '../../interfaces/Patrimony';

import { usePatrimony } from '../../context/PatrimonyContext';

import PageContainer from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import CardContainer from '../../components/CardContainer';
import CardTitle from '../../components/CardTitle';
import CardBody from '../../components/CardBody';
import CardRow from '../../components/CardRow';
import CardText from '../../components/CardText';
import Button from '../../components/Button';

const PatrimonyReader: FC = () => {
  const { params } = useRoute();
  const { getPatrimonyByNumber } = usePatrimony();

  const [patrimony, setPatrimony] = useState<Patrimony | undefined>();

  // @ts-ignore
  const { patrimonyNumber, roomName } = params;

  useEffect(() => {
    const patrimony = getPatrimonyByNumber({ patrimonyNumber, roomName });

    setPatrimony(patrimony);
  }, []);

  const handleScanPatrimonyPress = useCallback(() => {}, [patrimony]);

  const hasError = useMemo(
    () => !patrimony?.lastScannedDate || !patrimony?.rfid,
    [patrimony?.lastScannedDate, patrimony?.rfid]
  );

  if (!patrimony) return null;

  return (
    <PageContainer>
      <ScrollView style={{ width: '100%' }} keyboardShouldPersistTaps="handled">
        <PageTitle>Patrimônio #{patrimonyNumber}</PageTitle>
        <CardContainer>
          <CardTitle error={hasError}>{patrimony.description}</CardTitle>
          <CardBody>
            <CardRow>
              <CardText>Número:</CardText>
              <CardText>{patrimony.number}</CardText>
            </CardRow>
            <CardRow>
              <CardText>Tag RFID:</CardText>
              <CardText>{patrimony.rfid || '-'}</CardText>
            </CardRow>
            <CardRow>
              <CardText>Último Scan:</CardText>
              <CardText>{patrimony.lastScannedDate || '-'}</CardText>
            </CardRow>
          </CardBody>
        </CardContainer>
        <Button onPress={handleScanPatrimonyPress} iconName="search">
          Escanear Patrimônio
        </Button>
      </ScrollView>
    </PageContainer>
  );
};

export default PatrimonyReader;
