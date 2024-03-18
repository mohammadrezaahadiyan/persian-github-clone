import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout.tsx";
import HomePage from "../pages/homePage/homePage.tsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:
            [
                {
                    index:true,
                    element: <HomePage/>
                }
            ]
    }
])

export default Router