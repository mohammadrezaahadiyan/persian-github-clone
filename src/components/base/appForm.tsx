import {TextField} from "@mui/material";
import AppLink from "./appLink.tsx";
import IAppFormProps from "../../core/interfaces/appFormProps.ts";

const AppForm = ({inputId, inputText}:IAppFormProps) => {
    return (
        <>
            <form dir={`rtl`} className={`flex gap-4 my-5`}>
                <TextField
                    dir={`rtl`}
                    id={inputId}
                    label={inputText}
                    size={`small`}
                    onChange={e => console.log(e.target.value)}
                />
                <button>
                    <AppLink title={`جست و جو`} path={'/'} additionalClasses={`!bg-[#181818] !py-2.5`}/>
                </button>
            </form>
        </>
    )
}

export default AppForm;