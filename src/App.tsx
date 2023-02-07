import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CapaianPage from "./pages/CapaianPage";
import LandingPage from "./pages/LandingPage";
import RuangLingkup1 from "./pages/RuangLingkup1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/capaian-dan-tujuan-pembelajaran",
    element: <CapaianPage />
  },
  {
    path: "/ruang-lingkup-1",
    element: <RuangLingkup1 />
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
