export interface Product{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Raiting 
}



interface Raiting{
    rate:number,
    count:number
}