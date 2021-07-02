import useLeftSideNavigation from '@/hooks/layout/useLeftSideNavigation';
import useToggle from '@/hooks/common/useToggle';

import SeeMoreButton from '@/components/Layout/LeftSideBar/SeeMoreButton';

import {
  List,
  ListItem,
  ListItemIcon,
  ListItemTitle,
  DiverLine,
} from '@/components/Layout/LeftSideBar/Navigation.style';

const Navigation = () => {
  const { list } = useLeftSideNavigation();
  const { open, toggle } = useToggle(false);

  const handleSeeMoreItem = () => toggle();

  return (
    <List>
      {list.map((item) => (
        <ListItem open={item.defaultDisplay || open} key={item.title}>
          {item.icon && <ListItemIcon src={item.icon} />}

          <ListItemTitle>{item.title}</ListItemTitle>
        </ListItem>
      ))}
      <SeeMoreButton onClick={handleSeeMoreItem} open={open} />

      <DiverLine />
    </List>
  );
};

export default Navigation;
