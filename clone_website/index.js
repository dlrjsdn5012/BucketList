/*window.onload = function () {

    document.getElementById('XMas').addEventListener('click', function () {
        document.getElementById('case1').style.backgroundColor = ('green')
        document.getElementById('case2').style.backgroundColor = ('rgb(170,40,40)')
        document.getElementById('case3').style.backgroundColor = ('green')
        document.getElementById('footer').style.backgroundColor = ('rgb(170,40,40)')
    });


    document.getElementById('XMas2').addEventListener('click', function () {
        document.getElementById('case1').style.backgroundColor = ('rgb(0, 0, 180)')
        document.getElementById('case2').style.backgroundColor = ('#000088')
        document.getElementById('case3').style.backgroundColor = ('rgb(0, 0, 180)')
        document.getElementById('footer').style.backgroundColor = ('#000088')
    });
}*/

window.onload = function() {
document.querySelector('.slide-btn1').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = 'translate(0vw)'
});

document.querySelector('.slide-btn2').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = 'translate(-100vw)'
});

document.querySelector('.slide-btn3').addEventListener('click', function(){
  document.querySelector('.slide-container').style.transform = 'translate(-200vw)'
});
}