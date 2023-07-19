import { useState } from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Search from "./components/Search";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CardList from "./components/CardList";
import { store } from "./App/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <div>
        <div>
          <Provider store={store}>
            <Layout>
              <Header />
              <Title />
              <Search />
              <NavBar />
              <CardList />
              <Footer />
            </Layout>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
