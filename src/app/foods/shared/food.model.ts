export interface Food {
[x: string]: any;
    id:number;
    name:string;
    descripcion:string;
    image:string;
    category:'drink' | 'food';
    price:number;
}

