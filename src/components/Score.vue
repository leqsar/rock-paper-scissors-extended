<script setup>
import { ref } from 'vue'
import advancedLogo from '../assets/images/logo-bonus.svg'
import simpleLogo from '../assets/images/logo.svg'

defineProps({
  score: Number,
  mode: String,
})

function defineImg(mode) {
  if(mode==='advanced') return advancedLogo
  return simpleLogo
}

</script>

<template>
  <div class="app-state-wrapper">
    <img :src="defineImg(mode)" alt="Logo">
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

    @media screen and (max-width: 720px) 
      width: 90%
      height: auto
      padding: 10px 10px

    .score-wrapper
      display: flex
      flex-direction: column
      align-items: center
      justify-content: space-evenly
      width: 150px
      height: 115px
      background-color: $backLight
      border-radius: 10px
      
      @media screen and (max-width: 500px) 
        width: 40%
        height: auto
        aspect-ratio: 5/4

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

    img 
      @media screen and (max-width: 500px) 
          min-width: 70px
          width: 40%

</style>
