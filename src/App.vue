<template>
  <div id="app-wrap">
    <div class="mask" :class="{'mask-opend':store.state.isShowMask}" @click="changeStoreStateShowMask"></div>
    <HomeNav></HomeNav>
    <Main></Main>
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>-->
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex'
import HomeNav from '@/components/HomeNav.vue';
import Main from '@/components/Main.vue';
import '../global.css'
import '../src/keyframes/home.css'

@Options({
  components: {
    HomeNav,
    Main
  },
})
export default class Home extends Vue {
  store = useStore()

  changeStoreStateShowMask(){
    this.store.commit('changeMask',false)
  }

  mounted(){
    console.log('Store',this)
  }
  
}
</script>

<style lang="scss">


.mask{
  position: fixed;
  z-index: 222;
  width: 100%;
  opacity: 0;
  transition: all 0.5s ease;
}
.mask-opend{
  opacity: 1;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
}
</style>
