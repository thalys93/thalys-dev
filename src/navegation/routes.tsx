import App from "@/App"
import Budget from "@/pages/Budget"
import Home from "@/pages/Home"
import Prices from "@/pages/Prices"
import Projects from "@/pages/Projects"
import Services from "@/pages/Services"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "services",
                element: <Services />
            },
            {
                path: "prices",
                element: <Prices />,                                                    
            },
            {
                path: "budget",
                element: <Budget />
            },
            {
                path: "projects",
                element: <Projects />
            },          
        ]
    },
])

export function AppRoutes() {
    return <RouterProvider router={routes} />
}