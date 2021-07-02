import {
  Container,
  List,
  ListItem,
} from '@/components/Layout/RightSideBar/Contacts/MoreAction.style';

const MoreAction = () => {
  const list = [
    { icon: <i className="fas fa-video" /> },
    { icon: <i className="fas fa-search" /> },
    { icon: <i className="fas fa-ellipsis-h" /> },
  ];

  return (
    <Container>
      <List>
        {list.map((item) => (
          <ListItem key={item.icon}>{item.icon}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default MoreAction;
