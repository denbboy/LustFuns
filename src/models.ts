export interface IUser {
    username: string
    usertag: string
    photo: string
    sex?: string
}

export interface IFilterVideo {
    price: string[]
    isCanDownload: boolean
}

export interface IComment {
    user: IUser
    comment: string
    date: Date
}
