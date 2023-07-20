const player = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')

const player_position = +window.getComputedStyle(player).right.replace('px', '');

//PLAYER VARIABLES

let PLAYER_X_R = 0
let PLAYER_X_L = 0
let PLAYER_Y_U = '100px'
let PLAYER_Y_B = 0
let PLAYER_ACELLERATION = 0

//POWER UPS

let PLAYER_UP = 'default'
//COGUMELO
//CAPAPRAVOAR
//FLORZINHA

if(PLAYER_UP == 'default') {
    player.style.width = '80px'
    player.setAttribute('src', 'imgs/mariolow.gif')
} 

if(PLAYER_UP == 'COGUMELO') {
    player.style.width = '160px'
    player.setAttribute('src', 'imgs/cogumelo.gif')
}

if(PLAYER_UP == 'CAPAPRAVOAR') {
    player.style.width = '180px'
    player.setAttribute('src', 'imgs/capa.gif')
}

const jump = () => {
    player.classList.add('jump')
    setTimeout(() => {
    player.classList.remove('jump')
    }, 500)
}

document.addEventListener('keydown', (e) => {
    if (e.SPA == 'space') {
        jump()
    }

})

let PLAYER_LOOK = 'R'

document.addEventListener('keydown', (e) => {
    //ANDAR DIREITA
    if (e.key == 'd') {
        PLAYER_X_R = PLAYER_X_R + 10
        let toMargin = (PLAYER_X_R + 10) + 'px'
        PLAYER_ACELLERATION = 10
        player.style.margin = `0px 0 100px ${toMargin}`
        
        player.style.transform = 'rotateY(0deg)'
        
        PLAYER_LOOK = 'R';
        

    }
    //ANDAR ESQUERDA
    if (e.key == 'a') {
        PLAYER_X_R = PLAYER_X_R - 7
        let toMargin = (PLAYER_X_R - 7) + 'px'
        PLAYER_ACELLERATION = 7
        player.style.margin = `0px 0 100px ${toMargin}`
        player.setAttribute('src', 'imgs/mariolow.gif')
        player.style.transform = 'rotateY(180deg)'
        PLAYER_LOOK = 'L';
    }
    else {
        PLAYER_ACELLERATION = 0
    }
    //CORRER
    if (e.shiftKey) {
        if(PLAYER_LOOK == 'R') {
            PLAYER_X_R = PLAYER_X_R + 30
            let toMargin = (PLAYER_X_R + 30) + 'px'
            PLAYER_ACELLERATION = 30
            player.style.margin = `0px 0 100px ${toMargin}`

            player.style.transform = 'rotateY(0deg)'
        }
        else if (PLAYER_LOOK == 'L') {
            PLAYER_X_R = PLAYER_X_R - 30
            let toMargin = (PLAYER_X_R - 30) + 'px'
            PLAYER_ACELLERATION = 30
            player.style.margin = `0px 0 100px ${toMargin}`

            player.style.transform = 'rotateY(180deg)'
        }
    }
    
})

//CENARIO

