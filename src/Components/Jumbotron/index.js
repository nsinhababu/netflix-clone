import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from './styles/jumbotron';

const Jumbotron = ({ children, direction = 'row', ...rest }) => {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
};

export default Jumbotron;

Jumbotron.Container = ({ children, ...rest }) => {
  return <Container>{children}</Container>;
};

Jumbotron.Pane = ({ children, ...rest }) => {
  return <Pane {...rest}>{children}</Pane>;
};

Jumbotron.Title = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

Jumbotron.SubTitle = ({ children, ...rest }) => {
  return <SubTitle {...rest}>{children}</SubTitle>;
};

Jumbotron.Image = ({ ...rest }) => {
  return <Image {...rest} />;
};
