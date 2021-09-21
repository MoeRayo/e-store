<template>
  <div class="mv3">
    <p>Your payment was {{ message }}</p>
    <p class="i">
      Logging you out in 10secs...
    </p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>
