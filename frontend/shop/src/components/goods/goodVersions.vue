<template>
  <div
    v-if="good.ver.length > 1"
    class="btn-group"
    role="group"
    style="padding-bottom: 16px;"
  >
    <button
      v-for="(v, id) in good.ver"
      :key="id"
      type="button"
      class="btn btn-sm"
      :class="isSelected(good, id) ? 'btn-success' : 'btn-outline-success'"
      @click="$store.commit('setSelected', { good, id })"
    >
      {{ v.comment }}
    </button>
  </div>
</template>
<script>
export default {
  props: ['good', 'selected'],
  methods: {
    isSelected (good, id) {
      return this.selected === id
    }
  }
}
</script>
