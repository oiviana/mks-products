interface ProductData{
    data:{
        count:number
        products: ProductProps[]
    }
}
interface ProductProps {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
}

