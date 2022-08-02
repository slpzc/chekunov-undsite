<template>
<div id="menu">
<div class="menu__wrapper">
  <div class="left">
    <ul>
      <li @click="$router.push('/services'); $store.commit('setNavigation')">Услуги <sup>36</sup> </li>
      <li @click="$router.push('/portfolio'); $store.commit('setNavigation')" >Портфолио <sup>36</sup> </li>
      <li @click="$store.commit('setNavigation')">Стек <sup>36</sup> </li>
      <li @click="$store.commit('setNavigation')">Отзывы <sup>36</sup> </li>
      <li @click="$store.commit('setNavigation')">Связь со мной <sup>36</sup> </li>
    </ul>
  </div>
  <div class="right">
    <b>Особо важный
      проект?</b>
    <p class="write__me">Напишите мне,</p>
    <p class="mail">CHekunovStudios@official-supp.ru</p>
    <img src="../assets/img/MainImg.svg">
  </div>
</div>
</div>
</template>

<script>
export default {
  name: "menuComp"
}
</script>

<style lang="scss" scoped>
@import '../assets/css/menu.scss';
*{
  user-select: none;
}
</style>