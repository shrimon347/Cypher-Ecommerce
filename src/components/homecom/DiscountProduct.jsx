import useProducts from "../../hooks/useProducts";
import ProductCard from "./ProductCard";

const DiscountProduct = () => {
  const [prdocuts] = useProducts();
  const bestSeller = prdocuts.filter((item) => item.tab === "Best Seller");
  return (
    <div className="max-w-7xl mx-auto py-10">
      <h3 className="text-3xl font-semibold">Discounts up to -50%</h3>
      <div className="py-8 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {bestSeller.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DiscountProduct;
