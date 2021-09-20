<template>
    <div>
        <carousel></carousel>
        <prod></prod>
        <product></product>
        {{title}}


<cld-image :cloudName="(title)" publicId="e-store/store1_frjpag" width="300" crop="scale" />


    </div>
</template>

<script>
import carousel from '@/components/carousel.vue';
import prod from '@/components/prod.vue';
import product from '@/components/productscards.vue';



export default {
    data() {
    return {
      title: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME
    }
    },
    components: {
        carousel,
        prod,
        product
    }
}
</script>