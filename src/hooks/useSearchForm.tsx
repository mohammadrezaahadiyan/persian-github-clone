import {SubmitHandler, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {IFormData, schema} from "../core/validations/searchForm.validation.ts";
import {useState} from "react";
// import {useNavigate} from "react-router-dom";
import {getUserRepos} from "../core/api/octokit.ts";

export const useRepoSearch = () => {

    const [loading, setLoading] = useState<boolean>(false)
    // const navigate = useNavigate()
    // const [userRepos, setUserRepo] = useState(null)

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const formSubmitHandler: SubmitHandler<IFormData> = async (data) => {
        setLoading(true)

        await getUserRepos(data.searchInput)
            .then(res => console.log(res))
    }

    return { register, handleSubmit: handleSubmit(formSubmitHandler), errors, loading };
}

export const useUserSearch = () => {

}