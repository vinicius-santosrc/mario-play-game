
const player = document.querySelector('.player')
const tubo = document.querySelector('.tubo')
const body = document.querySelector('body')
const clouds = document.querySelector('.clouds')
const button = document.querySelector('.initgame')
function startgame() {
        tubo.style.right = '-10%'
        tubo.style.display = 'block'
        tubo.style.animation = 'canosanimation 1s linear infinite'

        //FAZER MARIO PULAR

        const jump = () => {
            player.classList.add('jump')
            setTimeout(() => {
            player.classList.remove('jump')
            }, 500)
        }

        //LOOP GAME
        const loop = setInterval(() => {
            const TUBO_POSITION_X = tubo.offsetLeft;
            const BACKGROUND_X = body.offsetLeft;
            const PLAYER_POSITION = +window.getComputedStyle(player).bottom.replace('px', '');
            const CLOUDS_POSITION = clouds.offsetLeft;
            //console.log(TUBO_POSITION_X)
            //console.log(PLAYER_POSITION)
            cont = 0
            if(TUBO_POSITION_X <= 120 && TUBO_POSITION_X > 0 && PLAYER_POSITION < 80) {
                tubo.style.animation = 'none'
                tubo.style.left = `${TUBO_POSITION_X}px`
                player.setAttribute('src', 'imgs/game-over.png')

                player.style.animation = 'none';
                player.style.bottom = `${PLAYER_POSITION}px`

                clouds.style.animation = 'none'
                clouds.style.right = `${CLOUDS_POSITION}px`

                body.style.backgroundPosition = `${BACKGROUND_X}px`
                body.style.animation = 'none'

                body.style.background = 'red'
            }
            
        })
        document.addEventListener('keydown', jump)
        document.addEventListener('click', jump)

}

tubo.style.right = '0'
tubo.style.display = 'none'
tubo.style.animation = 'none'

document.addEventListener('keydown', () => {
    startgame()
    document.querySelector('.welcome-message').style.display = 'none'
})

button.addEventListener('click', () => {
    startgame()
    document.querySelector('.welcome-message').style.display = 'none'
})