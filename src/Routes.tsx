import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import FrameSixteen from "pages/FrameSixteen";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "framesixteen",
      element: <FrameSixteen />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
