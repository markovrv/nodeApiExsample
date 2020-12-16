<template>
  <vodal
    :show="$store.state.goodAdminModal.show"
    @hide="$store.commit('closeGoodAdminModal')"
    :customStyles="{ width: '50%', minWidth: '300px', height: 'fit-content' }"
  >
    <h3>{{ $store.state.goodAdminModal.header }}</h3>
    <div v-if="$store.state.goodAdminModal.type != 'photo'">
      <div class="form-group">
        <label for="name">Наименование товара</label>
        <input v-model="good.name" type="text" class="form-control" id="name" />
      </div>
      <div class="form-group">
        <label for="group">Группа товара</label>
        <select v-model="good.group" class="form-control" id="group">
          <option v-for="group in groupps" :key="group.val" :value="group.val">{{ group.name }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="desc">Описание товара</label>
        <textarea
          v-model="good.desc"
          type="text"
          class="form-control"
          id="desc"
          rows="3"
        />
      </div>
      <label>Сорт/вид товара</label>
      <div
        v-for="(v, id) in good.ver"
        :key="id"
        class="input-group"
        style="padding-bottom: 5px"
      >
        <div class="input-group-prepend">
          <span class="input-group-text">{{ id }}:</span>
        </div>
        <input
          type="number"
          class="form-control"
          :id="'price' + id"
          v-model="v.price"
          placeholder="Цена"
        />
        <input
          type="text"
          class="form-control"
          :id="'comment' + id"
          v-model="v.comment"
          placeholder="описание"
        />
        <div class="input-group-append">
          <button
            class="btn btn-danger btn-sm"
            :disabled="good.ver.length == 1"
            @click="$store.dispatch('delGoodVer', id)"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-trash-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="btn-group" role="group" style="padding-top: 10px">
        <button
          @click="$store.commit('addGoodVer')"
          class="btn btn-outline-success"
          :disabled="good.ver.length >= 5"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-bookmark-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
            />
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"
            />
          </svg>
          Сорт/вид
        </button>
        <button
          class="btn btn-primary"
          @click="$store.dispatch('setGood', good)"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-bag-check"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 1a2.5 2.5 0 0 0-2.5 2.5V4h5v-.5A2.5 2.5 0 0 0 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5H2z"
            />
            <path
              fill-rule="evenodd"
              d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
            />
          </svg>
          Сохранить
        </button>
        <button
          class="btn btn-danger"
          @click="$store.dispatch('delGood', good)"
          :disabled="good._id == undefined"
        >
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-trash-fill"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"
            />
          </svg>
          Удалить
        </button>
      </div>
    </div>
    <div v-else>
      <div class="input-group">
        <div class="custom-file">
          <input
            type="file"
            ref="file"
            class="custom-file-input"
            v-on:change="handleFileUpload()"
          />
          <label class="custom-file-label" style="padding-right: 100px;">{{
            filename
          }}</label>
        </div>
      </div>
      <div class="btn-group" role="group" style="padding-top: 10px">
        <button
          class="btn btn-primary"
          type="button"
          @click="$store.dispatch('sendFile', { good, file })"
        >
          Загрузить
        </button>
        <button
          class="btn btn-danger"
          type="button"
          @click="$store.dispatch('delFile', { good })"
        >
          Удалить
        </button>
      </div>
    </div>
  </vodal>
</template>
<script>
import Vue from 'vue'
import 'vodal/common.css'
import Vodal from 'vodal'
Vue.component(Vodal.name, Vodal)
export default {
  data () {
    return {
      file: null
    }
  },
  computed: {
    groupps () {
      return this.$store.state.groupps
    },
    good () {
      return this.$store.state.goodAdminModal.good
    },
    filename () {
      return this.file ? this.file.name : ''
    }
  },
  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
    }
  }
}
</script>
<style>
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: 'Выбрать' !important;
}
</style>
