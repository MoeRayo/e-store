const _carousels = [
    {
        id: 1,
        public_id:"e-store/carousel7_xjxy2y"
    },
    {
        id: 2,
        public_id:"e-store/crousel4_cnv8uf"
    },
    {
        id: 3,
        public_id:"e-store/carousel3_vke2hj"
    },
    {
        id: 4,
        public_id: "e-store/carousel8_fstjay"
    },
    {
        id: 5,
        public_id:"e-store/carousel6_ntqby1"
    },
]

export default {
    getCarousel(cb) {
      setTimeout(() => cb(_carousels), 500)
    }
  }
  