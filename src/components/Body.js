import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { ISP_JIO } from "../utils/constant";
import Banned from "./Banned";
import useGetISP from "../hooks/useGetISP";

const Body = () => {
  useGetISP();
  const isp = useSelector((store) => store.config.isp);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  if(isp == null) return null;
  if (isp === ISP_JIO) return <Banned />;

  return <RouterProvider router={appRouter} />;
};

export default Body;
