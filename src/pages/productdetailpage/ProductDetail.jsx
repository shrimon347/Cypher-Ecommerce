import { useLoaderData } from "react-router-dom";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import ProductData from "./ProductData";
import Features from "./Features";
import RelatedProduct from "./RelatedProduct";

const ProductDetail = () => {
  const product = useLoaderData()
  
  return (
    <div>
      <Navbar />
      <ProductData product={product} />
      <Features product={product} />
      <RelatedProduct />
      <Footer />
    </div>
  );
};

export default ProductDetail;
