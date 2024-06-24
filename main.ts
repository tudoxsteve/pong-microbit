input.onButtonPressed(Button.A, function () {
    led.unplot(0, paddle_y)
    if (paddle_y > 0) {
        paddle_y += -1
        led.plot(0, paddle_y)
    } else {
        led.plot(0, paddle_y)
    }
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, paddle_y)
    if (paddle_y < 3) {
        paddle_y += 1
        led.plot(0, paddle_y)
    } else {
        led.plot(0, paddle_y)
    }
})
let paddle_y = 0
let ball_x = 2
let ball_y = 3
paddle_y = 2
let ball_x_vel = 1
let ball_y_vel = 1
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # # # # #
    `)
led.plot(ball_x, ball_y)
led.plot(0, paddle_y)
basic.forever(function () {
    led.plot(0, paddle_y)
    led.unplot(ball_x, ball_y)
    if (ball_x > 3) {
        ball_x_vel = -1
    } else if (ball_x < 1) {
        if (ball_x == 0 && ball_y == paddle_y) {
            ball_x_vel = 1
        } else {
            basic.clearScreen()
            basic.showString("X")
        }
    }
    if (ball_y > 2) {
        ball_y_vel = -1
    } else if (ball_y < 1) {
        ball_y_vel = 1
    }
    ball_x += ball_x_vel
    ball_y += ball_y_vel
    led.plot(ball_x, ball_y)
    basic.pause(500)
})
