import { useRoute } from '@react-navigation/native';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';
import useRoomById from '../../hooks/useRoomById';
import { CardRow } from '../../components/Card';
import PatrimonyGroup from './components/PatrimonyGroup';
import formatDateToString from '../../utils/formatDateToString';

const RoomDetailPage = () => {
  const { params } = useRoute();
  const { data } = useRoomById(params.id);

  return (
    <PageContainer>
      <PageHeader title={`Sala ${params.name}`} />
      <CardRow title="Último Scan:">
        {formatDateToString(data?.last_scanned_date)}
      </CardRow>
      <PatrimonyGroup
        title="Encontrados"
        patrimonies={data?.formattedPatrimonies.scanned}
      />
      <PatrimonyGroup
        title="Não encontrados"
        patrimonies={data?.formattedPatrimonies.notFound}
      />
      <PatrimonyGroup
        title="Não registrados"
        patrimonies={data?.formattedPatrimonies.notRegistered}
      />
    </PageContainer>
  );
};

export default RoomDetailPage;
