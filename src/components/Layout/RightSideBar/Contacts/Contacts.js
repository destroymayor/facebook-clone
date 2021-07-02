import MoreAction from '@/components/Layout/RightSideBar/Contacts/MoreAction';
import CustomList from '@/components/Layout/RightSideBar/Common/CustomList';

import {
  Container,
  Header,
  Title,
  DiverLine,
} from '@/components/Layout/RightSideBar/Contacts/Contacts.style';

const Contacts = () => {
  const list = [
    {
      image: '',
      name: 'User 1',
      friends: '34 mutual friends including User 1 and User 2',
      PlaceOfResidence: 'Lives in Taipei, Taiwan',
    },
    {
      image: '',
      name: 'User 2',
      friends: '20 mutual friends including User 3 and User 6',
      PlaceOfResidence: null,
    },
    { image: '', name: 'User 3', friends: null, PlaceOfResidence: 'Lives in Taipei, Taiwan' },
    { image: '', name: 'User 4', friends: null, PlaceOfResidence: null },
    { image: '', name: 'User 5', friends: null, PlaceOfResidence: null },
    {
      image: '',
      name: 'User 6',
      friends: '5 mutual friends including User 1 and User 2',
      PlaceOfResidence: 'Lives in Taipei, Taiwan',
    },
    { image: '', name: 'User 7', friends: null, PlaceOfResidence: null },
  ];

  return (
    <Container>
      <Header>
        <Title>Contacts</Title>
        <MoreAction />
      </Header>
      <CustomList data={list} />
      <DiverLine />
    </Container>
  );
};

export default Contacts;
