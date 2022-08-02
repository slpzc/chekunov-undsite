<template>
<div id="aboutService">
  <div class="close" @click="$emit('closeModal')"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L15 15M15 1L1 15" stroke="white" stroke-width="2"/>
  </svg>
  </div>
  <div class="about__wrapper">
    <div class="top">
      <div class="left">{{info.title}}</div>
      <div class="center">
        <p>сроки</p>
        <b>{{info.dates}}</b>
      </div>
      <div class="right">
        <p>цена</p>
        <b>{{info.price}}</b>
      </div>
    </div>
    <div class="content">
      <section>
        <b>Что я делаю</b>
        <p>{{ info.FirstBlock }}</p>
      </section>
      <section>
        <b>С каким стеком работаю</b>
        <p>{{ info.stack }}</p>
      </section>
      <button>Заполнить форму</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "aboutService",
  props: {
    info: {
      type: Object
    },
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/css/aboutServiceModal';
</style>