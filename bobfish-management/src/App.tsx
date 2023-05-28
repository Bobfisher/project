import { useRoutes } from "react-router-dom"
import routers from "./router"
const App = () => {
  const routerView = useRoutes(routers)
  return (
    <div>
      {routerView}
    </div>

  )
}

export default App
