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
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';

function App() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dnimmdew4' } });
  const myImage = cld.image("cld-sample-5").format("png").toURL();
  const myVideo = cld.video("cld-sample-audio").toURL();


  console.log("----------", myVideo);
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
              <CardList myImage={myImage} myVideo={myVideo} />
              <Footer />
            </Layout>
          </Provider>
        </div>
      </div>
    </>
  );
}

export default App;
