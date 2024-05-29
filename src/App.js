import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Banner from './components/Banner'
import Topic from './components/Topic'
import Footer from './components/Footer'
import Recommended from './components/Recommended'
import Popular from './components/Popular'

function App() {
   return(
    <>
       <Navbar></Navbar>
      <Categories></Categories>
      <Banner></Banner>
      <Recommended></Recommended>
      <Topic></Topic>
      <Popular></Popular>
      <Footer></Footer>
    </>
   )
}

export default App