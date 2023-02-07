import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CapaianPage from "./pages/CapaianPage";
import LandingPage from "./pages/LandingPage";
import RuangLingkup1 from "./pages/RuangLingkup1";
import Profil from "./pages/Profil";
import RuangLingkup2 from "./pages/RuangLingkup2";
import RuangLingkup3 from "./pages/RuangLingkup3";

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
  },
  {
    path: "/ruang-lingkup-1",
    element: <RuangLingkup1 />
  },
  {
    path: "/ruang-lingkup-2",
    element: <RuangLingkup2 />
  },
  {
    path: "/ruang-lingkup-3",
    element: <RuangLingkup3 />
  },
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
