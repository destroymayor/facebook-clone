import { MessengerIcon, NotificationIcon } from '@/components/common/Icons';

import {
  Container,
  UserItem,
  UserImage,
  UserName,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@/components/Layout/Header/SideBarNavigation.style';

const SideBarNavigation = () => {
  const list = [
    {
      icon: <i className="fas fa-bars" />,
      label: null,
    },
    {
      icon: <MessengerIcon />,
      label: null,
    },
    {
      icon: <NotificationIcon />,
      label: '',
    },
    {
      icon: <i className="fas fa-caret-down" />,
      label: null,
    },
  ];
  return (
    <Container>
      <UserItem>
        <UserImage src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-1/cp0/p40x40/82855035_2877650045589789_7997259028189151232_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=FaTt1BIUDc4AX8DUnv1&_nc_oc=AQlw6goNkkey7FdAo-Qs8yUEIvK4SYPfkpfrYD7GQV85k-hAXGY8UE17OLn83pwdMTA&_nc_ht=scontent-tpe1-1.xx&tp=27&oh=464bcee60f49055df1adcd3ecdb4918d&oe=60E18873" />
        <UserName>User</UserName>
      </UserItem>
      <List>
        {list.map((item, index) => (
          <ListItem key={item.label + index.toString()}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            {item.label && <ListItemText>{item.label}</ListItemText>}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SideBarNavigation;
