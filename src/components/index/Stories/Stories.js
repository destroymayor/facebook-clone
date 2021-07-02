import {
  Container,
  List,
  ListItem,
  ListItemImage,
  ListItemName,
} from '@/components/index/Stories/Stories.style';

const Stories = () => {
  const list = [
    { name: 'User 1' },
    { name: 'User 2' },
    { name: 'User 3' },
    { name: 'User 4' },
    { name: 'User 5' },
  ];
  return (
    <Container>
      <List>
        {list.map((item) => (
          <ListItem key={item.name}>
            <ListItemImage>User</ListItemImage>
            <ListItemName>{item.name}</ListItemName>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Stories;
