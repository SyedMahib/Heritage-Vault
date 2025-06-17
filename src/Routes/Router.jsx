import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AllArtifacts from "../Components/AllArtifacts";
import AddArtifacts from "../Components/AddArtifacts";
import MyArtifacts from "../Components/MyArtifacts";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ArtifactsDetails from "../Components/ArtifactsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdateArtifacts from "../Components/UpdateArtifacts";
import LikedArtifacts from "../Components/LikedArtifacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allArtifacts",
        loader: () => fetch("http://localhost:3000/artifacts"),
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/artifacts/:id",
        element: (
          <PrivateRoute>
            <ArtifactsDetails></ArtifactsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artifacts/${params.id}`),
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRoute>
            <AddArtifacts></AddArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRoute>
            <MyArtifacts></MyArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateArtifacts/:id",
        element: (
          <PrivateRoute>
            <UpdateArtifacts></UpdateArtifacts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/artifacts/${params.id}`),
      },
      {
        path: "/likedArtifatcs",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/Login",
        element: <Login></Login>,
      },
      {
        path: "/auth/Register",
        element: <Register></Register>,
      },
    ],
  },
]);
