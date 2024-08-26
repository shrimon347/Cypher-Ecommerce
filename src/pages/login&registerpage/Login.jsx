import { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaLock,FaEye, FaEyeSlash } from "react-icons/fa";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Navbar from "../../components/shared/Navbar";
import { AuthContext } from "../../contextProvider/AuthProvider";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [captchaInput, setCaptchaInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleCaptchaChange = (e) => {
    setCaptchaInput(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!validateCaptcha(captchaInput)) {
      toast.error("Please fill the captcha correctly.");
      return;
    }else{
        setIsCaptchaValid(true)
    }

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User login Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        toast.error("Invalid email or password.");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
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
                Login
              </h2>
              <form className="mt-8" onSubmit={handleLogin}>
                <div className="relative mt-4">
                  <FaEnvelope className="absolute left-3 top-3 text-black" />
                  <input
                    type="email"
                    name="email"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Email"
                  />
                </div>
                <div className="relative mt-4">
                  <FaLock className="absolute left-3 top-3 text-black" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Password"
                  />
                   <div
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <div className="mt-4">
                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    name="captcha"
                    value={captchaInput}
                    onChange={handleCaptchaChange}
                    className="w-full pl-2 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    placeholder="Fill the above text..."
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className={`w-full text-white py-2 rounded-md ${
                      isCaptchaValid
                        ? "bg-gray-900 hover:bg-gray-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Login
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
                  Don&apos;t have an account?{" "}
                  <Link to="/register" className="text-blue-500 hover:underline">
                    Register
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

export default Login;
