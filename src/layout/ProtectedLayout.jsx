import { useRoutes } from "react-router-dom";

const ProtectedLayout = ({ routes }) => {
  const element = useRoutes(routes);

  return (
    <div>
      <header>
        <h1>Header</h1>
      </header>

      <main style={{ padding: "20px" }}>{element}</main>

      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
};

export default ProtectedLayout;
