// In this lesson you will learn how to create your
// first pixel sprite. 
let player1 = null;

/*************************\
 ***ADD YOUR CODE BELOW***
\*************************/
let player1 = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . 1 1 d d d d . . . . . .
    . . . 1 d d 1 . . d . . . . . .
    . . . 1 d 1 1 1 . d . . . . . .
    . . . . d 1 1 1 1 d . . . . . .
    . . . . d 1 1 1 1 d . . . . . .
    . . . . d 1 1 1 1 d . . . . . .
    . . . . d d 1 1 d d . . . . . .
    . . . . . d d d d . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)

/*************************\
 ***ADD YOUR CODE ABOVE***
\*************************/


//CODE MADE FOR NINJAS - DO NOT DELETE
info.setScore(0)
scene.setBackgroundColor(1)
controller.moveSprite(player1)
let cookie = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . e e e e e . . . . . . .
    . . . e e e e f e e . . . . . .
    . . e e f e e e e f e . . . . .
    . . e e e e f e e e e . . . . .
    . . f e e f e e f e e . . . . .
    . . . e e e e e e e . . . . . .
    . . . . f e e e f . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Food)
cookie.setPosition(50, 10)
cookie.setVelocity(0, 50)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    cookie.setPosition(Math.randomRange(20, 120), 10)
    music.powerUp.play()
    info.changeScoreBy(1)
})
forever(function () {
    if (cookie.y > 130) {
        
        cookie.setPosition(Math.randomRange(20, 120), 10)
    }
})
