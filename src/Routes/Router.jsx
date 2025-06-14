import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import AllArtifacts from "../Components/AllArtifacts";
import AddArtifacts from "../Components/AddArtifacts";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/allArtifacts",
                loader: () => fetch("http://localhost:3000/artifacts"),
                element: <AllArtifacts></AllArtifacts>
            },
            {
                path: "/addArtifacts",
                element: <AddArtifacts></AddArtifacts>
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/Login",
                element: <Login></Login>
            },
            {
                path: "/auth/Register",
                element: <Register></Register>
            }
        ]
    }
])