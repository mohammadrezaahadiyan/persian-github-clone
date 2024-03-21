import {FaDev, FaGithub} from "react-icons/fa";
import BaseLink from "../base/baseLink.tsx";
import {RiGitRepositoryFill, RiUserSearchFill} from "react-icons/ri";

const ResponsiveHeader = () => {

    return (
        <>
        <div className={`container fixed bottom-0 px-10`}>
            <div className={`flex flex-wrap items-center justify-between p-4 md:hidden`}>
                <BaseLink title={<FaGithub className={`text-gray-900`}/>} path={`/`} />
                <BaseLink title={<FaDev className={`text-gray-900`}/>} path={`/`} />
                <BaseLink title={<RiGitRepositoryFill className={`text-gray-900`}/>} path={`/`} />
                <BaseLink title={<RiUserSearchFill className={`text-gray-900`}/>} path={`/`} />
            </div>
        </div>
        </>
    )

}

export default ResponsiveHeader;