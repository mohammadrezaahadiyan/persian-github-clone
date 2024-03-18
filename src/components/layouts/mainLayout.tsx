import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div>
                <h1>Layout</h1>
            </div>
            <Outlet />
        </>
    )
}

export default MainLayout