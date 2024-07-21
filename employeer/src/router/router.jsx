import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy } from "react";
const Login = lazy(() => import("../views/auth/Login"));
const Profile = lazy(() => import("../views/auth/Profile"));
const Register = lazy(() => import("../views/auth/Register"));
const NotFound = lazy(() => import("../views/NotFound"));
const CreatePost = lazy(() => import("../views/CreatePost"));
const Resumes = lazy(() => import("../views/Resumes"));
const JobQueue = lazy(() => import("../views/JobQueue"));
const AuthLayout = lazy(() => import("../components/layouts/AuthLayout"));
import SuspenseWrapper from "../components/SuspenseWrapper";
import MainLayout from "../components/layouts/MainLayout";
import Dashboard from "../views/Dashboard";
import GuestRoute from "../router/GuestRoute";
import ProtectedRoute from "../../../client/src/router/ProtectedRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* guest */}
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



      {/* protected */}
      <Route element={<ProtectedRoute />}>

        <Route
          element={
            <SuspenseWrapper>
              <MainLayout />
            </SuspenseWrapper>
          }
        >
          <Route
            path="/"
            element={
              <SuspenseWrapper>
                <Dashboard />
              </SuspenseWrapper>
            }
          />

          <Route
            path="/profile"
            element={
              <SuspenseWrapper>
                <Profile />
              </SuspenseWrapper>
            }
          />

          <Route
            path="/queue"
            element={
              <SuspenseWrapper>
                <JobQueue />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/resumes"
            element={
              <SuspenseWrapper>
                <Resumes />
              </SuspenseWrapper>
            }
          />
          <Route
            path="/create_job_post"
            element={
              <SuspenseWrapper>
                <CreatePost />
              </SuspenseWrapper>
            }
          />
        </Route>
      </Route>


      {/* global */}
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
