<script setup>
    import {onMounted, ref} from 'vue'
    import {figures} from '../figures.js'

    const props = defineProps({
        choice: String
    })

    const pcChoice = ref();

    onMounted(() => {
        let timerId = setInterval(() => {
            const pcChoiceIndex = randomInteger(0, 4);
            pcChoice.value = figures[pcChoiceIndex]
        }, 100);
        setTimeout(() => clearInterval(timerId), 800);
    })

    function findChosenFigure() {
        return figures.filter(figure => figure.name===props.choice)[0]
    }

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
</script>

<template>
  <div class="game-page-wrapper">
    <div class="user-choice-wrapper">
        <p>you picked</p>
        <div class="figure" :style="findChosenFigure().backStyle">
            <div class="image-wrapper">
                <img :src="findChosenFigure().imgSrc" :alt="findChosenFigure().name">
            </div> 
        </div>
    </div>
    <div class="pc-choice-wrapper">
        <p>the house picked</p>
        <div class="house-preview"></div>
        <div class="house-figure" v-if="pcChoice" :style="pcChoice.backStyle">
            <div class="image-wrapper">
                <img :src="pcChoice.imgSrc" :alt="pcChoice.name">
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
  @import '../input.sass'

  .game-page-wrapper
    position: relative
    display: flex
    justify-content: space-between
    width: 700px
    margin: 0 auto
    margin-top: 100px

    & > div
        display: flex
        flex-direction: column
        align-items: center
        width: 300px

        & > p
            width: 100%
            text: 
                align: center
                transform: uppercase
            font:
                size: 26px
                weight: 600
            color: $backLight
            letter-spacing: 2px

        .figure, .house-figure
            @include center
            width: 290px
            height: 290px
            margin-top: 70px
            border-radius: 145px

            .image-wrapper
                @include center
                width: 200px
                height: 200px
                border-radius: 100px
                background-color: $backLight
                box-shadow: inset 0px 6px $boxShadow

                img
                    width: 100px

        .house-preview
            position: absolute
            width: 200px
            height: 200px
            margin-top: 120px
            border-radius: 100px
            background-color: $backDark
            opacity: 0.6
            z-index: -1

        

  
</style>
