import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout.tsx";
import SearchByUsername from "../pages/homePage/searchByUsernamePage.tsx";
import Test from "../pages/test/test.tsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children:
            [
                {
                    index:true,
                    element: <SearchByUsername/>
                },
                {
                    path:"/test",
                    element:<Test />
                }
            ]
    }
])

export default Router