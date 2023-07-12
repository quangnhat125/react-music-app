import { useState } from 'react'
import Header from './components/Header'
import Layout from './components/Layout'
import Title from './components/Title'
import Search from './components/Search'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <div>
      <div>
        <Layout>
          <Header/>
          <Title/>
          <Search/>
          <NavBar/>
          <Footer/>
        </Layout>
      </div>
    </div>
    </>
  )
}

export default App
