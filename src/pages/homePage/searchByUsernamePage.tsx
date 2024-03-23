import AppBox from "../../components/base/appBox.tsx";
import AppForm from "../../components/base/appForm.tsx";

const SearchByUsername = () => {
    return (
        <>
            <div className="container">
                <div className={`flex items-center m-0 h-[100vh]`}>
                    <div className={`w-[85w] m-auto overflow-auto`}>
                        <AppBox title={`عنوان`} image={`logo.jpeg`} description={`کاربر مد نظر خود را بر اساس نام کاربری جست و جو کنید.`}
                                form={<AppForm inputId={'searchByUsername'} inputText={'نام کاربری'} key={`searchByUsernameBox`} />}
                        key={`searchByUsernameBox`}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchByUsername