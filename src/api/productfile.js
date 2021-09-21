const _products = [
    {
        id: 1,
        name:"Ore Sweater",
        description: "This sweater is a custom made McPherson sweater by Ore.",
        size: 'M, XL, XXL',
        color: 'Custom made to what you want',
        price: '120',
        public_id:"e-store/store4_rlkr3u",
        quantityInStock: 20,

    },
    {
        id: 2,
        name: 'McPherson T-shirt',
        description: 'Casual Unisex T-shirt',
        size: 'S, M, L',
        color: 'White',
        price: '10',
        public_id:"e-store/store2_iuj9gd",
        quantityInStock: 13,

    },
    {
        id: 3,
        name: 'McPherson Summer T-shirt',
        description: 'Casual Unisex T-shirt',
        size: 'S, M, L',
        color: 'Green',
        price: '15',
        public_id:"e-store/store3_ph4qw4",
        quantityInStock: 50,

    },
    {
        id: 4,
        name: 'Karpos Shoes',
        description: 'Custom made shoes with great leather',
        size: '39 - 43',
        color: 'Brown, Black',
        price: '300',
        public_id: "e-store/store7_rkjrdo",
        quantityInStock: 3,

    },
    {
        id: 5,
        name: 'Rainbow T-shirt',
        description: 'Adire t-shirt',
        size: 'S, M, L',
        color: 'As seen in the picture',
        price: '180',
        public_id:"e-store/store11_td1at8",
        quantityInStock: 20,

    },
    {
        id: 6,
        name: 'Gregory Shoes',
        description: 'Very comfortable and longlasting',
        size: '37 - 40',
        color: 'Yellow, Black',
        price: '250',
        public_id: "e-store/store5_sht2jx",
        quantityInStock: 10,

    },
    {
        id: 20,
        name: 'RTote bag',
        description: '',
        size: '',
        color: 'As seen in the picture',
        price: '32',
        public_id:"e-store/store22_cww7ir",
        quantityInStock: 80,

    },
    {
        id: 8,
        name: 'Gregory Shoes',
        description: 'Very comfortable and longlasting',
        size: '37 - 40',
        color: 'Yellow, Black',
        price: '280',
        public_id: 'e-store/store9_zfk83z',
        quantityInStock: 32,

    },
    {
        id: 9,
        name: 'Breatheable running seakers Shoes',
        description: 'perfect for exercise and quick casual outing',
        size: '37 - 43',
        color: 'As seen in the picture',
        price: '70',
        public_id: "e-store/store9_zfk83z",
        quantityInStock: 5,

    },
    {
        id: 10,
        name: 'Dina Sneakers',
        description: 'Fashionable and chic',
        size: '10 - 12 UK',
        color: 'White',
        price: '260',
        public_id: "e-store/store8_zzqcom",
        quantityInStock: 3,

    },
    {
        id: 16,
        name: 'Lisa leather bag',
        description: 'Perfect for every occasion',
        size: '',
        color: 'Brown',
        price: '20',
        public_id: "e-store/store20_ui9b7a",
        quantityInStock: 15,

    },
    {
        id: 11,
        name: 'Colorful sneakers',
        price: '200',
        description: 'Fashion',
        size: '36 - 42',
        color: 'As seen in the picture',
        public_id:"e-store/store10_iyovip",
        quantityInStock: 2,

    },
    {
        id: 12,
        name: 'Women underwear',
        description: 'Perfect for jogging and relaxing.',
        size: 'S, M, L',
        color: 'Black, White, Red, Blue',
        price: '8',
        public_id:"e-store/store14_rrxsc6",
        quantityInStock: 43,

    },
    {
        id: 13,
        name: 'Men full sleeve shirt',
        description: 'Soft on the skin, comfortable, longlasting and does not fade ',
        size: 'S, M, L',
        color: 'As seen in the picture',
        price: '45',
        public_id: "e-store/store12_xle1ms",
        quantityInStock: 21,

    },
    {
        id: 14,
        name: 'Beach shirt',
        description: 'Patterened fashionable beach shirt',
        size: 'S, M, L',
        color: 'As seen in the picture',
        price: '50',
        public_id:"e-store/store13_spy0sm",
        quantityInStock: 44,

    },
    {
        id: 15,
        name: 'Mira Crop top',
        description: 'Fashionable and can be styled with anything',
        size: 'S, M',
        color: 'Gold, Black',
        price: '30',
        public_id: "e-store/store16_l6imqy",
        quantityInStock: 65,

    },
    {
        id: 17,
        name: 'Women baggy jean',
        description: 'Join the new rave of stylish women with this new baggy',
        size: 'S, M, L',
        color: 'Blue, Black, White',
        price: '23',
        public_id:"e-store/store16_l6imqy",
        quantityInStock: 8,

    },
    {
        id: 18,
        name: 'Anna chic clutch',
        description: '',
        size: '',
        color: 'Green, Brown, Black, White, Lavendar',
        price: '15',
        public_id:"e-store/store21_nz4gfa",
        quantityInStock: 102,

    },
    {
        id: 19,
        name: 'Women 2021 fashion bag',
        description: 'Custom made bag from Miami based designer',
        size: '',
        color: 'Orange',
        price: '45',
        public_id: "e-store/store19_rezbmn",
        quantityInStock: 1,

    },
    
    {
        id: 7,
        name: 'Concordia loafers',
        description: 'Perfect for every occasion',
        size: '41 - 44',
        color: 'Brown',
        price: '120',
        public_id: "e-store/store6_rt2ywb",
        quantityInStock: 2,

    },
   
]

export default {
    getProducts(cb) {
      setTimeout(() => cb(_products), 500)
    }
}
  