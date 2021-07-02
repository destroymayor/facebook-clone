import useShortcuts from '@/hooks/layout/useShortcuts';
import useToggle from '@/hooks/common/useToggle';

import SeeMoreButton from '@/components/Layout/LeftSideBar/SeeMoreButton';

import {
  Container,
  Header,
  Title,
  MoreAction,
  MoreActionButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemTitle,
} from '@/components/Layout/LeftSideBar/Shortcuts.style';

const Shortcuts = () => {
  const { list } = useShortcuts();
  const { open, toggle } = useToggle(false);

  const handleSeeMoreItem = () => toggle();

  return (
    <Container>
      <Header>
        <Title>Your Shortcuts</Title>
        <MoreAction>
          <MoreActionButton>Edit</MoreActionButton>
        </MoreAction>
      </Header>

      <List>
        {list.map((item) => (
          <ListItem open={item.defaultDisplay || open} key={item.title}>
            <ListItemIcon>
              <i className="fas fa-users" />
            </ListItemIcon>

            <ListItemTitle>{item.title}</ListItemTitle>
          </ListItem>
        ))}
        <SeeMoreButton onClick={handleSeeMoreItem} open={open} />
      </List>
    </Container>
  );
};

export default Shortcuts;
