import {
  Container,
  Title,
  List,
  ListItem,
  ListItemImage,
  ListItemDescription,
  ListItemTitle,
  ListItemLink,
  DiverLine,
} from '@/components/Layout/RightSideBar/Sponsored/Sponsored.style';

const Sponsored = () => {
  const list = [
    { image: '', title: '透過 User Eats 選購生鮮雜貨', link: '' },
    { image: '', title: 'Smart UE code assistance', link: 'jetbrains.com' },
  ];

  return (
    <Container>
      <Title>Sponsored</Title>
      <List>
        {list.map((item) => (
          <ListItem key={item.title}>
            <ListItemImage />
            <ListItemDescription>
              <ListItemTitle>{item.title}</ListItemTitle>
              <ListItemLink>{item.link}</ListItemLink>
            </ListItemDescription>
          </ListItem>
        ))}
      </List>
      <DiverLine />
    </Container>
  );
};

export default Sponsored;
