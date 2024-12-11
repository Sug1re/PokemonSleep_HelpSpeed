export interface pokemonData {
    id:number; //　動的ルートでフィルタリングをしたいので　id は　number型
    number:string;
    name:string;
    time:number;
    forte:string;
    type:string;
    sleep:string;
    skill:string;
    foodA:string;
    foodB:string;
    foodC:string;
};

export interface curry {
    id:number;
    name:string;
};

export interface salad {
    id:number;
    name:string;
};

export interface desserts{
    id:number;
    name:string;
};