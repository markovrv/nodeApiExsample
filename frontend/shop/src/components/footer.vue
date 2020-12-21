<template>
  <div id="foot">
    <div class="row">
      <div class="col-sm-4">
        <b>ИП Марков Владимир Николаевич</b><br />
        ОГРН 304432435200110<br />
        ИНН 432400080501
      </div>
      <div class="col-sm-4">
        <b>Наш адрес:</b><br />
        г. Киров, ул Милицейская, 31<br />
        (Центральный рынок)<br />
        <a href="javascript://" @click="showMap = true">
          <i class="fa fa-map-marker" aria-hidden="true"></i> карта
        </a>
      </div>
      <div class="col-sm-4">
        <b>Контакты</b><br />
        +7 (905) 870-7667<br />
        +7 (964) 250-0268<br />
        <a href="https://vk.com/medmarkovyh" target="_blank"
          ><i class="fa fa-vk"></i> medmarkovyh</a
        >
      </div>
    </div>
    <vodal
      :show="showMap"
      @hide="showMap = false"
      :customStyles="{
        width: '80%',
        minWidth: '300px',
        height: 'fit-content'
      }"
    >
      <div style="position:relative;overflow:hidden;">
        <a
          href="https://yandex.ru/maps/org/paseka_markovykh/1261368074/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:0px;"
          >Пасека Марковых</a
        ><a
          href="https://yandex.ru/maps/46/kirov/category/honey_and_beekeeping/184106474/?utm_medium=mapframe&utm_source=maps"
          style="color:#eee;font-size:12px;position:absolute;top:14px;"
          >Мёд и продукты пчеловодства в Кирове</a
        ><iframe
          src="https://yandex.ru/map-widget/v1/-/CCUEzLwVWB"
          width="100%"
          height="400"
          frameborder="0"
          allowfullscreen="true"
          style="position:relative;"
        ></iframe>
      </div>
    </vodal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showMap: false
    }
  }
}
</script>
<style>
#foot {
  padding: 20px;
  padding-bottom: 0px;
  position: absolute; /* добавили */
  bottom: 0; /* добавили */
  left: 0;
  right: 0;
  top: 100%;
  min-height: 116px;
  height: fit-content;
  background: #ffc21a;
  background: linear-gradient(to bottom, #ffc21a 0%, #ff9900 100%);
  background: -moz-linear-gradient(top, #ffc21a 0%, #ff9900 100%);
  background: -webkit-linear-gradient(top, #ffc21a 0%, #ff9900 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffc21a', endColorstr='#ff9900',GradientType=0 );
}
</style>
