const products = [
{
id:'1',
name:'citrica',
price:$1000,
category: 'sales',
img:'https://d22fxaf9t8d39k.cloudfront.net/2bd481ad774b871673c7f49178ef21d89fd1524f34ab4c4d76e33fee9d5bc216201283.jpg',
stock:'50',
description:'',

},

{id: '2', name:'hierbas', price:$1750, category: 'especias', img: 'https://d22fxaf9t8d39k.cloudfront.net/c09ec0a0c46715cd1bda4a6787ffe887fd84d0734011f403c67fd58828e2766a201283.jpg', stock:'50'},
{id: '3', name:'mediterraneo', price:$1250, category: 'blends', img: 'https://d22fxaf9t8d39k.cloudfront.net/0c8bab4c491b9157297e17b942070cb6607badbecb6a9a4e72d5553029d1d8d0201283.jpg', stock:'0',}

]

export const getProducts =() => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve (products)
        }, 500)

    })
}