import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout.tsx";
import SearchByUsername from "../pages/homePage/searchByUsernamePage.tsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:
            [
                {
                    index:true,
                    element: <SearchByUsername/>
                }
            ]
    }
])

export default Router