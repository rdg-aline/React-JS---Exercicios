export enum PostTypeAction {
    GET_POST =  '@GET_POST',
    GET_LIKE= '@GET_LIKE'    
}

export interface InterfacePostItem {
    id: number,
    user: string,
    userPicture: string,
    postPicture: string,
    location: string,
    description: string,
    likes: number,
}

export interface InterfacePostArray{
    arrayPost: InterfacePostItem[],
    likes:number
}

export interface InterfacePostState{
    posts: InterfacePostArray
}


