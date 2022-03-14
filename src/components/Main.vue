<template>
    <main class="main-wrap main">
        <h1>这是一个Main 组件</h1>
    </main>
</template>

<script lang="ts">
import { Options, Vue, } from 'vue-class-component';
@Options({
  components: {

  },
})
export default class Main extends Vue {

}


</script>

<style lang="scss" scoped>
.main {
  // height: 500px; // 暂时这样写
  background: linear-gradient(
    90deg,
    rgba(247, 149, 51, 0.1),
    rgba(243, 112, 85, 0.1) 15%,
    rgba(239, 78, 123, 0.1) 30%,
    rgba(161, 102, 171, 0.1) 44%,
    rgba(80, 115, 184, 0.1) 58%,
    rgba(16, 152, 173, 0.1) 72%,
    rgba(7, 179, 155, 0.1) 86%,
    rgba(109, 186, 130, 0.1)
  );
}
</style>
