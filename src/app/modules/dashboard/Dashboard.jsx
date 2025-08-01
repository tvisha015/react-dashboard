import { useUserProfileQuery } from "@/store/api/userApi";
import { useSelector, useDispatch } from "react-redux";
import { logout, setUser } from "@/store/slices/authSlice"; // ✅ import setUser
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Assuming you have a navigate function from react-router
  
  const user = useSelector((state) => state.auth.user);
  console.log("🚀 ~ dashboard ~ user:", user);

  const { data, isLoading, isError, error } = useUserProfileQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );


  // ✅ Dispatch user to Redux when profile is fetched
  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  if(isLoading){
    return <div>Loading...</div>;
  }

  const logoutHandler = () => {
    dispatch(logout())
    navigate("/"); // Assuming you have a navigate function to redirect
  }

  return (
    <>
      <p>Welcome to the Dashboard</p>
      <div className="p-6 text-2xl font-semibold">
        {isLoading ? (
          "Loading user..."
        ) : (
          <>Hello, {user ? user.name : "Guest"}!</>
        )}
        <button onClick={logoutHandler} className="ml-4 px-4 py-2 bg-red-500 text-white rounded">
          Logout
        </button>
      </div>
    </>
  );
};

export default Dashboard;
