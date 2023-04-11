import React from 'react';
import Subtitle from '../../../../components/Subtitle';
import Card, { CardHeader, CardRow } from '../../../../components/Card';
import formatDateToString from '../../../../utils/formatDateToString';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PAGES from '../../../../constants/pages';

const PatrimonyGroup = ({ title, patrimonies = [] }) => {
  const { navigate } = useNavigation();

  const handlePatrimonyPress = (id, description) => () => {
    navigate(PAGES.PATRIMONY_DETAIL, { id, description });
  };

  return (
    <>
      <Subtitle>{title}</Subtitle>
      {patrimonies.map((patrimony) => (
        <Card key={patrimony.id}>
          <TouchableOpacity
            onPress={handlePatrimonyPress(patrimony.id, patrimony?.description)}
          >
            <CardHeader>{patrimony.description || 'Sem descrição'}</CardHeader>
            <CardRow title="Número:">{patrimony.number}</CardRow>
            <CardRow title="Último Scan:">
              {formatDateToString(patrimony?.last_scanned_date)}
            </CardRow>
          </TouchableOpacity>
        </Card>
      ))}
    </>
  );
};

export default PatrimonyGroup;
