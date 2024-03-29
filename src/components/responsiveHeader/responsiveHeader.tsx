import {FaDev, FaGithub} from "react-icons/fa";
import AppLink from "../base/appLink.tsx";
import {RiGitRepositoryFill, RiUserSearchFill} from "react-icons/ri";

const ResponsiveHeader = () => {

    return (
        <>
        <div className={`container fixed bottom-0 px-10`}>
            <div className={`flex flex-wrap items-center justify-between p-4 md:hidden`}>
                <AppLink title={<FaGithub className={`text-gray-900 hover:text-gray-200`}/>} path={`/`} />
                <AppLink title={<FaDev className={`text-gray-900 hover:text-gray-200`}/>} path={`/`} />
                <AppLink title={<RiGitRepositoryFill className={`text-gray-900 hover:text-gray-200`}/>} path={`/`} />
                <AppLink title={<RiUserSearchFill className={`text-gray-900 hover:text-gray-200`}/>} path={`/`} />
            </div>
        </div>
        </>
    )

}

export default ResponsiveHeader;