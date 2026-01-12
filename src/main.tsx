import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import { ROUTES } from "./util/constants.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: ROUTES.map((route) => {
      // 1. Handle Project with children
      if (route.path === "/projects") {
        return {
          path: route.path,
          element: <div ref={route.nodeRef}>{route.element}</div>,
          children: route.children?.map((child) => ({
            // This results in /projects/advanced-settings
            path: child.path,
            element: <div ref={route.nodeRef}>{child.element}</div>,
          })),
        };
      }

      // 2. Handle other routes (removed index: true to avoid conflicts)
      return {
        path: route.path === "/" ? undefined : route.path,
        index: route.path === "/", // Only "/" should be the index
        element: route.element,
      };
    }),
  },
]);


const container = document.getElementById("root");
const root = container && createRoot(container);
root?.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

// createRoot(document.getElementById('root')!).render(

//
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   ,
// )
