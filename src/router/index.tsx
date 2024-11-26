import { createBrowserRouter, createHashRouter } from "react-router-dom";
import ErrorPage from "../component/error-page";
import { RouteObject } from "react-router-dom";
import { ROUTERS } from "../constants/common.constants";
import Mainlayout from "../component/layout";
import { ProtectedRoute } from "../component/ProtectedRoute";
import Home from "../page/home";

export const routerObjects: RouteObject[] = [
  {
    element: <Mainlayout />,
    children: [
      {
        path: ROUTERS.LOGIN,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const assignRouter = (
  routerObjects: RouteObject[] | null | undefined,
  values: Partial<RouteObject>
) => {
  if (!routerObjects) {
    return;
  }
  for (const routerObject of routerObjects) {
    Object.assign(routerObject, values);
    if (routerObject.children?.length) {
      assignRouter(routerObject.children, values);
    }
  }
};

export function createRouter(): ReturnType<typeof createHashRouter> {
  assignRouter(routerObjects, {
    ErrorBoundary: ErrorPage,
  });
  return createBrowserRouter(routerObjects);
}
