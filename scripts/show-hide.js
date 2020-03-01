document.write('<div class="container">\
<button id="showrss" style="transform: scale(1.4); display: block; margin: 0 auto;">Show Menu</button>\
<button id="hiderss" style="transform: scale(1.4); display: block; margin: 0 auto; ">Hide Menu</button>\
</div>')
$("#hiderss").hide();

$("#showrss").click(function(){
       $("#rssc,#hiderss").show();
       $("#showrss").hide();
});

$("#hiderss").click(function(){
    $("#rssc,#hiderss").hide();
    $("#showrss").show();
});

