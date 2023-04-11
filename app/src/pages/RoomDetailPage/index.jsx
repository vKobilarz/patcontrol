import { useRoute } from '@react-navigation/native';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';
import useRoomById from '../../hooks/useRoomById';
import { CardRow } from '../../components/Card';
import PatrimonyGroup from './components/PatrimonyGroup';
import formatDateToString from '../../utils/formatDateToString';
import { TouchableOpacity } from 'react-native';
import PageAction from '../../components/PageAction';

const RoomDetailPage = () => {
  const { params } = useRoute();
  const { data } = useRoomById(params.id);

  const handleTouchEditRoom = () => {
    console.warn('handleTouchEditRoom not implemented yet');
  };

  const handleTouchRemoveRoom = () => {
    console.warn('handleTouchRemoveRoom not implemented yet');
  };

  const handleTouchScanRoom = () => {
    console.warn('handleTouchScanRoom not implemented yet');
  };

  return (
    <PageContainer>
      <PageHeader title={`Sala ${params.name}`} />
      <TouchableOpacity onPress={handleTouchEditRoom}>
        <PageAction>Editar Sala</PageAction>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTouchRemoveRoom}>
        <PageAction>Remover Sala</PageAction>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTouchScanRoom}>
        <PageAction>Escanear Sala</PageAction>
      </TouchableOpacity>
      <CardRow title="Último Scan:">
        {formatDateToString(data?.last_scanned_date)}
      </CardRow>
      <PatrimonyGroup
        title="Patrimônios Encontrados"
        patrimonies={data?.formattedPatrimonies.scanned}
      />
      <PatrimonyGroup
        title="Patrimônios não encontrados"
        patrimonies={data?.formattedPatrimonies.notFound}
      />
      <PatrimonyGroup
        title="Patrimônios não registrados"
        patrimonies={data?.formattedPatrimonies.notRegistered}
      />
    </PageContainer>
  );
};

export default RoomDetailPage;
