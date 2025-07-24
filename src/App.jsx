import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";

const Routes = lazy(() => import("./app/routes/Routes"));

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;