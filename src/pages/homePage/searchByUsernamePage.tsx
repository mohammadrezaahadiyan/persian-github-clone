import AppBox from "../../components/base/appBox.tsx";
import AppForm from "../../components/base/appForm.tsx";
import { userRepositories } from "../../core/api/octokit.ts";
import { useEffect, useState } from "react";
import IUserDataState from "../../core/interfaces/userDataState.ts";
import { setUserData, userDataInitialState } from "../../core/store/userProfile.ts";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../core/store";

const SearchByUsername = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [userServerData, setUserServerData] = useState<IUserDataState>(userDataInitialState);
    const userData = useSelector<RootState, IUserDataState>(state => state.userData);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await userRepositories("mohammadrezaahadiyan");
                setUserServerData({
                    login: userData.login,
                    id: userData.id,
                    email: userData.email,
                    avatar: userData.avatar_url,
                    bio: userData.bio,
                    company: userData.company,
                    followers: userData.followers,
                    followers_url: userData.followers_url,
                    following: userData.following,
                    following_url: userData.following_url,
                    public_repos: userData.public_repos,
                    repos_url: userData.repos_url
                });
                dispatch(setUserData(userServerData));
            } catch (error) {
                console.error('Error fetching user repositories:', error);
            }
        };

        fetchData();
    }, [dispatch, userServerData]);

    return (
        <>
            <div className="container">
                <div className={`flex items-center m-0 h-[100vh]`}>
                    <div className={`w-[85w] m-auto overflow-auto`}>
                        <AppBox title={`عنوان`} image={`logo.jpeg`} description={`کاربر مد نظر خود را بر اساس نام کاربری جست و جو کنید.`}
                                form={<AppForm inputText={'نام کاربری'} key={`searchByUsernameBox`} />}
                                key={`searchByUsernameBox`}
                        />
                    </div>
                </div>
            </div>
            {userData.login && <h1>{userData.login}</h1>}
        </>
    );
}

export default SearchByUsername;
