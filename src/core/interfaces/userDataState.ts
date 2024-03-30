export interface IUserDataState {
    login: string
    id: number
    email: string | null
    avatar: string
    bio: string | null
    company: string | null
    followers: number
    followers_url: string
    following: number
    following_url: string
    public_repos: number
    repos_url: string
}

export default IUserDataState