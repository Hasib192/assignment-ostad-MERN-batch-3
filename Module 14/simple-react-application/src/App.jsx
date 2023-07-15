import { useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/footer";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
