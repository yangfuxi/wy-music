<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Lantern from '../components/lantern .vue'
import Box_Music from '../components/Box_Music.vue'

</script>
<template>
   <Lantern></Lantern>
   <div class="detail">
      <Box_Music></Box_Music>
   </div>
</template>
  
<style scoped>
.detail{
   height: 2500px;
   width: 980px;
   margin: auto;
   background-color: #f4bbbb;
}
</style>
  
  