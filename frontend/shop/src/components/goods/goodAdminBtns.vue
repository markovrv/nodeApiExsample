<template>
  <div>
    <button
      v-if="type != 'add'"
      class="btn btn-primary btn-sm btn-top"
      type="button"
      @click="$store.commit('showGoodAdminModal', { good, type: 'edit' })"
    >
      <i class="fa fa-pencil" aria-hidden="true"></i>
    </button>
    <button
      v-if="type != 'add'"
      class="btn btn-primary btn-sm btn-top"
      type="button"
      style="right: 40px"
      @click="$store.commit('showGoodAdminModal', { good, type: 'photo' })"
    >
      <i class="fa fa-file-image-o" aria-hidden="true"></i>
    </button>
    <button
      v-if="type == 'add'"
      class="btn btn-success btn-bottom"
      type="button"
      style="z-index: 100;"
      @click="$store.commit('showGoodAdminModal', { good, type: 'add' })"
    >
      <i class="fa fa-plus" aria-hidden="true"></i> товар
    </button>
  </div>
</template>
<script>
export default {
  props: ['good', 'type']
}
</script>
<style>
.btn-top {
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 17px !important;
}
.btn-bottom {
  position: fixed;
  bottom: 15px;
  right: 15px;
  border-radius: 20px !important;
  width: 90px;
  height: 40px;
}
</style>
