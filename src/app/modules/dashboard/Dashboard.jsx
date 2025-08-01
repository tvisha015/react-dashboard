import { useUserProfileQuery } from "@/store/api/userApi";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/store/slices/authSlice"; // ✅ import setUser
import { useEffect } from "react";

const Dashboard = () => {
  const dispatch = useDispatch();
  
  const user = useSelector((state) => state.auth.user);
  console.log("🚀 ~ dashboard ~ user:", user);

  const { data, isLoading, isError, error } = useUserProfileQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  console.log("🚀 ~ dashboard ~ data:", data);

  // ✅ Dispatch user to Redux when profile is fetched
  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  if(isLoading){
    return <div>Loading...</div>;
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
      </div>
    </>
  );
};

export default Dashboard;
