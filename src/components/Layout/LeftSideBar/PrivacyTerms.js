import {
  Container,
  List,
  ListItem,
  ListItemLink,
} from '@/components/Layout/LeftSideBar/PrivacyTerms.style';

const PrivacyTerms = () => {
  const list = [
    {
      title: 'Privacy',
      href: '',
    },
    {
      title: 'Terms',
      href: '',
    },
    {
      title: 'Advertising',
      href: '',
    },
    {
      title: 'Ad Choices',
      href: '',
    },
    {
      title: 'Cookies',
      href: '',
    },
    {
      title: 'More',
      href: '',
    },
    {
      title: `Facebook © ${new Date().getFullYear()}`,
      href: '',
    },
  ];

  return (
    <Container>
      <List>
        {list.map((item) => (
          <ListItem key={item.title}>
            <ListItemLink href={item.href}>{item.title}</ListItemLink> <span> · </span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PrivacyTerms;
