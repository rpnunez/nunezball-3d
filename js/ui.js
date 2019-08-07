$('body').on('click', '#ball-add', function(e) {
    e.preventDefault();

    // let keycode = (event.keyCode ? event.keyCode : event.which);

    // switch (keycode) {
    //     case 13:
    //         Game.Gamepad.Enter();
    //     break;

    //     default:
    //         console.log('Unknown key pressed or no callback registered for key: ', keycode);
    // }

    Game.addBall();
});