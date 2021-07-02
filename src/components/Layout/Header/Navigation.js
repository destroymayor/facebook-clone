import { useRouter } from 'next/router';

import {
  HomeIcon,
  WatchIcon,
  MarketplaceIcon,
  GroupsIcon,
  GamingIcon,
} from '@/components/common/Icons';

import {
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemDiverLine,
} from '@/components/Layout/Header/Navigation.style';

const Navigation = () => {
  const router = useRouter();

  const list = [
    {
      pathname: '/',
      title: 'Home',
      icon: <HomeIcon />,
    },
    {
      pathname: '/watch',
      title: 'Watch',
      icon: <WatchIcon />,
    },
    {
      pathname: '/marketplace',
      title: 'Marketplace',
      icon: <MarketplaceIcon />,
    },
    {
      pathname: '/groups',
      title: 'Groups',
      icon: <GroupsIcon />,
    },
    {
      pathname: '/gaming',
      title: 'Gaming',
      icon: <GamingIcon />,
    },
  ];

  const handleNavigation = (pathname) => router.push(pathname);

  return (
    <Container>
      <List>
        {list.map((item) => (
          <ListItem
            key={item.title}
            selected={item.pathname === router.pathname}
            onClick={() => handleNavigation(item.pathname)}
          >
            <ListItemIcon selected={item.pathname === router.pathname}>{item.icon}</ListItemIcon>
            {item.pathname === router.pathname && <ListItemDiverLine />}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Navigation;
