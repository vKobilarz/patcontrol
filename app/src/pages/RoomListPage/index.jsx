import { TouchableOpacity, View } from 'react-native';
import useRooms from '../../hooks/useRooms';
import PageHeader from '../../components/PageHeader';
import Card, { CardHeader, CardRow } from '../../components/Card';
import PageContainer from '../../components/PageContainer';
import { useNavigation } from '@react-navigation/native';
import PAGES from '../../constants/pages';
import formatDateToString from '../../utils/formatDateToString';
import PageAction from '../../components/PageAction';

const RoomListPage = () => {
  const { navigate } = useNavigation();
  const { data } = useRooms();

  const handleTouchRoom = (id, name) => () => {
    navigate(PAGES.ROOM_DETAIL, { id, name });
  };

  const handleTouchNewRoom = () => {
    console.warn('handleTouchNewRoom not implemented yet');
  };

  return (
    <PageContainer>
      <PageHeader title="Salas" isBackHidden />
      <TouchableOpacity onPress={handleTouchNewRoom}>
        <PageAction>Cadastrar Sala</PageAction>
      </TouchableOpacity>
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
                {formatDateToString(room.last_scanned_date)}
              </CardRow>
            </TouchableOpacity>
          </Card>
        ))}
      </View>
    </PageContainer>
  );
};

export default RoomListPage;
