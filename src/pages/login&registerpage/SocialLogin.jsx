import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import userAxiosPublic from "../../hooks/userAxiosPublic";

const SocialLogin = () => {
  const axiosPublic = userAxiosPublic();
  const { signInGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleSignInWithGoogle = () => {
    signInGoogle().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        image: res.user?.photoURL,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        toast.success("User login Successfully");
        navigate(location?.state ? location.state : "/");
      });
    });
  };
  return (
    <div>
      <button
        className="w-full bg-white border border-gray-300 text-gray-900 py-2 rounded-md flex items-center justify-center hover:bg-gray-100"
        onClick={handleSignInWithGoogle}
      >
        <FaGoogle className="mr-2" />
        Login with Google
      </button>
    </div>
  );
};

export default SocialLogin;
