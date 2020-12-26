<template>
  <div class="text-right css-3d-text">
    <div>
      Добро пожаловать<br />
      в наш интернет магазин<br />
    </div>
    <div class="info-text text-left">
      <!-- У нас есть новогодние предложения:<br />
      - восковые свечи,<br />
      - ароматное медовое мыло,<br />
      - мёд в оригинальной упаковке -->
      27 декабря в ТРЦ Джем Молл Выставка-продажа <br />
      мёда и новогодних сувениров с пасеки Марковых. <br />
      В продаже мёд, новогодние восковые свечи, <br />
      ароматное медовое мыло.
    </div>
  </div>
</template>
<style>
.css-3d-text {
  font-size: 28pt;
  margin: 10px auto 0px;
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
  background-color: hsla(0, 0%, 100%, 0.7);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  margin: 75px 0 0 auto;
  border-radius: 1em;
  padding: 13px;
  box-shadow: 3px 3px 13px rgba(0, 100, 0, 0.6);
  border: 1px solid #009900;
}
@media screen and (max-width: 500px) {
  .css-3d-text {
    background-image: none !important;
    margin: 0 !important;
    height: fit-content !important;
  }
  .info-text {
    margin: 10px 0 0 0 !important;
  }
}
</style>
