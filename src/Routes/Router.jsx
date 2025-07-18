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
import Error404 from "../Components/Error404";
import TermsOfUse from "../Components/TermsOfUse";
import PrivacyPolicy from "../Components/PrivacyPolicy";
import CookiePolicy from "../Components/CookiePolicy";
import AboutUs from "../Components/AboutUs";
import ContactUs from "../Components/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allArtifacts",
        loader: () => fetch("https://a-11-server-side-peach.vercel.app/artifacts"),
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/artifacts/:id",
        element: (
          <PrivateRoute>
            <ArtifactsDetails></ArtifactsDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://a-11-server-side-peach.vercel.app/artifacts/${params.id}`),
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
          fetch(`https://a-11-server-side-peach.vercel.app/artifacts/${params.id}`),
      },
      {
        path: "/likedArtifatcs",
        element: (
          <PrivateRoute>
            <LikedArtifacts></LikedArtifacts>
          </PrivateRoute>
        ),
      },
      {
        path: "/termsOfUse",
        element: <TermsOfUse></TermsOfUse>
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/cookiePolicy",
        element: <CookiePolicy></CookiePolicy>
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>
      }
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);
