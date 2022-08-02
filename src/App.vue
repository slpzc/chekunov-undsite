<template>
<div id="root">
  <transition name="slide-fades">
    <div class="backdrop" v-if="serviceModal"></div>
  </transition>
  <div class="mouse__layout">
    <div class="mouse" ref="mouse" :class="{reverseColor: menuComp.show}" :style="{left: left, top: top}">
      <div class="bord"></div>
    </div>
  </div>
  <div class="cont__serv">
  <transition name="slide-fade">
      <aboutService @closeModal="serviceModal = false" v-if="serviceModal" :info="serviceModal"></aboutService>
  </transition>
  </div>
  <div class="lines" :class="{activeMenu: menuComp.show}">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>
  <transition name="slide-faded">
    <navigationComp></navigationComp>
  </transition>
  <transition name="fade">
    <menuComp v-if="menuComp.show"></menuComp>
  </transition>
<!-- other| -->
  <router-view  @openModal="setModal" ></router-view>
<div id="footer"></div>
</div>
</template>

<script>
import navigationComp from "./components/navigationComp";
import menuComp from "./components/menuComp";
import aboutService from './components/aboutService'

export default {
  name: "App",
  data() {
    return {
      serviceModal:false,
      left: 0,
      top: 0
    }
  },
  components: {
    navigationComp,menuComp,aboutService
  },
  methods: {
    setModal(v) {
      this.serviceModal = v
    },
    setMouseMove(e){
      this.left = e.clientX - 10 + 'px'
      this.top = e.clientY - 10 + 'px'
    }
  },
  mounted(){
    addEventListener('mousemove', e => this.setMouseMove(e))
  },
  computed: {
    menuComp() {
      return this.$store.state.nav
    }
  },
}
</script>

<style lang="scss">
// IMPORTS
@import './assets/css/reset.css';
@import './assets/font/stylesheet.css';
// GLOBAL SETTINGS
body{
  cursor: none;
}
*{
  font-family: 'Chekunovprod' !important;
  user-select: none;
}
img{
  user-select: none;
  pointer-events: none;
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}

// ANIMATION

.slide-fade-enter-active {
  transition: transform .45s ease, opacity .1s ease;
}
.slide-fade-leave-active {
  transition: transform .45s ease, opacity 1.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(893px);
  opacity: 0;
}
.slide-fades-enter-active {
  transition: all .2s ease;
}
.slide-fades-leave-active {
  transition: all .2s ease;
}
.slide-fades-enter, .slide-fades-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.fade-enter-active {
  transition: all .4s ease;
}
.fade-leave-active {
  transition: all .2s;
}
.fade-enter, .fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

// LINES
.lines{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 21;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 100px 1.2fr 1.7fr 1.1fr 1.1fr 1.7fr 1.4fr 1.1fr .7fr 140px;
  width: 100vw;
  pointer-events: none;
  .line{
    height: 100vh;
    width: 1px;
    background-color: #171717;
    transition: width 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: .1
  }
}
// MAIN MENU
.activeMenu{
  .line{
    width: 100%;
    opacity: 1;

  }
}
// MOUSE EFFECT
.mouse__layout{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .mouse{
    width: 20px;
    height: 20px;
    background-color: black;
    position: absolute;
    border-radius:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    pointer-events: none;
    z-index: 999;
    .bord{
      width:26px;
      height: 26px;
      border: 1px solid black;
      border-radius: 100%;
      flex-shrink: 0;
    }
  }
  .reverseColor{
    background-color: #CC66FF;
    *{
      border: 1px solid #CC66FF !important;
    }
  }
}
// BG DROP
.backdrop{
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  z-index: 23;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
// ABOUT SERVICE OVERFLOW
.cont__serv{
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

</style>