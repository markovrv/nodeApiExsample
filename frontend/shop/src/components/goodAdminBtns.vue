<template>
  <div>
    <button
      v-if="gid > -1"
      class="btn btn-primary btn-sm btn-top"
      type="button"
      @click="$store.commit('showGoodAdminModal', { gid, type: 'edit' })"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-pencil"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
        />
      </svg>
    </button>
    <button
      v-if="gid > -1"
      class="btn btn-primary btn-sm btn-top"
      type="button"
      style="right: 40px"
      @click="$store.commit('showGoodAdminModal', { gid, type: 'photo' })"
    >
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-card-image"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M14.5 3h-13a.5.5 0 0 0-.5.5v9c0 .013 0 .027.002.04V12l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094L15 9.499V3.5a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm4.502 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
        />
      </svg>
    </button>
    <button
      v-if="gid == -1"
      class="btn btn-success btn-bottom"
      type="button"
      style="padding: 0;"
      @click="$store.commit('showGoodAdminModal', { gid, type: 'add' })"
    >
      <svg
        width="2em"
        height="2em"
        viewBox="0 0 16 16"
        class="bi bi-plus"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  props: ['gid']
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
    width: 40px;
  height: 40px;
}
</style>
