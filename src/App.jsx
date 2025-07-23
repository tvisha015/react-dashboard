import { lazy } from 'react'
import { BrowserRouter} from 'react-router-dom'

const Routes = lazy(() => import("./app/routes/Routes"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  )
}

export default App