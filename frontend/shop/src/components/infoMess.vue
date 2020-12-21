<template>
  <div
    v-if="show"
    class="alert alert-success"
    role="alert"
    style="position: fixed; z-index: 5; bottom: 5px; right: 5px;"
    v-html="text"
  />
</template>
<script>
export default {
  props: ['show', 'text']
}
</script>
