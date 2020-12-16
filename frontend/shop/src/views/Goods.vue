<template>
  <div class="goods container-md">
    <div class="text-right css-3d-text">
      <div>
        Добро пожаловать<br />
        в наш интернет магазин<br />
      </div>
      <div class="info-text text-left">
        У нас есть новогодние предложения:<br />
        - восковые свечи,<br />
        - ароматное медовое мыло,<br />
        - мёд в оригинальной упаковке
      </div>
    </div>
    <div v-for="group in groupps" :key="group.val">
      <div
        v-show="group.val != null && filteredGoods(group).length > 0"
        class="title"
      >
        {{ group.name }}
      </div>
      <div class="row">
        <div
          v-for="(good, gid) in filteredGoods(group)"
          :key="gid"
          class="col-md-6 col-lg-4"
        >
          <div
            class="card"
            style="width: 100%; max-width: 18rem; margin: 10px auto"
          >
            <admin-btns v-if="adminMode" type="edit" :good="good" />
            <img
              v-if="good.ver[verSelected(good)].photo"
              class="card-img-top"
              :src="path + good.ver[verSelected(good)].photo.file"
              :alt="good.name"
            />
            <div class="card-body">
              <h5 class="card-title">{{ good.name }}</h5>
              <p class="card-text">
                {{ good.desc }}
              </p>
              <h2 class="card-title">
                {{ good.ver[verSelected(good)].price }}₽
              </h2>
              <div class="btn-group" role="group" style="padding-bottom: 16px;">
                <button
                  v-for="(v, id) in good.ver"
                  :key="id"
                  type="button"
                  class="btn btn-sm"
                  :class="
                    isSelected(good, id) ? 'btn-success' : 'btn-outline-success'
                  "
                  @click="$store.commit('setSelected', { good, id })"
                >
                  {{ v.comment }}
                </button>
              </div>
              <div>
                <a
                  class="mybtn"
                  style="cursor: pointer;"
                  @click="
                    setSelected(good, gid)
                    $store.commit('addInCart', {
                      id: good._id,
                      ver: good.selected,
                      count: 1
                    })
                    showInfo(good.name)
                  "
                  >В корзину</a
                >
              </div>
            </div>
          </div>
        </div>
        <admin-btns good="{}" type="add" v-if="adminMode" />
        <edit-win />
        <div
          v-show="infoShow"
          class="alert alert-success"
          role="alert"
          style="position: fixed; z-index: 5; bottom: 5px; right: 5px;"
          v-html="infoText"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import adminBtns from '../components/goodAdminBtns'
import editWin from '../components/goodEditPopup'
Vue.component('admin-btns', adminBtns)
Vue.component('edit-win', editWin)

export default {
  data () {
    return {
      path: '/img/',
      infoShow: false,
      infoText: ''
    }
  },
  methods: {
    filteredGoods (group) {
      return this.goods.filter(good => good.group === group.val)
    },
    showInfo (text) {
      this.infoText =
        'Товар "' +
        text +
        '" добавлен в <a href="#/cart" class="alert-link">корзину</a>'
      this.infoShow = true
      setTimeout(() => {
        this.infoShow = false
      }, 15000)
    },
    isSelected (good, id) {
      return this.verSelected(good) === id
    },
    verSelected (good) {
      if (good.selected === undefined) return 0
      if (good.selected >= good.ver.length) return 0
      return good.selected
    },
    setSelected (good, gid) {
      if (good.selected === undefined || good.selected >= good.ver.length) {
        this.$store.commit('setSelected', { good, id: 0 })
      }
    }
  },
  computed: {
    groupps () {
      return this.$store.state.groupps
    },
    goods () {
      return this.$store.getters.getAllGoods
    },
    adminMode () {
      return this.$store.state.adminMode
    }
  },
  mounted () {
    this.path = this.$store.state.server + this.path
  }
}
</script>
<style>
.css-3d-text {
  font-size: 28pt;
  margin: 20px auto 0px;
  padding: 6px 20px 20px 20px;
  border-radius: 1rem;
  height: 323px;
  background-image: url(https://пасека-марковых.рф/images/photos/2/foto0090.jpg);
  background-size: 100%;
  line-height: 1;
  color: #009900;
  text-shadow: 2px 1px 3px #090;
}
.info-text {
  color: red;
  text-shadow: 1px 1px 2px rgba(255, 0, 0, 0.6);
  font-size: 18pt;
  line-height: 1.3;
  background-color: rgba(255, 255, 255, 0.7);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 75px 0 0 auto;
  border-radius: 1em;
  padding: 13px;
}
</style>
