import * as Yup from "yup";

export interface ISearchFormValues {
    searchValue: string;
}
export const schema = Yup.object().shape({
    searchValue: Yup.string().required("این فیلد الزامی است")
})