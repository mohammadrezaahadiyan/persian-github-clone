import {Outlet} from "react-router-dom";
import ResponsiveHeader from "../responsiveHeader/responsiveHeader.tsx";
import AppLink from "../core/appLink.tsx";

const MainLayout = () => {
    return (
        <>
            <nav className={`bg-[#181818] hidden md:block`}>
                <div className={`container mx-auto`}>

                    <div className={`flex relative h-16 items-center justify-between`}>
                        <div className={`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`}>
                            
                            <div className={`flex flex-shrink-0 items-center mr-3`}>
                                <img src="src/assets/images/logo.jpeg" alt="loho" className={`h-8 w-auto`}/>
                            </div>

                            <div className={`hidden sm:mr-6 sm:block`}>
                                <div className={`flex space-x-4`}>
                                    <AppLink path={`/`} title={`جست و جو بر اساس نام کاربری`} />
                                    <AppLink path={`/`} title={`جست و جو بر اساس مخزن`} />
                                    <AppLink path={`/`} title={`سایت رسمی Github`} />
                                    <AppLink path={`/`} title={`دریافت API`}/>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </nav>

            <ResponsiveHeader/>
            <Outlet />
        </>
    )
}

export default MainLayout