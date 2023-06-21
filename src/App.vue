<script setup>
  import { onMounted, ref } from "vue";
  import { advancedStyles, simpleStyles } from "./figures";
  import Score from "./components/Score.vue";
  import SelectionPage from "./components/SelectionPage.vue";
  import GamePage from "./components/GamePage.vue";
  import Rules from "./components/Rules.vue";
  import triangle from './assets/images/bg-triangle.svg'
  import pentagon from './assets/images/bg-pentagon.svg'

  const score = ref(0)
  const userChoice = ref('')
  const gameStage = ref('selection')
  const rulesAreOpen = ref(false)
  const mode = ref('advanced')
  const styles = ref(advancedStyles)
  const selectionStyles = ref({
    backSrc: pentagon,
    rows: {
      start1: 1,
      end1: 2,
      start2: 2,
      end2: 3
    }
  })

  onMounted(() => {
    const savedScore = sessionStorage.getItem("score")
    if(savedScore) score.value = savedScore
  })

  function setUserChoice(figure) {
    userChoice.value = figure
    gameStage.value = 'game'
  }

  function restartGame() {
    gameStage.value = 'selection'
  }

  function switchRules() {
    rulesAreOpen.value = rulesAreOpen.value ? false : true
  }

  function hideRules() {
    rulesAreOpen.value = false
  }

  function changeScore(gameResult) {
    if(gameResult==='you won') score.value++
    if(gameResult==='you lost') score.value--
    sessionStorage.setItem("score", score.value)
  }

  function switchMode() {
    mode.value = mode.value==='simple' ? 'advanced' : 'simple'
    styles.value = mode.value==='simple' ? simpleStyles : advancedStyles
    selectionStyles.value.backSrc = mode.value==='simple' ? triangle : pentagon
    selectionStyles.value.rows = mode.value==='simple' ? {
      start1: 3,
      end1: 4,
      start2: 1,
      end2: 2
    } : {
      start1: 1,
      end1: 2,
      start2: 2,
      end2: 3
    }
  }

</script>

<template>
  <div class="app-wrapper">
    <Score :score="score" :mode="mode"/>
    <SelectionPage 
      v-if="gameStage==='selection'"
      :selectionStyles="selectionStyles"
      :mode="mode"
      @user-select="setUserChoice"
    />
    <GamePage 
      v-if="gameStage==='game'" 
      :choice="userChoice"
      :mode="mode"
      @go-back="restartGame"
      @change-score="changeScore"
    />
  </div>
  <Rules v-show="rulesAreOpen" @hide-rules="hideRules" :mode="mode"/>
  <p @click="switchRules" class="rules-heading">rules</p>
  <div @click="switchMode" class="mode-switcher-wrapper">
    <p>Advanced</p>
    <div class="switcher-wrapper">
      <div class="switcher" :style="styles"></div>
    </div>
    <p>Simple</p>
  </div>
</template>

<style scoped lang="sass">
  @import './input.sass'

  .app-wrapper
    position: relative
    width: min(100%, 1366px)
    margin: 0 auto
    padding-top: 30px
    padding-bottom: 120px 
    box-sizing: content-box

  .rules-heading,
  .mode-switcher
    @include center
    position: fixed
    bottom: 20px
    right: 20px
    width: 130px
    height: 50px
    border: 2px solid $headerOutline
    border-radius: 5px
    color: $backLight
    font-size: 16px
    text-transform: uppercase
    letter-spacing: 3px
    user-select: none
    z-index: 3

    &:hover
      cursor: pointer

  .rules-heading

    @media screen and (max-width: 500px) 
      width: 50%
      left: 25%
      bottom: 0px
      position: absolute
    
    &:hover
      background-color: $backLight
      color: $darkText
      transform: scale(1.1)
      transition: all 0.2s

  .mode-switcher-wrapper
    @include center
    height: 80px
    position: fixed
    gap: 10px
    bottom: 20px
    left: 20px
    color: $backLight
    font-size: 22px

    @media screen and (max-width: 500px) 
      width: 100%
      top: 170px
      position: absolute
      
    p
      text-transform: uppercase

    .switcher-wrapper
      display: flex
      align-items: center
      position: relative
      width: 60px
      height: 30px
      padding: 2px 3px
      box-sizing: border-box
      border-radius: 15px
      border: 2px solid $headerOutline

      &:hover
        cursor: pointer

      .switcher
        position: absolute
        width: 24px
        height: 24px
        border-radius: 12px
        background-color: $backLight
        transition: all 0.5s

        &::after
          position: absolute
          left: 3px
          top: 3px
          content: ''
          width: 18px
          height: 18px
          border-radius: 9px
          background-color: $backLight

  
</style>
