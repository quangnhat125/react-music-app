import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CardList from "./components/CardList";

function App() {
  const [tabSelected, setTabSelected] = useState(1);

  return (
    <>
      <div>
        <div>
          <Layout>
            <Header />
            <Title />
            <Search />
            <CardList />
            <NavBar tabSelected={tabSelected} setTabSelected={setTabSelected} />
            <Footer />
          </Layout>
        </div>
      </div>
    </>
  );
}

export default App;
