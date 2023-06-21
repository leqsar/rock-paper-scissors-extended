<script setup>
  import { ref, vModelText } from "vue";
  import Score from "./components/Score.vue";
  import SelectionPage from "./components/SelectionPage.vue";
  import GamePage from "./components/GamePage.vue";
  import Rules from "./components/Rules.vue";

  const score = ref(0);
  const userChoice = ref('');
  const gameStage = ref('selection');
  const rulesAreOpen = ref(false)
  const mode = ref('advanced')

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
  }

  function switchMode() {
    mode.value = mode.value==='simple' ? 'advanced' : 'simple'
  }

</script>

<template>
  <div class="app-wrapper">
    <Score :score="score" :mode="mode"/>
    <SelectionPage 
      v-if="gameStage==='selection'"
      @user-select="setUserChoice" 
    />
    <GamePage 
      v-if="gameStage==='game'" 
      :choice="userChoice"
      @go-back="restartGame"
      @change-score="changeScore"
    />
  </div>
  <Rules v-show="rulesAreOpen" @hide-rules="hideRules"/>
  <p @click="switchRules" class="rules-heading">rules</p>
  <p @click="switchMode" class="mode-switcher">{{ mode }}</p>
</template>

<style scoped lang="sass">
  @import './input.sass'

  .app-wrapper
    position: relative
    width: min(100%, 1366px)
    margin: 0 auto
    padding-top: 30px

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

  .mode-switcher
    @include center
    position: fixed
    bottom: 20px
    left: 20px
  
</style>
