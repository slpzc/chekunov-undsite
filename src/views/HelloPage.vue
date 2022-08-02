<template>
<div id="HelloPage">
<!-- Start of development of this page: 19:32 06.01.2022 -->
  <div class="main__information">
    <div class="information__wrapper">
      <div class="left__information">
        <h1>Разрабатываю профессиональные
          веб-приложения уже целых
          <span>2 года</span> </h1>
        <button>Начать проект</button>
<!--        <div class="bottom__left__information">-->
<!--          <div class="bottom__left__information__wrapper">-->
<!--            <div class="other__info">-->
<!--             <div class="top__info">-->
<!--               <div class="number">1</div>-->
<!--               <div class="title">Занимаюсь FrontEnd разработкой</div></div>-->
<!--              <div class="bottom__info">Господа, консультация с широким активом требует определения и уточнения направлений прогрессивного развития.</div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
      </div>
      <div class="right__information">
          <p class="title__information">все работы <sup style="color: #CC66FF">32</sup> </p>
          <div class="image__with__jobs">
            <img src="../assets/img/MainImg.svg">
            <p><span>ещё 17 работ</span><span><svg width="33" height="14" viewBox="0 0 33 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 6.99997H32M32 6.99997L26.1505 1M32 6.99997L26.1505 13" stroke="#171717"/>
</svg>
</span></p>
          </div>
      </div>
    </div>
  </div>

    <div class="bottom__information">
      <div class="bottom__info__wrapper">
        <div class="left__b__information">
              <div class="card__information">
                <div class="top__info">
                  <p>1</p>
                  <b>Занимаюсь FrontEnd разработкой</b>
                </div>
                <div class="bottom__info">
                  Господа, консультация с широким активом требует определения и уточнения направлений прогрессивного развития.
                </div>
              </div>
          <div class="card__information">
            <div class="top__info">
              <p>2</p>
              <b>Занимаюсь BackEnd разработкой</b>
            </div>
            <div class="bottom__info">
              Господа, консультация с широким активом требует определения и уточнения направлений прогрессивного развития.
            </div>
          </div>
        </div>
        <div class="right__b__information">
          <p>Последняя работа</p>
          <b>FrontEnd девелопмент образовательной платформы
            “deepsmart”</b>
          <div class="buttons">
            <button>полный кейс</button>
            <button><span>ещё 17 работ</span> <svg width="33" height="14" viewBox="0 0 33 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 6.99997H32M32 6.99997L26.1505 1M32 6.99997L26.1505 13" stroke="white"/>
            </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

</div>
</template>

<script>
export default {
  name: "HelloPage",
  metaInfo: {
    title: 'Главная',
    titleTemplate: '%s - Chekunov Prod.!',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/css/HelloPage';
</style>