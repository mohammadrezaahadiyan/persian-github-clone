import {TextField} from "@mui/material";
import AppLink from "./appLink.tsx";
import IAppFormProps from "../../core/interfaces/appFormProps.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../core/store";
import {logger} from "../../core/store/formData.ts";


const AppForm = ({inputId, inputText}: IAppFormProps) => {

    const dispatch = useDispatch<AppDispatch>()
    const formValue = useSelector<RootState, string>((state) => state.formData.searchParam)

    const formDataHandler = (inputValue:string) => {
        console.log('form value', formValue)
        dispatch(logger(inputValue))
    }

    return (
        <>
            <form dir={`rtl`} className={`flex gap-4 my-5`}>
                <TextField
                    dir={`rtl`}
                    id={inputId}
                    label={inputText}
                    size={`small`}
                    onChange={e => (formDataHandler(e.target.value))}
                />
                <button>
                    <AppLink title={`جست و جو`} path={'/'} additionalClasses={`!bg-[#181818] !py-2.5`}/>
                </button>
            </form>
        </>
    )
}

export default AppForm;