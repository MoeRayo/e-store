<template>
    <div>
        <carousel></carousel>
        <prod></prod>
        {{title}}


<cld-image :cloudName="(title)" publicId="e-store/store1_frjpag" width="300" crop="scale" />


    </div>
</template>

<script>
import carousel from '@/components/carousel.vue';
import prod from '@/components/prod.vue';


export default {
    data() {
    return {
      title: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME
    }
    },
    components: {
        carousel,
        prod
    }
}
</script>