<script setup>
    import {onMounted, ref, watch} from 'vue'
    import {figuresAdvanced} from '../figures.js'
    import {figuresSimple} from '../figures.js'

    const pcChoice = ref();
    const isGameFinished = ref(false)
    const gameResult=ref()

    const props = defineProps({
        choice: String,
        mode: String,
    })

    const emit = defineEmits(['goBack', 'changeScore'])

    onMounted(() => {
        let currentFigureSet;
        let maxIndex;
        if(props.mode==='advanced') {
            currentFigureSet = figuresAdvanced
            maxIndex=4
        } else {
            currentFigureSet = figuresSimple
            maxIndex=2
        }
        let timerId = setInterval(() => {
            const pcChoiceIndex = randomInteger(0, maxIndex);
            pcChoice.value = currentFigureSet[pcChoiceIndex]
        }, 100);
        setTimeout(() => {
            clearInterval(timerId)
            isGameFinished.value = true
        }, 800);
    })

    watch(isGameFinished, (newStatus) => {
        if(newStatus) {
            setTimeout(() => {
                determineWinner(findChosenFigure(), pcChoice.value)
                emit('changeScore', gameResult.value)
            }, 500)
        }
    })

    function goBack() {
        emit('goBack')
    }

    function determineWinner(userChoice, pcChoice) {
        const userFigure = userChoice.name;
        const pcFigure = pcChoice.name;
        if(userFigure === pcFigure) {
            gameResult.value = 'draw'
        } else if(userChoice.winCondition.indexOf(pcFigure) !== -1) {
            gameResult.value = 'you won'
        } else {
            gameResult.value = 'you lost'
        }
    }

    function findChosenFigure() {
        return figuresAdvanced.filter(figure => figure.name===props.choice)[0]
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
        <div 
            :style="findChosenFigure().backStyle" 
            :class="[{ winner: gameResult==='you won'}, 'figure']"
        >
            <div class="image-wrapper">
                <img :src="findChosenFigure().imgSrc" :alt="findChosenFigure().name">
            </div> 
        </div>
    </div>
    <div class="result-wrapper" v-show="gameResult">
        <p>{{ gameResult }}</p>
        <button @click="goBack">play again</button>
    </div>
    <div class="pc-choice-wrapper">
        <p>the house picked</p>
        <div class="house-preview"></div>
        <div
            v-if="pcChoice" 
            :style="pcChoice.backStyle" 
            :class="[{ winner: gameResult==='you lost'}, 'house-figure']"
        >
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
    justify-content: space-evenly
    width: 900px
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
            position: relative
            width: 290px
            height: 290px
            margin-top: 70px
            border-radius: 145px
            transition: all 0.2s

            .image-wrapper
                @include center
                width: 200px
                height: 200px
                border-radius: 100px
                background-color: $backLight
                box-shadow: inset 0px 6px $boxShadow

                img
                    width: 100px
        .winner

            &::after
                position: absolute
                content: ''
                width: 100%
                height: 100%
                border-radius: 50%
                z-index: -1
                background-color: $boxShadow
                opacity: 0.2
                animation: linear 1.5s infinite pulse

                @keyframes pulse 
                    25%
                        transform: scale(1.3)
                    50%
                        transform: scale(1.5)
                        opacity: 0.1
                    75%
                        transform: scale(1.7)
                    100%
                        transform: scale(1.9)
                        opacity: 0
                

        .house-preview
            position: absolute
            width: 200px
            height: 200px
            margin-top: 120px
            border-radius: 100px
            background-color: $backDark
            opacity: 0.6
            z-index: -1

    .result-wrapper
        display: flex
        flex-direction: column
        gap: 20px
        width: 300px
        margin: 100px 50px

        p
            font: 
                size: 55px
                weight: 700 

        button
            width: 220px
            height: 55px
            color: $darkText
            text-transform: uppercase
            font-size: 20px
            letter-spacing: 2px
            border-radius: 10px
            background-color: $backLight

            &:hover
                cursor: pointer

  
</style>
