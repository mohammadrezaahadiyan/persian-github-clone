import {TextField} from "@mui/material";
import IAppFormProps from "../../core/interfaces/appFormProps.ts";
import {useFormik} from "formik";
import {schema} from "../../core/validations/searchForm.validation.ts";

const AppForm = ({inputText}: IAppFormProps) => {

    const formik = useFormik({
        initialValues:{
            searchValue: ""
        },

        validationSchema: schema,
        onSubmit: (values) => {console.log(values)}
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} autoComplete={`off`}  className={`my-5`}>
                <TextField
                    error={!!formik.errors.searchValue}
                    dir={`rtl`}
                    label={inputText}
                    type="text"
                    id={`searchValue`}
                    size={`small`}
                    value={formik.values.searchValue}
                    onChange={formik.handleChange}
                />
                <button type={`submit`} className={`rounded mr-4 px-3 py-2.5 text-sm text-gray-300 transition-colors duration-100 bg-gray-700 hover:bg-gray-800 hover:text-white`}>
                    جست و جو
                </button>
                <div className={`error-msg`}>
                    {formik.errors.searchValue || <span>{formik.errors.searchValue}</span>}
                </div>
            </form>
        </>
    )
}

export default AppForm;