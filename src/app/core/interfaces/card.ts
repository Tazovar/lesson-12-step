export interface Card{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    raiting:Raiting

}



interface Raiting{
    rate:number,
    count:number
}