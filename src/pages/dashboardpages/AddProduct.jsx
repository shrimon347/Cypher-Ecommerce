import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import userAxiosPublic from "../../hooks/userAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = userAxiosPublic();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // Transform data to match MongoDB document structure
      const productData = {
        name: data.name,
        brand: data.brand,
        category: data.category,
        price: parseInt(data.price),
        description: data.description,
        rating: parseFloat(data.rating),
        stock: parseInt(data.stock),
        imageUrl: res.data.data.display_url,
        details: {
          BatteryLife: data.batteryLife,
          Weight: data.weight,
          Connectivity: data.connectivity,
        },
        features: data.features.split(",").map((feature) => feature.trim()),
        tab: data.tab,
      };

      try {
        const response = await axiosSecure.post("/addProduct", productData);
        if (response.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your product added to the Inventory",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        reset();
      } catch (error) {
        toast.error("Somthing wrong! try again !");
      }
    }
  };

  return (
    <div className="w-full mx-auto px-8 py-6">
      <h1 className="text-2xl font-semibold mb-4">Add Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div>
          <label className="block mb-1 font-medium">Product Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Brand</label>
          <input
            type="text"
            {...register("brand", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            {...register("category", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          ></textarea>
        </div>
        <div>
          <label className="block mb-1 font-medium">Rating</label>
          <input
            type="number"
            step="0.1"
            {...register("rating", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Stock</label>
          <input
            type="number"
            {...register("stock", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Image File</label>
          <input
            {...register("image", { required: true })}
            type="file"
            required
            className="file-input file-input-bordered w-full "
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Battery Life</label>
          <input
            type="text"
            {...register("batteryLife", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Weight</label>
          <input
            type="text"
            {...register("weight", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Connectivity</label>
          <input
            type="text"
            {...register("connectivity", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">
            Features (comma separated)
          </label>
          <input
            type="text"
            {...register("features", { required: true })}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Tab</label>
          <input
            type="text"
            placeholder="best seller, featured products, new arrival"
            {...register("tab")}
            className="w-full px-3 py-2 border rounded-md"
            required
          />
        </div>
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
