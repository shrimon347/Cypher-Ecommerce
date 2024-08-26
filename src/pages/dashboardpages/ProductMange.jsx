import { RxCross2 } from "react-icons/rx";
import { SlNote } from "react-icons/sl";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useProducts from "../../hooks/useProducts";
import { Link } from "react-router-dom";

const ProductMange = () => {
  const [products, loading, refetch] = useProducts();
  const axiosSecure = useAxiosSecure();
  const handleToDelete = (product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/product/${product._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            icon: "success",
            title: `${product.name} has been Deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  if (loading) {
    return (
      <div className="w-1/4 mx-auto p-16">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="px-6 py-6">
      <h2 className="text-2xl m-5 text-center">Manage products</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={product.imageUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="w-1/3">
                  <div>{product.name}</div>
                </td>
                <td>${product.price}</td>
                <td>
                  <Link to={`/dashboard/updateproduct/${product._id}`}><button
                    
                    className="p-2"
                  >
                    <SlNote className="text-2xl" />
                  </button></Link>
                </td>
                <td>
                  <button
                    onClick={() => handleToDelete(product)}
                    className="p-2"
                  >
                    <RxCross2 className="text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductMange;
