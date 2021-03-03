/** * Action Types */
export enum HeroTypes {
  GET_HERO_REQUEST = 'GET_HERO_REQUEST',
  GET_HERO_SUCCESS = 'GET_HERO_SUCCESS',
  GET_HERO_FAILURE = 'GET_HERO_FAILURE',

  
}



export interface  Work{
  occupation: string
}

export interface  Image {
  url: string | undefined
}

export interface Bio {
  fullName: string,
  placeofbirth: string
}


export interface Herois {
  id: number,
  name: string,
  biography: Bio,
  image: Image,
  work: Work

}

export interface HeroArray {
   arrayHeroi: Herois[],
   loading: boolean,
   erro: string

}

