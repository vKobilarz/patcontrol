import React, { useCallback } from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import * as RNFS from 'react-native-fs';
import { convertCSVToArray } from 'convert-csv-to-array';

import CsvPatrimony from '../../interfaces/CsvPatrimony';

import { usePatrimony } from '../../context/PatrimonyContext';

import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';

import { ActionsContainer } from './styles';
import csvModel from '../../utils/csvModel';

const CsvReader = () => {
  const { setCsvRooms, isImported } = usePatrimony();
  const { navigate } = useNavigation();

  const requestFilePerimission = async () => {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ]);
    } catch (err) {
      console.warn(err);
    }
    const readGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );
    const writeGranted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    );
    if (!readGranted || !writeGranted) {
      console.log('Read and write permissions have not been granted');
      return;
    }
  };

  const importCsv = useCallback(async () => {
    await requestFilePerimission();

    try {
      const csvFile = await RNFS.readFile(
        `${RNFS.DownloadDirectoryPath}/pat-control.csv`
      );

      const patArrayOfArrays = convertCSVToArray(csvFile, {
        type: 'array',
        separator: ',',
        header: false,
      });

      const mappedPatrimony: CsvPatrimony[] = patArrayOfArrays.map((pat) => ({
        room: pat[0],
        patrimonyName: pat[1],
        patrimonyNumber: pat[2],
        lastScannedDate: pat[3],
        rfid: pat[4],
      }));

      setCsvRooms(mappedPatrimony);

      Alert.alert(
        'Aviso',
        'Arquivo CSV importado com sucesso!',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: true }
      );
    } catch (err) {
      Alert.alert('Erro', err, [{ text: 'OK', onPress: () => {} }], {
        cancelable: true,
      });
    }
  }, []);

  const createCsvModel = useCallback(() => {
    try {
      RNFS.writeFile(`${RNFS.DownloadDirectoryPath}/pat-control.csv`, csvModel);

      Alert.alert(
        'Aviso',
        'Modelo de CSV baixado com sucesso! Verifique sua pasta de Download.',
        [{ text: 'OK', onPress: () => {} }],
        { cancelable: true }
      );
    } catch (err) {
      Alert.alert('Erro', err, [{ text: 'OK', onPress: () => {} }], {
        cancelable: true,
      });
    }
  }, []);

  return (
    <PageContainer justifyContent="space-between">
      <PageTitle>Importação de CSV</PageTitle>
      <ActionsContainer>
        <Button iconName="download" onPress={createCsvModel}>
          Baixar Modelo
        </Button>
        <Button iconName="upload" onPress={importCsv}>
          Importar Planilha
        </Button>
      </ActionsContainer>
      {isImported && (
        <Button
          onPress={() => navigate('RoomList')}
          iconName="chevron-right"
          bottomGutter
        >
          Continuar
        </Button>
      )}
    </PageContainer>
  );
};

export default CsvReader;
