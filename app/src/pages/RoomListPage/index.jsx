import { TouchableOpacity, View } from 'react-native';
import useRooms from '../../hooks/useRooms';
import PageHeader from '../../components/PageHeader';
import Card, { CardHeader, CardRow } from '../../components/Card';
import PageContainer from '../../components/PageContainer';
import { useNavigation } from '@react-navigation/native';
import PAGES from '../../constants/pages';

const RoomListPage = () => {
  const { navigate } = useNavigation();
  const { data } = useRooms();

  const handleTouchRoom = (id, name) => () => {
    navigate(PAGES.ROOM_DETAIL, { id, name });
  };

  return (
    <PageContainer>
      <PageHeader title="Salas" isBackHidden />
      <View>
        {data?.map((room) => (
          <Card key={room.id}>
            <TouchableOpacity onPress={handleTouchRoom(room.id, room.name)}>
              <CardHeader>Sala {room.name}</CardHeader>
              <CardRow title="Encontrados:">{room.info.scanned}</CardRow>
              <CardRow title="Não encontrados:">{room.info.notFound}</CardRow>
              <CardRow title="Não registrados:">
                {room.info.notRegistered}
              </CardRow>
              <CardRow title="Total:">{room.info.total}</CardRow>
              <CardRow title="Último scan:">
                {room.info.formattedLastScan}
              </CardRow>
            </TouchableOpacity>
          </Card>
        ))}
      </View>
    </PageContainer>
  );
};

export default RoomListPage;
