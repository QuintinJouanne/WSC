import { Routes, Route } from "react-router-dom";
import CreateWilder from "../pages/CreateWilder/CreateWilder";
import Home from "../pages/Home/Home";
import {
  Container,
  Footer,
  Header,
  MainContainer,
  PageTitle,
  PageTitleLink
} from "./App.styled";

function App() {

  return (
    <>
      <Header>
        <Container>
          <PageTitle><PageTitleLink to="/">Wilders Book</PageTitleLink></PageTitle>
        </Container>
      </Header>
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/create-wilder" element={<CreateWilder/>} />

        </Routes>
      </MainContainer>
      <Footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </Footer>
    </>
  );
}

export default App;