import { useRoute } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import PageContainer from '../../components/PageContainer';
import usePatrimonyById from '../../hooks/usePatrimonyById';
import { CardRow } from '../../components/Card';
import formatDateToString from '../../utils/formatDateToString';
import PageAction from '../../components/PageAction';
import { TouchableOpacity } from 'react-native';

const PatrimonyDetailPage = () => {
  const { params } = useRoute();
  const { data } = usePatrimonyById(params?.id);

  if (!data) {
    return null;
  }

  const handleRemoveRegisterPress = () => {
    console.warn('handleRemoveRegister not implemented yet');
  };

  const handleAddRegisterPress = () => {
    console.warn('handleAddRegisterPress not implemented yet');
  };

  const handleScanPress = () => {
    console.warn('handleScanPress not implemented yet');
  };

  return (
    <PageContainer>
      <PageHeader title={`Patrimônio ${params?.description || ''}`} />
      {!!data.rfid ? (
        <TouchableOpacity onPress={handleRemoveRegisterPress}>
          <PageAction>Remover Registro</PageAction>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleAddRegisterPress}>
          <PageAction>Registrar</PageAction>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleScanPress}>
        <PageAction>Escanear Patrimônio</PageAction>
      </TouchableOpacity>
      <CardRow title="Número:">{data.number}</CardRow>
      <CardRow title="RFID:">{data.rfid}</CardRow>
      <CardRow title="Último Scan:">
        {formatDateToString(data.last_scanned_date)}
      </CardRow>
    </PageContainer>
  );
};

export default PatrimonyDetailPage;
