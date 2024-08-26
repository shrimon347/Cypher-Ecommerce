import Banner from "../../components/homecom/Banner"
import Category from "../../components/homecom/Category"
import DiscountProduct from "../../components/homecom/DiscountProduct"
import Hero from "../../components/homecom/Hero"
import OfferSalebanner from "../../components/homecom/OfferSalebanner"
import ProductSwiper from "../../components/homecom/ProductSwiper"
import ProductTab from "../../components/homecom/ProductTab"
import Footer from "../../components/shared/Footer"
import Navbar from "../../components/shared/Navbar"

const Home = () => {
  return (
    <div >
    <Navbar />
    <Banner />
    <Hero />
    <Category />
    <ProductTab />
    <ProductSwiper />
    <DiscountProduct />
    <OfferSalebanner />
    <Footer />
    </div>
  )
}

export default Home