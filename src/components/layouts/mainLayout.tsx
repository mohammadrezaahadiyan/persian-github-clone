import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <nav className={`bg-[#181818]`}>
                <div className={`container mx-auto`}>

                    <div className={`flex relative h-16 items-center justify-between`}>
                        <div className={`flex flex-1 items-center justify-center sm:items-stretch sm:justify-start`}>
                            
                            <div className={`flex flex-shrink-0 items-center mr-3`}>
                                <img src="src/assets/images/logo.jpeg" alt="loho" className={`h-8 w-auto`}/>
                            </div>

                            <div className={`hidden sm:mr-6 sm:block`}>
                                <div className={`flex space-x-4`}>
                                    <Link to={`/`} className={`rounded px-3 py-3 text-sm text-gray-300 transition-colors duration-100 hover:bg-gray-700 hover:text-white`}>جست و جو بر اساس نام کاربری</Link>
                                    <Link to={`/`} className={`rounded px-3 py-3 text-sm text-gray-300 transition-colors duration-100 hover:bg-gray-700 hover:text-white`}>جست و جو بر اساس مخزن</Link>
                                    <Link to={`/`} className={`rounded px-3 py-3 text-sm text-gray-300 transition-colors duration-100 hover:bg-gray-700 hover:text-white`}>سایت رسمی Github</Link>
                                    <Link to={`/`} className={`rounded px-3 py-3 text-sm text-gray-300 transition-colors duration-100 hover:bg-gray-700 hover:text-white`}>دریافت API</Link>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default MainLayout