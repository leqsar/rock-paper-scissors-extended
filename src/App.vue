<script setup>
  import { ref } from "vue";
  import Score from "./components/Score.vue";
  import SelectionPage from "./components/SelectionPage.vue";
  import GamePage from "./components/GamePage.vue";
  import Rules from "./components/Rules.vue";

  const score = ref(0);
  const userChoice = ref('');
  const gameStage = ref('selection');
  const rulesAreOpen = ref(false)

  function setUserChoice(figure) {
    userChoice.value = figure
    gameStage.value = 'game'
  }

  function switchRules() {
    rulesAreOpen.value = rulesAreOpen.value ? false : true
  }

  function hideRules() {
    rulesAreOpen.value = false
  }

</script>

<template>
  <div class="app-wrapper">
    <Score :score="score" />
    <SelectionPage @user-select="setUserChoice" v-if="gameStage==='selection'"/>
    <GamePage v-if="gameStage==='game'" :choice="userChoice"/>
  </div>
  <Rules v-show="rulesAreOpen" @hide-rules="hideRules"/>
  <p @click="switchRules" class="rules-heading">rules</p>
</template>

<style scoped lang="sass">
  @import './input.sass'

  .app-wrapper
    position: relative
    width: min(100%, 1366px)
    margin: 0 auto
    padding-top: 30px

  .rules-heading
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
    z-index: 3

    &:hover
      cursor: pointer
  
</style>
