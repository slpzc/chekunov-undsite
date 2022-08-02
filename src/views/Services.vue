<template>
<div id="Services">

  <div class="services__wrapper">
    <div class="service__card" v-for="(s, index) in services" :key="index" @click="openModal(s)">
      <b>{{ s.name }}</b>
      <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 22.5L12 12L2 1.5" stroke="#171717" stroke-width="3"/>
      </svg>

    </div>
  </div>
  <img src="../assets/img/MainImg.svg">
</div>
</template>

<script>
export default {
  name: "Services",
  methods: {
    openModal(card) {
      this.$emit('openModal', card)
    }
  },
  computed: {
    services() {
      return this.$store.state.aboutService.services
    }
  },
  metaInfo: {
    title: 'Услуги',
    titleTemplate: '%s - Chekunov Prod.!',
    htmlAttrs: {
      lang: 'ru',
      amp: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/services';

</style>