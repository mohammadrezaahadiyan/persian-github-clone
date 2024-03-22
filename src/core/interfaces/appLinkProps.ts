import {ReactNode} from "react";

interface IAppLinkProps {
    title: string | ReactNode;
    additionalClasses?: string;
    path: string;
}

export default IAppLinkProps;