import { lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const AuthLayout = lazy(() => import("../components/layout/AuthLayout"));
const GuestLayout = lazy(() => import("../components/layout/GuestLayout"));
const EmployeeLayout = lazy(() =>
  import("../components/layout/EmployeeLayout")
);
const Login = lazy(() => import("../views/auth/Login"));
const Register = lazy(() => import("../views/auth/Register"));
const NotFound = lazy(() => import("../views/NotFound"));
const HeroPage = lazy(() => import("../views/guest/HeroPage"));
const JobFinder = lazy(() => import("../views/JobFinder"));
const ResendEmail = lazy(() => import("../views/auth/ResendEmail"));
import GuestRoute from "./GuestRoute";
import ProtectedRoute from "./ProtectedRoute";
import SuspenseWrapper from "../components/SuspenseWrapper";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* guest routes */}
      <Route element={<GuestRoute />}>
        <Route
          element={
            <SuspenseWrapper>
              <AuthLayout />
            </SuspenseWrapper>
          }
        >
          <Route
            path="/login"
            element={
              <SuspenseWrapper>
                <Login />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/register"
            element={
              <SuspenseWrapper>
                <Register />
              </SuspenseWrapper>
            }
          />
        </Route>
      </Route>

      {/* private routes */}

      <Route element={<ProtectedRoute />}>
        <Route
          element={
            <SuspenseWrapper>
              <EmployeeLayout />
            </SuspenseWrapper>
          }
        >
          <Route
            path="/jobfinder"
            element={
              <SuspenseWrapper>
                <JobFinder />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/email/verification"
            element={
              <SuspenseWrapper>
                <ResendEmail />
              </SuspenseWrapper>
            }
          />
        </Route>
      </Route>

      {/* public routes */}
      <Route
        element={
          <SuspenseWrapper>
            <GuestLayout />
          </SuspenseWrapper>
        }
      >
        <Route
          path="/"
          element={
            <SuspenseWrapper>
              <HeroPage />
            </SuspenseWrapper>
          }
        />
      </Route>

      <Route
        path="*"
        element={
          <SuspenseWrapper>
            <NotFound />
          </SuspenseWrapper>
        }
      />
    </Route>
  )
);

export default router;
