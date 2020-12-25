<template>
  <div class="goods container-md">
    <good-head-mess />
    <div v-for="group in groupps" :key="group.val">
      <div v-if="groupHeadShow(group)" class="title">{{ group.name }}</div>
      <div class="row">
        <div
          v-for="(good, gid) in filteredGoods(group)"
          :key="gid"
          class="col-md-6 col-lg-4"
        >
          <div class="card">
            <admin-btns v-if="adminMode" type="edit" :good="good" />
            <good-img :good="good" :ver="verSelected(good)" />
            <div class="card-body">
              <h5 class="card-title">{{ good.name }}</h5>
              <p class="card-text">{{ good.desc }}</p>
              <h2 class="card-title">{{ price(good) }}</h2>
              <good-versions :good="good" :selected="verSelected(good)" />
              <div>
                <a
                  class="mybtn"
                  style="cursor: pointer;"
                  @click="addToCard(good)"
                >
                  <i class="fa fa-cart-plus" aria-hidden="true"></i> в
                  корзину</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <admin-btns good="{}" type="add" v-if="adminMode" />
    <cart-btn />
    <edit-win />
  </div>
</template>
<script>
import adminBtns from '../components/goods/goodAdminBtns'
import cartBtn from '../components/goods/cartBtn'
import editWin from '../components/goods/goodEditPopup'
import goodHeadMess from '../components/goods/goodHeadMess'
import goodImg from '../components/goods/goodImg'
import goodVersions from '../components/goods/goodVersions'

export default {
  components: { goodVersions, goodImg, goodHeadMess, editWin, adminBtns, cartBtn },
  methods: {
    price (good) {
      return good.ver[this.verSelected(good)].price + '₽'
    },
    addToCard (good) {
      this.setSelected(good)
      this.$store.commit('addInCart', {
        id: good._id,
        ver: good.selected,
        count: 1
      })
      this.showInfo(good.name)
    },
    filteredGoods (group) {
      return this.goods.filter(good => good.group === group.val)
    },
    showInfo (text) {
      this.$Notify.success({
        title: 'Товар "' + text + '" добавлен в корзину'
      })
    },
    verSelected (good) {
      if (good.selected === undefined) return 0
      if (good.selected >= good.ver.length) return 0
      return good.selected
    },
    setSelected (good) {
      if (good.selected === undefined || good.selected >= good.ver.length) {
        this.$store.commit('setSelected', { good, id: 0 })
      }
    },
    groupHeadShow (group) {
      return group.val != null && this.filteredGoods(group).length > 0
    }
  },
  computed: {
    groupps () {
      return this.$store.state.groupps
    },
    goods () {
      return this.$store.state.goods
    },
    adminMode () {
      return this.$store.state.user.admin
    }
  }
}
</script>
<style scoped>
.card {
  width: 100%;
  max-width: 18rem;
  margin: 10px auto;
}
</style>
