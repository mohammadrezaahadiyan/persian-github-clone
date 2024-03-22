import {Link} from "react-router-dom";
import IAppLinkProps from "../../interfaces/appLinkProps.ts";
i

const AppLink = ({title, additionalClasses, path}:IAppLinkProps) => {

    return (
        <>
            <Link to={path} className={`rounded px-3 py-3 text-sm text-gray-300 transition-colors duration-100 hover:bg-gray-700 hover:text-white ${additionalClasses}`}>{title}</Link>
        </>
    )
}

export default AppLink;