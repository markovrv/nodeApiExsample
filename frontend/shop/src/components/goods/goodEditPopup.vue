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
          v-model="v.price"
          placeholder="Цена"
        />
        <input
          type="text"
          class="form-control"
          v-model="v.comment"
          placeholder="описание"
        />
        <div class="input-group-append">
          <button
            class="btn btn-danger btn-sm"
            :disabled="good.ver.length == 1"
            @click="$store.dispatch('delGoodVer', id)"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
      <div class="btn-group" role="group" style="padding-top: 10px">
        <button
          @click="$store.commit('addGoodVer')"
          class="btn btn-outline-success"
          :disabled="good.ver.length >= 5"
        >
          <i class="fa fa-plus" aria-hidden="true"></i>
          Сорт/вид
        </button>
        <button
          class="btn btn-primary"
          @click="$store.dispatch('setGood', good)"
        >
          <i class="fa fa-floppy-o" aria-hidden="true"></i>
          Сохранить
        </button>
        <button
          class="btn btn-danger"
          @click="$store.dispatch('delGood', good)"
          :disabled="good._id == undefined"
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
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
          <i class="fa fa-file-image-o" aria-hidden="true"></i>
          загрузить
        </button>
        <button
          class="btn btn-danger"
          type="button"
          @click="$store.dispatch('delFile', { good })"
        >
          <i class="fa fa-trash" aria-hidden="true" />
          удалить
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
