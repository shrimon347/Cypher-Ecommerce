import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import { AuthContext } from "../../contextProvider/AuthProvider";
import userAxiosPublic from "../../hooks/userAxiosPublic";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const axiosPublic = userAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, ProfileUpdate, logout } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        ProfileUpdate(data.username, data.photo).then(() => {
          //create user entry in the database
          const userInfo = {
            name: data.username,
            email: data.email,
            image: data.photo,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              toast.success("User Create Successfully ! Please Login");
              reset();
            }
          });
        });
        logout().then(() => {
          navigate(location?.state ? location.state : "/login");
        });
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        toast.error("User Already Exist");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col md:flex-row w-full md:w-4/5 max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full md:w-1/2 bg-gray-900 text-white flex items-center justify-center p-8">
            <div className="p-8">
              <h2 className="text-4xl font-bold">Welcome Back!</h2>
              <p className="mt-4 text-gray-300">
                Login to your account to continue.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <h2 className="text-3xl font-semibold text-gray-900 text-center">
                Signup
              </h2>
              <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
                <div className="relative mt-4">
                  <FaUser className="absolute left-3 top-3 text-black" />
                  <input
                    type="text"
                    {...register("username", { required: true, maxLength: 80 })}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Username"
                  />
                  {errors.username?.type === "required" && (
                    <p className="text-red-500 py-3">Username is required</p>
                  )}
                </div>
                <div className="relative mt-4">
                  <FaEnvelope className="absolute left-3 top-3 text-black" />
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Email"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-500 py-3">Email is required</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-red-500 py-3">Email is not valid</p>
                  )}
                </div>
                <div className="relative mt-4">
                  <FaEnvelope className="absolute left-3 top-3 text-black" />
                  <input
                    type="text"
                    {...register("photo", { required: true })}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Photo Url"
                  />
                </div>
                <div className="relative mt-4">
                  <FaLock className="absolute left-3 top-3 text-black" />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 30,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,30}$/,
                    })}
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Password"
                  />
                  <div
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  {errors.password?.type === "required" && (
                    <p className="text-red-500 py-3">Password is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500 py-3">
                      Password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500 py-3">
                      Password must be less than 30 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500 py-3">
                      Password must have one uppercase, one lowercase, one
                      number, and one special character
                    </p>
                  )}
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full text-white py-2 rounded-md bg-black hover:bg-gray-800"
                  >
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-4 flex items-center justify-center">
                <div className="border-t border-gray-300 w-full"></div>
                <span className="mx-2 text-gray-400">or</span>
                <div className="border-t border-gray-300 w-full"></div>
              </div>
              <div className="mt-4">
                <SocialLogin />
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-500 hover:underline">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
