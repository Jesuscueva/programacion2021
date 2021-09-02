const d = document

let x = 0 , y = 0

export function ball(e, ball, stage){
    const $ball = d.querySelector(ball)
    const $stage = d.querySelector(stage),
            limitBall = $ball.getBoundingClientRect(),
            limitStage = $stage.getBoundingClientRect()
    // console.log(limitBall)
    // console.log(limitStage)
    // console.log(e.keyCode)
    // console.log(e)

    // const move = (direction)=>{}

    switch(e.keyCode){
        //left
        case 37:
            // move("left")
            e.preventDefault()
            if(limitBall.left > limitStage.left)x--
            break
        //rigth
        case 39:
            // move("rigth")
            e.preventDefault()
            if(limitBall.right < limitStage.right)x++
            break
        // up
        case 38:
            // move("up")
            e.preventDefault()
            if(limitBall.top > limitStage.top)y--
            break
        // down
        case 40:
            // move("down")
            e.preventDefault()
            if(limitBall.bottom < limitStage.bottom)y++
            break
        
        default:
            break
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`
}


export function shorcuts(e){
    // console.log(e.type)
    // console.log(e.key)
    // console.log(e.code)
    // console.log(`alt: ${e.altKey}`)
    // console.log(e)
    if(e.key === "a" && e.altKey){
        alert("Colocaste la combinacion de alt + a")
    }
}