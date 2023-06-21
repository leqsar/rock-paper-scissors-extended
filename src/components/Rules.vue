<script setup>
    const emit = defineEmits(['hideRules'])

    const props = defineProps({
        mode: String
    })

    function hideRules() {
        emit('hideRules')
    }
</script>

<template>
  <div class="rules-overlay-wrapper">
    <div class="rules-wrapper">
        <header class="rules-header">
            <p>rules</p>
            <img src="../assets/images/icon-close.svg" alt="Cross icon" @click="hideRules">
        </header>
        <img v-if="props.mode === 'advanced'" src="../assets/images/image-rules-bonus.svg" alt="Rules">
        <img v-if="props.mode === 'simple'" src="../assets/images/image-rules.svg" alt="Rules">
    </div>
  </div>
</template>

<style scoped lang="sass">
  @import '../input.sass'

  .rules-overlay-wrapper 
    position: absolute
    top: 0
    width: 100%
    height: 100%
    z-index: 3

    &::after
        position: absolute
        top: 0
        left: 0
        content: ''
        display: block
        width: 100%
        height: 100vh 
        background-color: $backDark
        z-index: -1
        opacity: 0.8

    .rules-wrapper
        display: flex
        flex-direction: column
        align-items: center
        width: 400px
        height: 415px
        margin: 0 auto
        margin-top: 236px
        padding: 40px
        border-radius: 10px
        background-color: $backLight
        z-index: 4

        .rules-header
            display: flex
            justify-content: space-between
            width: 100%

            p
                font:
                    size: 32px
                    weight: 700
                text-transform: uppercase


            img
                width: 20px
                height: 20px
                &:hover
                    cursor: pointer

        & > img
            margin-top: 30px

</style>
