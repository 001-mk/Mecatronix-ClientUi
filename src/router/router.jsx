import { createBrowserRouter } from "react-router-dom";
import Userlayout from "../components/layout/Userlayout";
import Portal from "../pages/portal/Portal";
import Ourworld from "../pages/ourworld/Ourworld";
import Portfolio from "../pages/portfolio/Portfolio";
import Openline from "../pages/openline/Openline";
import Quote from "../pages/quote/Quote";
import Services from "../pages/services/Services";

let user_routes = [
  {
    path: '/',
    element: <Userlayout />,
    children: [
      { index: true, element: <Portal /> },
      { path: 'ourworld', element: <Ourworld /> },
      { path: 'services', element: <Services /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'openline', element: <Openline /> },
      { path: 'quote', element: <Quote /> },
    ],
  },
];

const router = createBrowserRouter([...user_routes]);

export default router;