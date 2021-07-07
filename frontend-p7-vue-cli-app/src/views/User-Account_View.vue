<template>
  <div class="home">
    
    <GetUserAcccount msg="Welcome to your Personal Center "/>
  </div>
</template>

<script>
// @ is an alias to /src
import GetUserAcccount from '@/components/User-GetAccount_Component.vue'

export default {
  name: 'GetUserAccount',
  components: {
    GetUserAcccount
  }
}
</script>