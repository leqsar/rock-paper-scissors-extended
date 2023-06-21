<script setup>
    import {figuresAdvanced} from '../figures.js'
    import {figuresSimple} from '../figures.js'

    const props = defineProps({
        mode: String,
        selectionStyles: Object
    })

    function defineFiguresSet(mode) {
        if(mode==='advanced') return figuresAdvanced
        return figuresSimple
    }

</script>

<template>
  <div class="selection-wrapper">
    <img :src="props.selectionStyles.backSrc" alt="Triangle" class="back-overlay">
    <ul>
        <li 
            v-for="figure in defineFiguresSet(props.mode)" 
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
        position: relative
        width: 500px
        height: 500px
        margin: 0 auto
        margin-top: 100px
        box-sizing: border-box

        @media screen and (max-width: 520px)
            width: 90%
            height: auto

        .back-overlay
            position: absolute
            width: 90%
            top: 40px
            z-index: -1

            @media screen and (max-width: 520px)
                width: 100%
        
        ul
            width: 100%
            display: grid
            grid-template-rows: repeat(3, 1fr)
            row-gap: 30px
            
            li:nth-child(1)
                grid-row-start: v-bind('props.selectionStyles.rows.start1')
                grid-row-end: v-bind('props.selectionStyles.rows.end1')
                grid-column-start: 1
                grid-column-end: 3
                justify-self: center
                @media screen and (max-width: 520px)
                    width: 30%
            li:nth-child(2)
                grid-row-start: v-bind('props.selectionStyles.rows.start2')
                grid-row-end: v-bind('props.selectionStyles.rows.end2')
                justify-self: start
            li:nth-child(3)
                grid-row-start: v-bind('props.selectionStyles.rows.start2')
                grid-row-end: v-bind('props.selectionStyles.rows.end2')
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

                @media screen and (max-width: 520px)
                    width: 60%
                    aspect-ratio: 1/1
                    height: auto
                    border-radius: 50%

                    img
                        width: 50%

                &:hover
                    cursor: pointer
                    animation: linear 0.8s infinite pulse

                    @keyframes pulse
                        0%
                            transform: scale(1)
                        50%
                            transform: scale(0.9)
                        100%
                            transform: scale(1)

                div
                    @include center
                    width: 114px
                    height: 114px
                    border-radius: 57px
                    background-color: $backLight
                    box-shadow: inset 0px 5px $boxShadow

                    @media screen and (max-width: 520px)
                        width: 80%
                        aspect-ratio: 1/1
                        height: auto
                        border-radius: 50%

</style>
