import { ProductCategory } from "./product-category";

export class Product{

    id!: number;
    name!: string;
    type!: ProductCategory;
    calories!: number;
    cost!: number;
   
    constructor(name, type, calories, cost){
        this.name = name;
        this.type = type;
        this.calories =  calories;
        this.cost = cost;
        
    }
}