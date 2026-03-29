import { useState } from 'react'
import './App.css'
import Hero from './Component/Hero/Hero'
import Small from './Component/Hero/Small'
import Tools from './Component/Hero/Tools'
import Navbar from './Component/Navbar/Navbar'
import AllCardLode from './Component/AllCardLode/AllCardLode'
import Cart from './Component/Cart/Cart'
import { ToastContainer } from 'react-toastify'
import Step from './Component/Step/Step'
import PricingCard from './Component/PricingCard/PricingCard'
import CatSection from './Component/CatSection/CatSection'
import Footer from './Component/Footer/Footer'


const promisedata =async ()=>{
  const res =await fetch('/data.json')
  return res.json()
}


const data = promisedata()





function App() {
  const [cards,setCard]=useState([])
  // console.log(cards)


  const [activeTab, setActiveTab] = useState("Products");

  return (
    <>
      <Navbar cards={cards}></Navbar>
      <Hero></Hero>
      <Small></Small>
      <Tools></Tools>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box bg-transparent font-bold justify-center mb-9">
        <input
          onClick={() => setActiveTab("Products")}
          type="radio"
          name="my_tabs_1"
          className={` ${activeTab === "Products" ? "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold" : ""}  tab w-40 rounded-full cursor-pointer `}
          aria-label="Products"
          defaultChecked
        />
        <input
          onClick={() => setActiveTab("Cart")}
          type="radio"
          name="my_tabs_1"
          className={`btn ${activeTab === "Cart" ? "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600  text-white font-bold" : ""}  tab w-40 rounded-full cursor-pointer  `}
          aria-label={`Cart ${cards.length}`}
        />
      </div>

      {activeTab === "Products" ? (
        <AllCardLode data={data} cards={cards} setCard={setCard}></AllCardLode>
      ) : (
        <Cart cards={cards} setCard={setCard}></Cart>
      )}
      <ToastContainer />
      <Step></Step>
      <PricingCard></PricingCard>
      <CatSection></CatSection>
      <Footer></Footer>
    </>
  );
}

export default App
