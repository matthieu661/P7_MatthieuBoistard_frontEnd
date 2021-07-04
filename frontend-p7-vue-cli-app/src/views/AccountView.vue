<template>
  <div class="home">
    
    <OneUser msg="Welcome to your Personal Center "/>
  </div>
</template>

<script>
// @ is an alias to /src
import OneUser from '@/components/AccountComponent.vue'

export default {
  name: 'GetOneUser',
  components: {
    OneUser
  }
}
</script>