<script setup>
    import { ref } from "vue";
    import {figuresAdvanced} from '../figures.js'

    const score = ref(0);
</script>

<template>
  <div class="selection-wrapper">
    <ul>
        <li 
            v-for="figure in figuresAdvanced" 
            @click="$emit('userSelect', figure.name)" 
            class="figure"
            :style="figure.backStyle"
        >
            <div>
                <img :src="figure.imgSrc" :alt="figure.name">
            </div>
        </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
    @import '../input.sass'

    .selection-wrapper
        @include center
        width: 500px
        height: 500px
        margin: 0 auto
        margin-top: 100px
        box-sizing: border-box
        background: 
            image: url('../assets/images/bg-pentagon.svg')
            repeat: no-repeat
            position: center
        
        ul
            width: 100%
            display: grid
            grid-template-rows: repeat(3, 1fr)
            row-gap: 30px
            
            li:nth-child(1)
                grid-row-start: 1
                grid-row-end: 2
                grid-column-start: 1
                grid-column-end: 3
                justify-self: center
            li:nth-child(2)
                grid-row-start: 2
                grid-row-end: 3
                justify-self: start
            li:nth-child(3)
                grid-row-start: 2
                grid-row-end: 3
                justify-self: end
            li:nth-child(4)
                grid-row-start: 3
                grid-row-end: 4
                justify-self: center
            li:nth-child(5)
                grid-row-start: 3
                grid-row-end: 4
                justify-self: center
            .figure
                @include center
                width: 150px
                height: 150px
                border-radius: 75px

                &:hover
                    cursor: pointer

                div
                    @include center
                    width: 114px
                    height: 114px
                    border-radius: 57px
                    background-color: $backLight
                    box-shadow: inset 0px 5px $boxShadow

</style>
