<script setup>
import { ref } from 'vue'

defineProps({
  score: Number,
})

</script>

<template>
  <div class="app-state-wrapper">
    <img src="../assets/images/logo.svg" alt="Rock, Paper, Scissors">
    <div class="score-wrapper">
      <p>score</p>
      <p class="score">{{ score }}</p>
    </div>
  </div>
</template>

<style scoped lang="sass">
  @import '../input.sass'

  .app-state-wrapper
    display: flex
    justify-content: space-between
    align-items: center
    width: 700px
    height: 150px
    margin: 0 auto
    padding: 0 30px
    box-sizing: border-box
    border-radius: 10px
    border: 2px solid $headerOutline

    .score-wrapper
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-evenly
      width: 150px
      height: 115px
      background-color: $backLight
      border-radius: 10px

      p:first-of-type
        color: $scoreText
        font:
          size: 24px
          weight: 700
        text-transform: uppercase

      p:last-of-type
        color: $darkText
        font:
          size: 60px
          weight: 700
        line-height: 60px

</style>
