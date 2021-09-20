const _products = [
    {
        id: 1,
        name:"Ore Sweater",
        description: "This sweater is a custom made McPherson sweater by Ore Akide. Ore is a Nigerian crotcheter who has mastered the crotcheting skills over the years.",
        size: 'M, XL, XXL',
        color: 'Custom made to what you want',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083328/e-store/store4_rlkr3u.jpg"
    },
    {
        id: 2,
        name: 'McPherson T-shirt',
        description: '',
        size: 'S, M, L',
        color: 'White',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083322/e-store/store2_iuj9gd.jpg"
    },
    {
        id: 3,
        name: 'McPherson Summer T-shirt',
        description: '',
        size: 'S, M, L',
        color: 'Green',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083322/e-store/store3_ph4qw4.jpg"
    },
    {
        id: 4,
        name: 'Karpos Shoes',
        description: 'Custom made shoes with great leather',
        size: '39 - 43',
        color: 'Brown, Black',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083318/e-store/store7_rkjrdo.jpg"
    },
    {
        id: 5,
        name: 'Rainbow T-shirt',
        description: 'Adire t-shirt',
        size: 'S, M, L',
        color: 'As seen in the picture',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083318/e-store/store11_td1at8.jpg"
    },
    {
        id: 6,
        name: 'Gregory Shoes',
        description: 'Very comfortable and longlasting',
        size: '37 - 40',
        color: 'Yellow, Black',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083317/e-store/store5_sht2jx.jpg"
    },
    {
        id: 7,
        name: 'Concordia loafers',
        description: 'Perfect for every occasion',
        size: '41 - 44',
        color: 'Brown',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083317/e-store/store6_rt2ywb.jpg"
    },
    {
        id: 8,
        name: 'Gregory Shoes',
        description: 'Very comfortable and longlasting',
        size: '37 - 40',
        color: 'Yellow, Black',
        public_id: 'https://res.cloudinary.com/moerayo/image/upload/v1632083317/e-store/store9_zfk83z.jpg'
    },
    {
        id: 9,
        name: 'Breatheable running seakers Shoes',
        description: 'perfect for exercise and quick casual outing',
        size: '37 - 43',
        color: 'As seen in the picture',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083317/e-store/store9_zfk83z.jpg"
    },
    {
        id: 10,
        name: 'Dina Sneakers',
        description: 'Fashionable and chic',
        size: '10 - 12 UK',
        color: 'White',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083317/e-store/store8_zzqcom.jpg"
    },{
        id: 11,
        name: 'Colorful sneakers',
        description: 'Fashion',
        size: '36 - 42',
        color: 'As seen in the picture',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083316/e-store/store10_iyovip.jpg"
    },
    {
        id: 12,
        name: 'Women underwear',
        description: 'Perfect for jogging and relaxing.',
        size: 'S, M, L',
        color: 'Black, White, Red, Blue',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083316/e-store/store14_rrxsc6.jpg"
    },
    {
        id: 13,
        name: 'Men full sleeve shirt',
        description: 'Soft on the skin, comfortable, longlasting and does not fade ',
        size: 'S, M, L',
        color: 'As seen in the picture',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083316/e-store/store12_xle1ms.jpg"
    },
    {
        id: 14,
        name: 'Beach shirt',
        description: 'Patterened fashionable beach shirt',
        size: 'S, M, L',
        color: 'As seen in the picture',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083316/e-store/store13_spy0sm.jpg"
    },
    {
        id: 15,
        name: 'Mira Crop top',
        description: 'Fashionable and can be styled with anything',
        size: 'S, M',
        color: 'Gold, Black',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083276/e-store/store16_l6imqy.jpg"
    },
    {
        id: 16,
        name: 'Lisa leather bag',
        description: 'Perfect for every occasion',
        size: '',
        color: 'Brown',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083275/e-store/store20_ui9b7a.jpg"
    },{
        id: 17,
        name: 'Women baggy jean',
        description: 'Join the new rave of stylish women with this new baggy',
        size: 'S, M, L',
        color: 'Blue, Black, White',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083276/e-store/store16_l6imqy.jpg"
    },
    {
        id: 18,
        name: 'Anna chic clutch',
        description: '',
        size: '',
        color: 'Green, Brown, Black, White, Lavendar',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083275/e-store/store21_nz4gfa.jpg"
    },
    {
        id: 19,
        name: 'Women 2021 fashion bag',
        description: 'Custom made bag from Miami based designer',
        size: '',
        color: 'Orange',
        public_id: "https://res.cloudinary.com/moerayo/image/upload/v1632083275/e-store/store19_rezbmn.jpg"
    },
    {
        id: 20,
        name: 'RTote bag',
        description: '',
        size: '',
        color: 'As seen in the picture',
        public_id:"https://res.cloudinary.com/moerayo/image/upload/v1632083268/e-store/store22_cww7ir.jpg"
    },
   
]

export default {
    getProducts(cb) {
      setTimeout(() => cb(_products), 500)
    }
}
  