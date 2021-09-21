<template>
  <div>
    <div>
      <p>Welcome to Rayo E-Store</p>
      <img class="br3" :src="$auth.user.picture">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>
  </div>
</template>