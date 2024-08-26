import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "./style.css";
import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";
// import ProductCard from "./ProductCard";
const ProductTab = () => {
  const [prdocuts,loading] = useProducts()
  const newArival = prdocuts.filter(item => item.tab === "New Arrival")
  const bestSeller = prdocuts.filter(item => item.tab === "Best Seller")
  const featuredProduct = prdocuts.filter(item => item.tab === "Featured Product")
  if (loading) {
    return <div><span className="loading loading-spinner loading-md"></span></div>;
  }
  return (
    
    <div className="max-w-7xl mx-auto !py-12 p-4 md:p-0">
      <Tabs>
        <TabList>
          <Tab>New Arrival</Tab>
          <Tab>Bestseller</Tab>
          <Tab>Featured Products</Tab>
        </TabList>

        <TabPanel className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
         {
          newArival.map(product => <ProductCard key={product._id} product={product} />)
         }
        </TabPanel>
        <TabPanel className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {
          bestSeller.map(product => <ProductCard key={product._id} product={product} />)
         }
        </TabPanel>
        <TabPanel className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {
          featuredProduct.map(product => <ProductCard key={product._id} product={product} />)
         }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ProductTab;
