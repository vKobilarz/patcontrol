import { useRoute } from '@react-navigation/native';
import { Text } from 'react-native';
import PageContainer from '../../components/PageContainer';
import PageHeader from '../../components/PageHeader';

const RoomDetailPage = () => {
  const { params } = useRoute();

  return (
    <PageContainer>
      <PageHeader title={`Sala ${params.name}`} />
    </PageContainer>
  );
};

export default RoomDetailPage;
