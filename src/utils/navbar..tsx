import {  DollarSign, Grid2X2,  ShoppingCart, Wallet } from "lucide-react"

export interface navBarProps {
    routes: RoutesProps[]
}

export interface RoutesProps {
    route: string,
    name: string
    icon: JSX.Element
}


export const navBarRoutes: RoutesProps[] = [
    {
        name: "Serviços",
        route: "services",
        icon: <Grid2X2 />
    },
    {
        name: "Preços",
        route: "prices",
        icon: <DollarSign />
    },
    {
        name: "Projetos",
        route: "projects",
        icon: <Wallet />
    },
    {
        name: "Orçamentos",
        route: "Budget",
        icon: <ShoppingCart />
    },
]