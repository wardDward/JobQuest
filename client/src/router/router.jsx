import { Suspense, lazy } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// Lazy load the components
const Login = lazy(() => import('../views/auth/Login'));
const NotFound = lazy(() => import('../views/NotFound'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/login"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <NotFound />
          </Suspense>
        }
      />
    </Route>
  )
);

export default router;
