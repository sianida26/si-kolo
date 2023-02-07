import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Profil from "./pages/Profil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/profil",
    element: <Profil />
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
