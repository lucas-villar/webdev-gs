import { RouterProvider, Link } from "react-router";
import router from "./routes.jsx";

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
