import img1 from './assets/images/icon-lizard.svg'
import img2 from './assets/images/icon-paper.svg'
import img3 from './assets/images/icon-scissors.svg'
import img4 from './assets/images/icon-rock.svg'
import img5 from './assets/images/icon-spock.svg'


const figures = [
    {
        imgSrc: img1,
        name: 'lizard',
        backStyle: {
            backgroundColor: 'hsl(261, 72%, 63%)',
            boxShadow: 'inset 0px -6px #5f36a8'
        }
    },
    {
        imgSrc: img2,
        name: 'paper',
        backStyle: {
            backgroundColor: 'hsl(230, 89%, 65%)',
            boxShadow: 'inset 0px -6px #2743c3'
        }
    },
    {
        imgSrc: img3,
        name: 'scissors',
        backStyle: {
            backgroundColor: 'hsl(40, 84%, 53%)',
            boxShadow: 'inset 0px -6px #c56a19'
        }
    },
    {
        imgSrc: img4,
        name: 'rock',
        backStyle: {
            backgroundColor: 'hsl(349, 70%, 56%)',
            boxShadow: 'inset 0px -6px #9b1839'
        }
    },
    {
        imgSrc: img5,
        name: 'spock',
        backStyle: {
            backgroundColor: 'hsl(189, 58%, 57%)',
            boxShadow: 'inset 0px -6px #308fab'
        }
    },
]

export {figures}