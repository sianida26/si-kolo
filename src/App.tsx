import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CapaianPage from "./pages/CapaianPage";
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
  },
  {
    path: "/capaian-dan-tujuan-pembelajaran",
    element: <CapaianPage />
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
