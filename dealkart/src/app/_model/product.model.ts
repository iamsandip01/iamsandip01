import { FileHandle } from "./file-handle.model";

export interface Product {
  [x: string]: any;
    productId: number;
	productName : string;
	productDescription : string ;
	productDiscountedPrice : number;
	productActualPrice : number;
	productImages: FileHandle[]
    
}