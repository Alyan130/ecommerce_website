import { NextRequest, NextResponse } from "next/server"

const carddata = [
    [
        {
            id: 1,
            image: "/images/Image.png",
            tag: "New",
            name: "Modern Sofa",
            price: 299,
        },
        {
            id: 2,
            image: "/images/Image1.png",
            tag: "Sale",
            cutprice: "$30",
            name: "Wooden Coffee Table",
            price: 149,
        },
        {
            id: 3,
            image: "/images/Image2.png",
            name: "Recliner Chair",
            price: 399,
        },
        {
            id: 4,
            image: "/images/card.png",
            name: "Bookshelf Unit",
            price: 199,
        },
        {
            id: 5,
            image: "/images/Parent2.png",
            tag: "New",
            name: "Velvet Armchair",
            price: 249,
        },
        {
            id: 6,
            image: "/images/02.png",
            tag: "Sale",
            cutprice: "$30",
            name: "Dining Table Set",
            price: 599,
        },
        {
            id: 7,
            image: "/images/pro2.png",
            name: "Storage Cabinet",
            price: 179,
        },
        {
            id: 8,
            image: "/images/Image.png",
            name: "Leather Sofa",
            price: 499,
        },
        {
            id: 9,
            image: "/images/pro1.png",
            tag: "New",
            name: "Minimalist Side Table",
            price: 129,
        },
        {
            id: 10,
            image: "/images/Image1.png",
            tag: "Sale",
            cutprice: "$30",
            name: "Classic Wooden Chair",
            price: 89,
        },
        {
            id: 11,
            image: "/images/Image2.png",
            name: "Lounge Chair",
            price: 349,
        },
        {
            id: 12,
            image: "/images/pro3.png",
            name: "Outdoor Patio Set",
            price: 699,
        }
    ]
    
]

export const  GET = async (req: NextRequest, { params}:{params:Promise<{id:string}>}) => {
 
    const data =await params;
    const {id} =data
    
    const newData = carddata[0].find((p) => p.id === parseInt(id));

    if(newData){
        return NextResponse.json(newData);
    }else{
        return NextResponse.json({error:"product not found", success:false})
    }
}