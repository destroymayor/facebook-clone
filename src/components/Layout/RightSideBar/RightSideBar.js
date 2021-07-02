import dynamic from 'next/dynamic';

import Sponsored from '@/components/Layout/RightSideBar/Sponsored/Sponsored';

import { Container } from '@/components/Layout/RightSideBar/RightSideBar.style';

const Contacts = dynamic(() => import('@/components/Layout/RightSideBar/Contacts/Contacts'));
const GroupConversations = dynamic(() =>
  import('@/components/Layout/RightSideBar/GroupConversations/GroupConversations')
);

const RightSideBar = () => (
  <Container>
    <Sponsored />
    <Contacts />
    <GroupConversations />
  </Container>
);

export default RightSideBar;
