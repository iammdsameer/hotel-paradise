document.addEventListener('DOMContentLoaded', function() {
    var values = [25,45,105,120,134];     // Values entered manually for now !
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    var width = 40; //bar width
    var X = 30; // first bar position 
    var base = 200;

    for (var i =0; i<values.length; i++) {
        ctx.fillStyle = '#1056AD'; 
        var h = values[i];
        ctx.fillRect(X,canvas.height - h,width,h);
        
        X +=  width+15;
        /* text to display Days */
        ctx.fillStyle = '#4da6ff';
        ctx.fillText('Day '+(i+1),X-50,canvas.height - h -10);
    }
}, false);