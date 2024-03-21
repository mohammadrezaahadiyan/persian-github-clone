import {Link} from "react-router-dom";
import {ReactNode} from "react";

interface IBaseLinkProps {
    title: string | ReactNode;
    additionalClasses?: string;
    path: string;
}

const BaseLink = ({title, additionalClasses, path}:IBaseLinkProps) => {

    return (
        <>
            <Link to={path} className={`rounded px-3 py-3 text-sm text-gray-300 transition-colors duration-100 hover:bg-gray-700 hover:text-white ${additionalClasses}`}>{title}</Link>
        </>
    )
}

export default BaseLink;