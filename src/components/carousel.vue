<template>
  <div>
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg" />
      </div>
    </transition-group>
    <!-- <a class="prev" @click="prev" href="#">&#10094;</a>
    <a class="next" @click="next" href="#">&#10095;</a> -->
  </div>
</template>
<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
       "https://res.cloudinary.com/moerayo/image/upload/v1632083318/e-store/carousel8_fstjay.jpg",
        "https://res.cloudinary.com/moerayo/image/upload/v1632083321/e-store/carousel3_vke2hj.jpg",
        "https://res.cloudinary.com/moerayo/image/upload/v1632083322/e-store/crousel4_cnv8uf.jpg",
        "https://res.cloudinary.com/moerayo/image/upload/v1632083319/e-store/carousel5_oaiwht.jpg",
        "https://res.cloudinary.com/moerayo/image/upload/v1632083322/e-store/carousel7_xjxy2y.jpg",
      ],
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  /* width:100% */
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: black;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover, .next:hover {
  background-color: white;
}
</style>