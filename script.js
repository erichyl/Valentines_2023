var button = document.getElementById('cursor');
document.addEventListener('mousemove', function(e){
    var mouseX = e.clientX;
    var mouseY = e.clientY;
    var buttonX = button.style.left;
    var buttonY = button.style.top
    document.getElementById('x-value').textContent = mouseX;
    document.getElementById('y-value').textContent = mouseY;
    if (mouseX == button.style.left) {

    }
    button.style.left = x + "px";
    button.style.top = y + "px";
});