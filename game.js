const player = document.querySelector('.mario')
const tubo = document.querySelector('.tubo')
const player_position = +window.getComputedStyle(player).right.replace('px', '');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BUTTON PLAY 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let title = document.querySelector('.title')
let window_game = document.querySelector('.window-game')
let btn = document.querySelector('.title button.playbutton')
btn.addEventListener('click', () => {

    //SUMIR BOTAO PLAY
    var start = new Audio('msc/coin.mp3');
    start.play();
    btn.style.display = 'none'
    title.style.background = `url('')`
    window_game.classList.add('animate_start')
    var music = new Audio('msc/music.mp3');
    music.play();
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //PLAYER VARIABLES
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let PLAYER_X_R = 0
    let PLAYER_X_L = 0
    let PLAYER_Y_U = 100
    let PLAYER_Y_B = 0
    let PLAYER_ACELLERATION = 0


    const jump = () => {
        player.classList.add('jump')
        setTimeout(() => {
        player.classList.remove('jump')
        }, 400)
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //POWER UPS
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    let PLAYER_UP = 'default'
    //COGUMELO
    //CAPAPRAVOAR

    document.addEventListener('keyup', (e) => { 

        if(PLAYER_UP == 'default') {
            player.style.width = '80px'
            player.setAttribute('src', 'imgs/mariolow.gif')
        } 

        if(PLAYER_UP == 'COGUMELO') {
            player.style.width = '120px'
            player.setAttribute('src', 'imgs/cogumelo.gif')
        }

        if(PLAYER_UP == 'CAPAPRAVOAR') {
            player.style.width = '135px'
            player.setAttribute('src', 'imgs/capa.gif')
        }
    })

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //VARIABLES MOVIMENTO
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.addEventListener('keyup', (e) => { 
        
        var press = e.which || e.keyCode || 0;
        //PULAR
        if(press == 32)
        {
            jump()
        }
        if(press == 32 && PLAYER_ACELLERATION > 0)
        {
            jump()
            PLAYER_X_R = PLAYER_X_R + 20
        }
    });

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
            player.style.margin = `0px 0 ${PLAYER_Y_U}px ${toMargin}`

            player.style.transform = 'rotateY(180deg)'
            PLAYER_LOOK = 'L';
            
        }
        else {
            PLAYER_ACELLERATION = 0
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //CENARIO
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        
        //COLISÕES DAS PAREDES

        console.log(PLAYER_X_R)
        //console.log(+window.getComputedStyle(player).bottom.replace('px', ''))
        if(PLAYER_UP == 'default') {
            if (+PLAYER_X_R >= 970 && +PLAYER_X_R <= 1200 && player.className == 'mario jump' == false) {
                PLAYER_X_R = 970
            }
            if (+PLAYER_X_R <= 0) {
                PLAYER_X_R = 0
            }
        }
        else if (PLAYER_UP == 'COGUMELO') {
            if (+PLAYER_X_R >= 940 && +PLAYER_X_R <= 1200 && player.className == 'mario jump' == false) {
                PLAYER_X_R = 940
            }
            if (+PLAYER_X_R <= -22) {
                PLAYER_X_R = -22
            }
        }
        else {
            if (+PLAYER_X_R >= 900 && +PLAYER_X_R <= 1200 && player.className == 'mario jump' == false) {
                PLAYER_X_R = 900
            }
            if (+PLAYER_X_R <= -22) {
                PLAYER_X_R = -22
            }
        }

        //BLOCOS
        if(PLAYER_X_R >= '440' && PLAYER_X_R <= '490' && player.className == 'mario jump' == true) {
            document.querySelector('.block:nth-child(6)').setAttribute('src', 'imgs/bloco-quebrado.png')
        }
        if(PLAYER_X_R >= '491' && PLAYER_X_R <= '545' && player.className == 'mario jump' == true) {
            document.querySelector('.block:nth-child(5)').setAttribute('src', 'imgs/bloco-quebrado.png')
        }
        if(PLAYER_X_R >= '546' && PLAYER_X_R <= '600' && player.className == 'mario jump' == true) {
            document.querySelector('.block:nth-child(4)').setAttribute('src', 'imgs/bloco-quebrado.png')
        }

        

        //CONDITIONAL POWERUPS

        if(PLAYER_X_R >= 690 && PLAYER_X_R < 760) {
            PLAYER_UP = 'COGUMELO'
            document.querySelector('.cogumelo').style.display = 'none'

        }
        if(PLAYER_X_R >= 890 && PLAYER_X_R < 960) {
            PLAYER_UP = 'CAPAPRAVOAR'
            document.querySelector('.pena').style.display = 'none'

        }   

    })
})

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//DESENVOLVIDO POR VINÍCIUS