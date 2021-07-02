import {
  List,
  ListItem,
  ListItemImage,
  ListItemName,
} from '@/components/Layout/RightSideBar/Common/CustomList.style';

const CustomList = (props) => {
  const { data = [] } = props;

  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.name}>
          <ListItemImage />
          <ListItemName>{item.name}</ListItemName>
        </ListItem>
      ))}
    </List>
  );
};

export default CustomList;
