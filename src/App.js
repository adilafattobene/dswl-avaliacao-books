import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import BooksProvider from "./context/BooksProvider";
import styled from "styled-components";

const App = styled.div`
  text-align: center;
`;

export default function AppComponent() {
  return (
    <App>
      <BrowserRouter>
        <BooksProvider>
          <Routes />
        </BooksProvider>
      </BrowserRouter>
    </App>
  );
}
