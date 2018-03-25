
var mask_x = 0;
var mask_y = 0;
var w_rad = 225*(11/12);

var currentMask = 1;

function drawMask(){
    ccanvas.width = 600;
    switch(currentMask) {
        case 1:
            mask1();
            break;
        case 2:
            mask2();
            break;
        case 3:
            mask3();
            break;
        case 4:
            mask4();
            break;
        case 5:
            mask5();
            break;
        case 6:
            mask6();
            break;
        case 7:
            mask7();
            break;
        case 8:
            mask8();
            break;
        case 9:
            mask9();
            break;
        case 10:
            mask10();
            break;
        case 11:
            mask11();
            break;
        case 12:
            mask12();
            break;
        case 13:
            mask13();
            break;
        case 14:
            mask14();
            break;
        case 15:
            mask15();
            break;
        case 16:
            mask16();
            break;
        case 17:
            mask17();
            break;
        case 18:
            mask18();
            break;
        case 19:
            mask19();
            break;
        case 20:
            mask20();
            break;
        case 21 :
            maskCustom();
            break;
        case 22 :
            savedMask();
            break;
    }
}

function mask1(){
    //console.log("mas");
}

function mask2(){
    var d = 200;
    var t = 0.70;
    var l = 47;
    //ktx.save();
    ktx.fillStyle = 'green';
    ktx.beginPath();
    ktx.arc(center_x-d+l+mask_x, center_y+mask_y, d, -t,t);
    ktx.arc(center_x+d-l+mask_x, center_y+mask_y, d, Math.PI-t,Math.PI+t);
    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask3(){
    var d = 300;
    var t = 0.57;
    var l = 47;
    //ktx.save();
    ktx.fillStyle = 'green';
    ktx.beginPath();
    ktx.arc(center_x-d+l+mask_x, center_y+mask_y, d, -t,t);
    ktx.arc(center_x+d-l+mask_x, center_y+mask_y, d, Math.PI-t,Math.PI+t);
    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask4(){
    var d = 430;
    var t = 0.53;
    var l = 52;
    //ktx.save();
    ktx.fillStyle = 'green';
    ktx.beginPath();
    ktx.arc(center_x-d+l+mask_x, center_y+mask_y, d, -t,t);
    ktx.arc(center_x+d-l+mask_x, center_y+mask_y, d, Math.PI-t,Math.PI+t);
    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask5(){
    var bw = 80;
    var bh = 60;
    ktx.beginPath();
    ktx.moveTo(center_x+mask_x,         center_y+mask_y-83);
    ktx.lineTo(center_x+bw+mask_x,      center_y+mask_y+bh);
    ktx.lineTo(center_x-bw+mask_x      ,center_y+mask_y+bh);
    ktx.closePath();
    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask6(){
    var bw = 122;
    var bh = 70;
    ktx.beginPath();
    ktx.moveTo(center_x+mask_x,         center_y+mask_y-140);
    ktx.lineTo(center_x+bw+mask_x,      center_y+mask_y+bh);
    ktx.lineTo(center_x-bw+mask_x      ,center_y+mask_y+bh);
    ktx.closePath();
    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function selectMask(m){
    currentMask = m;
    if(m < 21)
        state = NORMAL;
    mask_x = 0;
    mask_y = 0;
}

function mask7(){
    var bw = 148;
    var bh = 89;
    ktx.beginPath();
    ktx.moveTo(center_x+mask_x,         center_y+mask_y-173);
    ktx.lineTo(center_x+bw+mask_x,      center_y+mask_y+bh);
    ktx.lineTo(center_x-bw+mask_x      ,center_y+mask_y+bh);
    ktx.closePath();
    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask8(){
    var bw = 175;
    var bh = 105;
    ktx.beginPath();
    ktx.moveTo(center_x+mask_x,         center_y+mask_y-w_rad+3);
    ktx.lineTo(center_x+bw+mask_x,      center_y+mask_y+bh);
    ktx.lineTo(center_x-bw+mask_x      ,center_y+mask_y+bh);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask9(){
    var h = 140;
    var r = -45;
    var s = 20;
    ktx.beginPath();
    ktx.moveTo(center_x+r+mask_x,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+mask_x+h,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+mask_x      ,center_y+mask_y-r-h-s);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask10(){
    var h = 190;
    var r = -80;
    var s = 20;
    var x = 10;
    ktx.beginPath();
    ktx.moveTo(center_x+r+x+mask_x,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+x+mask_x+h,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+x+mask_x      ,center_y+mask_y-r-h-s);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}



function mask11(){
    var h = 270;
    var r = -125;
    var s = 27;
    var x = 20;
    ktx.beginPath();
    ktx.moveTo(center_x+r+x+mask_x,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+x+mask_x+h-s,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+x+mask_x      ,center_y+mask_y-r-h);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask12(){
    var h = 287;
    var r = -142;
    var s = 0;
    var x = 0;
    ktx.beginPath();
    ktx.moveTo(center_x+r+x+mask_x,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+x+mask_x+h-s,      center_y+mask_y-r);
    ktx.lineTo(center_x+r+x+mask_x      ,center_y+mask_y-r-h);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask13(){
    var h = -80;
    var w = 80;
    var f = -0;
    var a = -75;
    var b = 40;

    var c = 110;
    var r = 30;
    ktx.beginPath();

    ktx.moveTo(center_x+mask_x-w,       center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x-w-f,center_y+mask_y+h+a,center_x+mask_x+w+f,center_y+mask_y+h+a,center_x+mask_x+w,center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x+w+f, center_y+mask_y+h+b, center_x+mask_x-w-f,center_y+mask_y+h+b, center_x+mask_x-w,       center_y+mask_y+h);
    ktx.arc(center_x+mask_x,center_y+c+mask_y,r,0,2*Math.PI);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask14(){
    var h = -75;
    var w = 120;
    var f = -0;
    var a = -110;
    var b = 60;

    var c = 120;
    var r = 30;
    ktx.beginPath();

    ktx.moveTo(center_x+mask_x-w,       center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x-w-f,center_y+mask_y+h+a,center_x+mask_x+w+f,center_y+mask_y+h+a,center_x+mask_x+w,center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x+w+f, center_y+mask_y+h+b, center_x+mask_x-w-f,center_y+mask_y+h+b, center_x+mask_x-w,       center_y+mask_y+h);
    ktx.arc(center_x+mask_x,center_y+c+mask_y,r,0,2*Math.PI);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask15(){
    var h = -70;
    var w = 150;
    var f = -0;
    var a = -140;
    var b = 80;

    var c = 135;
    var r = 30;
    ktx.beginPath();

    ktx.moveTo(center_x+mask_x-w,       center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x-w-f,center_y+mask_y+h+a,center_x+mask_x+w+f,center_y+mask_y+h+a,center_x+mask_x+w,center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x+w+f, center_y+mask_y+h+b, center_x+mask_x-w-f,center_y+mask_y+h+b, center_x+mask_x-w,       center_y+mask_y+h);
    ktx.arc(center_x+mask_x,center_y+c+mask_y,r,0,2*Math.PI);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask16(){
    var h = -56;
    var w = 180;
    var f = -0;
    var a = -170;
    var b = 80;

    var c = 150;
    var r = 30;
    ktx.beginPath();

    ktx.moveTo(center_x+mask_x-w,       center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x-w-f,center_y+mask_y+h+a,center_x+mask_x+w+f,center_y+mask_y+h+a,center_x+mask_x+w,center_y+mask_y+h);
    ktx.bezierCurveTo(center_x+mask_x+w+f, center_y+mask_y+h+b, center_x+mask_x-w-f,center_y+mask_y+h+b, center_x+mask_x-w,       center_y+mask_y+h);
    ktx.arc(center_x+mask_x,center_y+c+mask_y,r,0,2*Math.PI);
    ktx.closePath();

    ktx.fill();
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask17(){
    var w = 112;
    ktx.fillRect(center_x-w/2+mask_x,center_y-w/2+mask_y,w,w)
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask18(){
    var w = 173;
    ktx.fillRect(center_x-w/2+mask_x,center_y-w/2+mask_y,w,w)
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask19(){
    var w = 224;
    ktx.fillRect(center_x-w/2+mask_x,center_y-w/2+mask_y,w,w)
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function mask20(){
    var w = 276;
    ktx.fillRect(center_x-w/2+mask_x,center_y-w/2+mask_y,w,w)
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

function savedMask(){
    if(current_custom < 0) return;

    var p = customs[current_custom][0];
    for(var j = 0; j < p.length; j++){
        var points = p[j];
        ktx.beginPath();
        ktx.moveTo(points[i]+mask_x,points[i+1]+mask_y);
        for(var i = 2; i < points.length; i++){
            var px = points[i++] +mask_x;
            var py = points[i]   +mask_y;
            ktx.lineTo(px,py);
        }
        ktx.closePath();
        ktx.fill();

    }
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

var customs = new Array();
var current_custom = 0;

var polys = [];
function maskCustom(){
    //console.log(polys.length);
    for(var j = 0; j < polys.length; j++){
        var points = polys[j];
        ktx.beginPath();
        ktx.moveTo(points[i]+mask_x,points[i+1]+mask_y);
        for(var i = 2; i < points.length; i++){
            var px = points[i++] +mask_x;
            var py = points[i]   +mask_y;
            ktx.lineTo(px,py);
        }
        ktx.closePath();
        ktx.fill();

    }
    ktx.globalCompositeOperation = "source-in";
    ktx.drawImage(mcanvas, 0,0);
}

var c_selected = false;
function draw_custom(){
    c_selected = !c_selected;
    if(c_selected){
        state = DRAW_CUSTOM;
        polys = [];
        selectMask(21);
        document.getElementById("gamut").style.cursor = "url(css/scis.png) 16 16,default";
    }else{
        state = NORMAL;
        //selectMask(1);
    }
}



var lastPointX = -10000;
var lastPointY = -10000;
var dthresh = 5;
var tmp_point = [];
function drawing(){
    var d = dist(x,y,lastPointX,lastPointY);
    var d2 = dist(x,y,center_x,center_y);
    if(d > dthresh && d2 < w_rad){
        tmp_point.push(x);
        tmp_point.push(y);
        lastPointX = x;
        lastPointY = y;
    }

    ctx.beginPath();
    ctx.moveTo(tmp_point[i]+mask_x,tmp_point[i+1]+mask_y);
    for(var i = 2; i < tmp_point.length; i++){
        var px = tmp_point[i++] +mask_x;
        var py = tmp_point[i]   +mask_y;
        ctx.lineTo(px,py);
    }
    ctx.closePath();
    //ctx.strokeStyle = "#777";
    ctx.stroke();
}

function start_drawing(){
    tmp_point = [];
    state = DRAWING;
    //console.log("start");
    mask_x = 0;
    mask_y = 0;
}

function finished_drawing(){
    state = DRAW_CUSTOM;
    polys.push(tmp_point);
    tmp_point = [];
    //console.log("stop");
}

function save_pat(){
    if(polys.length < 1) return;
    if(customs.length > 8) return;
    //customs.push(polys);
    state = NORMAL;
    //updateIcons();

    var buffer = document.createElement('canvas');
    var b_ctx = buffer.getContext('2d');
    // set its width/height to the required ones
    buffer.width = 30;
    buffer.height = 30;
    //customs = buffer;

    b_ctx.beginPath();
    b_ctx.arc(sx+30/2,sy+30/2,15,0,2*Math.PI);
    b_ctx.closePath();
    b_ctx.strokeStyle = "black";
    b_ctx.stroke();

    for(var j = 0; j < polys.length; j++){
        var points = polys[j];
        b_ctx.beginPath();
        b_ctx.moveTo(points[0]*scl+sx+shf,points[1]*scl+ sy+shf);
        for(var k = 2; k < points.length; k++){
            var px = points[k++]*scl + sx+shf;
            var py = points[k]*scl   + sy+shf;
            b_ctx.lineTo(px,py);
        }
        b_ctx.closePath();
        b_ctx.strokeStyle = "black";
        b_ctx.stroke();

    }
    customs.push([polys,buffer]);
    updateIcons();

    selectMask(22);
    current_custom = customs.length-1;
}

function updateIcons(){


    for(var i = 0; i < 8; i++){
        var cst =  customs[i];
        console.log(customs[i]);
        if(customs[i] != null){
            document.getElementById('mini_icon_'+i).src = cst[1].toDataURL();
            document.getElementById('mini_icon_'+i).classList.remove("hideme");
        }else {
            document.getElementById('mini_icon_'+i).src = "";
            document.getElementById('mini_icon_'+i).classList.add("hideme");
        }
    }
}


function del_pat(){
    //console.log(customs);
    if(customs.length <= 0) return;

    if (current_custom > -1) {
        customs.splice(current_custom, 1);
    }

    selectMask(1);
    currentMask = -1;
    current_custom = -1;
    state = NORMAL;
    updateIcons();
    //console.log(customs);
}

var sx = 0;
var sy = 0;
var sw = 0;
var scl = 0.07;
var shf = -7;

function cmask(x){
    current_custom = x;
    selectMask(22);
}
