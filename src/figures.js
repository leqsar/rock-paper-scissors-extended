import img1 from './assets/images/icon-lizard.svg'
import img2 from './assets/images/icon-paper.svg'
import img3 from './assets/images/icon-scissors.svg'
import img4 from './assets/images/icon-rock.svg'
import img5 from './assets/images/icon-spock.svg'


const figuresAdvanced = [
    {
        imgSrc: img1,
        name: 'lizard',
        backStyle: {
            backgroundColor: 'hsl(261, 72%, 63%)',
            boxShadow: 'inset 0px -6px #5f36a8'
        },
        winCondition: ['paper', 'spock'],
        loseCondition: ['rock', 'scissors']
    },
    {
        imgSrc: img2,
        name: 'paper',
        backStyle: {
            backgroundColor: 'hsl(230, 89%, 65%)',
            boxShadow: 'inset 0px -6px #2743c3'
        },
        winCondition: ['rock', 'spock'],
        loseCondition: ['lizard', 'scissors']
        
    },
    {
        imgSrc: img3,
        name: 'scissors',
        backStyle: {
            backgroundColor: 'hsl(40, 84%, 53%)',
            boxShadow: 'inset 0px -6px #c56a19'
        },
        winCondition: ['paper', 'lizard'],
        loseCondition: ['spock', 'rock']
    },
    {
        imgSrc: img4,
        name: 'rock',
        backStyle: {
            backgroundColor: 'hsl(349, 70%, 56%)',
            boxShadow: 'inset 0px -6px #9b1839'
        },
        winCondition: ['lizard', 'scissors'],
        loseCondition: ['paper', 'spock']
    },
    {
        imgSrc: img5,
        name: 'spock',
        backStyle: {
            backgroundColor: 'hsl(189, 58%, 57%)',
            boxShadow: 'inset 0px -6px #308fab'
        },
        winCondition: ['scissors', 'rock'],
        loseCondition: ['lizard', 'paper']
    },
]

export {figuresAdvanced}