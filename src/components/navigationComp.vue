<template>
<div id="nav" :class="{opennedMenu: navigationInfo.show}">
  <div class="social__block block">
    <div class="social__wrapper">
      <ul>
        <li>vk</li>
        <li>inst</li>
        <li>tg</li>
      </ul>
    </div>
  </div>
  <div class="change__person">
    <div class="menu__person">
     <div class="first__person" @click="dropDown = !dropDown"> <p>Chekunov</p>
       <div class="arrow" :class="{questActivated: dropDown}"><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M1 1L6 6L11 1" stroke="#171717" stroke-width="2"/>
       </svg>
       </div></div>
    </div>
  </div>
  <div class="menu__block block" @click="navigationInfo = false">
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="6" height="6" fill="white"/>
      <rect x="16" width="6" height="6" fill="white"/>
      <rect x="32" width="6" height="6" fill="white"/>
      <rect y="16" width="6" height="6" fill="white"/>
      <rect x="16" y="16" width="6" height="6" fill="white"/>
      <rect x="32" y="16" width="6" height="6" fill="white"/>
      <rect y="32" width="6" height="6" fill="white"/>
      <rect x="16" y="32" width="6" height="6" fill="white"/>
      <rect x="32" y="32" width="6" height="6" fill="white"/>
    </svg>
    <p>меню</p>
  </div>
</div>
</template>

<script>
export default {
  name: "navigationComp",
  data() {
    return {
      dropDown: false
    }
  },
  computed: {
    navigationInfo: {
      get(){
        return this.$store.state.nav
      },
      set(){
        this.$store.commit('setNavigation')
      }
    }
  },
}
</script>

<style lang="scss" scoped>
*{
  transition: all .2s ease;
}
  #nav{
    display:flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(23, 23, 23, 0.1);
    z-index: 22;
    position: relative;
  }
  .change__person{
    display: flex;
    align-items: center;
    position: relative;
    .menu__person{
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      transition: all 0.2s ease;
      top: 0;
      .first__person{
        display: flex;

        .arrow{
          transition: transform 0.2s ease;
          transform: rotate(0deg);
          margin-left: 35px;
        }
        .questActivated{
          transform: rotate(180deg)
        }
      }
    }
  }
    .block{
      max-width:130px;
      min-height:130px;
      height: 100%;
      width: 100%;
      background-color: #CC66FF;
      display: flex;
      align-items: center;
      justify-content: center;
      .social__wrapper{
        max-width: 61px;
        ul{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        li{

          font-weight: 500;
          color: rgba(255, 255, 255, 0.35);
          transition: all 0.2s ease;
          &:hover{
            color: white;
          }
        }
      }

    }
    .menu__block{

      //display:flex;
      //flex-direction: column;
      overflow: hidden;
      position: relative;
      p{
        position: absolute;
        bottom: -50px;
        transition: all 0.2s ease-in-out;
        color: white;
        opacity: 0.5;

        letter-spacing: .1em;
        font-weight: 500;
      }
      svg{
        rect:nth-child(5){
          x: 16;
          transition: all 0.2s ease;
        }
        rect:nth-child(6){
          x: 32;
          transition: all 0.2s ease;
        }
        *{
          width: 6px;
          height: 6px;
          transition: all 0.2s ease;
        }
      }
      &:hover{
        p{
          bottom: 10px;
        }
        svg{
          rect:nth-child(5){
            x: 100
          }
          rect:nth-child(6){
            x: 100
          }
          //  sat
          rect:nth-child(1){
            width: 16px;

          }
          rect:nth-child(2){
            width: 16px;
          }
          rect:nth-child(3){
            width: 16px;
            border-radius: 0px 6px 6px 0px;
            rx:-15;
            ry:-15;
          }
          rect:nth-child(4){
            height: 32px;
            y: 0;
          }
          rect:nth-child(6){
            width: 16px;
          }
          rect:nth-child(7){
            width: 16px;
          }
          rect:nth-child(8){
            width: 16px;
          }
        }
      }
    }
    svg{

      opacity: 1;
      rect:nth-child(5){
        x: 16;
        transition: all 0.2s ease;
      }
      rect:nth-child(6){
        x: 32;
        transition: all 0.2s ease;
      }
      *{
        width: 6px;
        height: 6px;
        transition: all 0.2s ease;
      }

      &:hover{
        rect:nth-child(5){
          x: 100
        }
        rect:nth-child(6){
          x: 100
        }
      //  sat
        rect:nth-child(1){
          width: 16px;

        }
        rect:nth-child(2){
          width: 16px;
        }
        rect:nth-child(3){
          width: 16px;
          border-radius: 0px 6px 6px 0px;
          rx:-15;
          ry:-15;
        }
        rect:nth-child(4){
          height: 32px;
          y: 0;
        }
        rect:nth-child(6){
          width: 16px;
        }
        rect:nth-child(7){
          width: 16px;
        }
        rect:nth-child(8){
          width: 16px;
        }
      }
    }

    .opennedMenu{
      .change__person{
        color: white;
        svg{
          path{
            stroke: white
          }
        }
      }
      .block{
        background-color: transparent;
        p{
          opacity:0;
        }
        svg{
          rect:nth-child(2n){
            opacity: 0
          }
        }
        &:hover{
          background-color: white;
          li{color: black;}
          svg{
            rect{
              fill: black;
            }
            rect:nth-child(1){
              width: 6px;
            }
            rect:nth-child(7){
              width: 6px;
            }
            rect:nth-child(5){
             x: 16
            }
          }
        }
      }
    }
</style>