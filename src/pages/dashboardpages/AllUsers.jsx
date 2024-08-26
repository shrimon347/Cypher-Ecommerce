import { useQuery } from "@tanstack/react-query";
import { FaUsers } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users")
      return res.data;
    },
  });
  const handletoDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleToMakeAdmin = (user)=> {
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res => {
        if(res.data.modifiedCount > 0) {
            refetch()
            Swal.fire({
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  { user.role === 'admin' ? "Admin" :
                    <div onClick={()=> handleToMakeAdmin(user)} className="">
                    <FaUsers className="text-2xl font-semibold cursor-pointer" />
                  </div>}
                </td>
                <td>
                  <div onClick={() => handletoDelete(user)} className="">
                    <RxCross2 className="text-2xl font-semibold cursor-pointer" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
