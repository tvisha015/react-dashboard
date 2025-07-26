import { useSelector } from "react-redux";

const dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <p>Welcome to the Dashboard</p>
      <div className="p-6 text-2xl font-semibold">
        Hello, {user ? user.username : "Guest"}!
      </div>  
    </>
  )
}

export default dashboard