import {
  Box404,
  Container,
  Number,
  Apologize,
  Button,
  Wrapper,
} from './NotFount.styled';

const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <Box404>
          <Number>404</Number>
        </Box404>
        <Apologize>
          We’re sorry, the page you requested could not be found. Please go back
          to the homepage.
        </Apologize>
        <Button to="/">Back to home</Button>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
