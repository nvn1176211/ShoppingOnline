const initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        image: "https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-32gb-gold-600x600-600x600.jpg",
        description: 'Sản phẩm của Apple',
        price: 550,
        inventory: 20,
        rating: 5
    },
    {
        id: 2,
        name: 'Oppo F1s',
        image: 'https://cdn.fptshop.com.vn/Uploads/Thumbs/2017/9/5/636402026888373686_1o.jpg',
        description: 'Sản phẩm của China',
        price: 400,
        inventory: 25,
        rating: 4
    },
    {
        id: 3,
        name: 'Samsung galaxy S7',
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2016/2/23/635918156584359185_s7-g1.jpg',
        description: 'Sản phẩm của Samsung',
        price: 500,
        inventory: 22,
        rating: 5
    },
    {
        id: 4,
        name: 'Samsung galaxy S6',
        image: 'https://static1.squarespace.com/static/57053d4c01dbae40ae9ccb39/5707c2dcf8baf375d87b3d03/57081c54d210b8708e0534e1/1460149333846/GS6.jpg?format=500w',
        description: 'Sản phẩm của Samsung',
        price: 450,
        inventory: 22,
        rating: 4
    }
];

const products = (state = initialState, action) =>{
    switch(action.types){
        default: return [...state]
    }
}

export default products;