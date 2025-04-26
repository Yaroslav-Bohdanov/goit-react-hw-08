import AppBar from "../AppBar/AppBar";
import Container from "../Container/Container";

const Layout = ({ children }) => {
  return (
    <Container>
      <AppBar />
      {children}
    </Container>
  );
};

export default Layout;
