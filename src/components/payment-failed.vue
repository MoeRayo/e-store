<template>
  <section>
    <div class="mt4">
      <i class="fas fa-times fa-8x dark-red" />
    </div>
    <logoutmessage message="not successful" />
  </section>
</template>
<script>
import logoutmessage from '@/components/logout-message';

export default {
  components: {
    logoutmessage
  }
}
</script>