import { Container, Icon, Label } from '@/components/Layout/LeftSideBar/SeeMoreButton.style';

const SeeMoreButton = (props) => {
  const { open, onClick } = props;

  return (
    <Container onClick={onClick}>
      <Icon>{open ? <i className="fas fa-angle-up" /> : <i className="fas fa-angle-down" />}</Icon>
      <Label>See More</Label>
    </Container>
  );
};

export default SeeMoreButton;
