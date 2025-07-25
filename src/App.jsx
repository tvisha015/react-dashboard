import { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "./components/theme-provider";
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Routes = lazy(() => import("./app/routes/Routes"));

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
              <PersistGate persistor={persistor} loading={null}>
                <Routes />
              </PersistGate>
          </Provider>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;