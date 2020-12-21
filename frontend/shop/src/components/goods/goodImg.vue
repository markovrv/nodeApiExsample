<template>
  <img
    v-if="good.ver[ver].photo"
    class="card-img-top"
    :src="path + good.ver[ver].photo.file"
    :alt="good.name"
  >
</template>
<script>
export default {
  props: ['good', 'ver'],
  data () {
    return {
      path: '/img/'
    }
  },
  mounted () {
    this.path = this.$store.state.server + this.path
  }
}
</script>
