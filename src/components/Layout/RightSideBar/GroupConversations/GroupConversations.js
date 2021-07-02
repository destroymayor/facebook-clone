import CustomList from '@/components/Layout/RightSideBar/Common/CustomList';

import {
  Container,
  Header,
  Title,
} from '@/components/Layout/RightSideBar/GroupConversations/GroupConversations.style';

const GroupConversations = () => {
  const list = [
    {
      image: '',
      name: 'Group 1',
    },
    {
      image: '',
      name: 'Group 2',
    },
  ];

  return (
    <Container>
      <Header>
        <Title>Group Conversations</Title>
      </Header>
      <CustomList data={list} />
    </Container>
  );
};

export default GroupConversations;
