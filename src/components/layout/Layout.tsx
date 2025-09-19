import { Outlet } from "react-router"
import { ThemeProvider } from "@/context/ThemeContext"
import { type LayoutProps } from "@/types/layout.types"
import Header from "./Header"

const Layout = ({ children }: LayoutProps) => {

    return(
        <ThemeProvider>
            <Header />
            <main>
                {children ?? <Outlet />}
            </main>
        </ThemeProvider>
    )
}

export default Layout