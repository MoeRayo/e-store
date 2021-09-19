<template>
  <div>
    <div class="slideshow-container">
      <div class="mySlides fade">
        <img src="@/assets/carousel8.jpg" style="width:100%">''
      </div>
      <div class="mySlides fade">
        <img src="@/assets/carousel3.jpg" style="width:100%">
      </div>
      <div class="mySlides fade">
        <img src="@/assets/carousel4.jpg" style="width:100%">
      </div>
       <div class="mySlides fade">
        <img src="@/assets/carousel5.jpg" style="width:100%">
      </div>
      <div class="mySlides fade">
        <img src="@/assets/carousel7.jpg" style="width:100%">
      </div>
    </div>
    <br>
    <div style="text-align:center">
      <span class="dot"></span> 
      <span class="dot"></span> 
      <span class="dot"></span> 
      <span class="dot"></span> 
      <span class="dot"></span> 
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
  data() {
    return {
        slideIndex: 0,
      title: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME

    };
  },
  computed: {
    carousels() {
      return this.$store.getters.availableCarousels
    }
  },
  mounted: function() {
    this.showSlides();
    this.$store.dispatch('fetchCarousels')
  },

  methods: {
   showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {this.slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex-1].style.display = "block";  
    dots[this.slideIndex-1].className += " active";
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
}
  }
};
</script>

<style scoped>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .text {font-size: 11px}
}
</style>