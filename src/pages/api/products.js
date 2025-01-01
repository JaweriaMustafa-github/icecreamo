export default function handler ( req, res) {
    const products = [
        {
            id:1,
            name:"Black Raspberry Ice Creamo with Oreos",
            price: 50,
            image: "/images/Blue Moon Ice Cream.jpeg"
        },
        {
            id:2,
            name:"Yummy Crunchy Chocolatto Icecreamo",
            price: 60,
            image: "/images/Crunchy Choco Icecream.jpeg"
        },
        {
            id:3,
            name:"Mint Cookies and Cream Ice Creamo",
            price: 60,
            image: "/images/Mint Cookies and Cream Ice Cream.jpeg"
        },
        {
            id:4,
            name:"Nutellas Love Crunchy Icecreamo",
            price: 70,
            image: "/images/NutellasLove.jpeg"
        },
        {
            id:5,
            name:"Rich and Creamy Mango Ice Creamo",
            price: 65,
            image: "/images/Rich and Creamy Mango Ice Cream.jpeg"
        },
        {
            id:6,
            name:"Tin Roof Ice Creamo with Crushed Waffle Cone",
            price: 55,
            image: "/images/Tin-Roof-Ice-Cream-with-Crushed-Waffle-Cone.jpeg"
        }
    ];
    res.status(200).json(products);
}