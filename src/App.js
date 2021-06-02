import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import BooksProvider from "./context/BooksProvider";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BooksProvider>
          <Routes />
        </BooksProvider>
      </BrowserRouter>
    </div>
  );
}
