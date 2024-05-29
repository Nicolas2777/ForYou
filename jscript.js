function resizeButton() {
    alert('Yes button was clicked!');
}

function increaseYesButton() {
    var yesButton = document.getElementById('yesButton');
    var computedStyle = window.getComputedStyle(yesButton);
    var fontSize = parseInt(computedStyle.getPropertyValue('font-size'));
    yesButton.style.fontSize = (fontSize + 2) + 'px';
}