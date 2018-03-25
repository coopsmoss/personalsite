var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");
var center_x = canvas.width / 2;
var center_y = canvas.height / 2;

var mcanvas = document.getElementById("mask_can");
var btx = mcanvas.getContext("2d");

var ccanvas = document.getElementById("cut_can");
var ktx = ccanvas.getContext("2d");

var center_x = canvas.width / 2;
var center_y = canvas.height / 2;
var circle_radius = 225;
var counterClockwise = false;
//btx.imageSmoothingEnabled = true;

var showMask = true;

var NORMAL = 0;
var DRAGGING_WHEEL = 1;
var DRAW_CUSTOM = 2;
var DRAWING = 3;
var MOVE_MASK = 4;

var spin = 0;
var dragAngle = 0;

var state = NORMAL;

var standard = new Image();
standard.src = "images/standard2.png";
var yurmby = new Image();
yurmby.src = "images/yurmby.png"
var wheel = standard;
var rotation = 0.29701943663312624;

std_titles = ["Y","YG","G","BG","B","BV","V","RV","R","RO","O","YO"];


function drawWheel(){
    btx.clearRect(0, 0, canvas.width, canvas.height);
    btx.save();
    btx.translate(canvas.width/2, canvas.width/2);
    btx.rotate(rotation);
    btx.translate(-canvas.width/2, -canvas.width/2);
    btx.drawImage(wheel, center_x-448/2,center_y-448/2);
    btx.restore();
    //console.log(rotation);

    var h = circle_radius + 15;
    for(var i = 0; i < 12; i++){
        var a = Math.radians(360/12*i) + rotation - 2 * Math.PI / 12 * 3 - 2 * Math.PI / 24;
        var X = Math.cos(a) * h + center_x;
        var Y = Math.sin(a) * h + center_y;
        btx.font = "12px Arial"
        var c = -6;
        if(std_titles[i].length > 1)
            c = -8;
        btx.fillStyle = "black";
        btx.fillText(std_titles[i],X+c,Y+6);
    }
}
var veil = 0.5;
var color_slider = 1;
function drawVeil2(){
    var x = 11;
    //var ci = (255-125)*(color_slider*veil)+125*veil;
    //var cf = (255)*(veil);
    var ci = parseInt(125 - (125)*(color_slider) + (255)*veil*color_slider);
    var cf = parseInt(255*veil);

    var c = ci;
    //var ad = (af-ai)/(x+7);
    var cd = parseInt((cf-ci)/x);
    //console.log(veil, color_slider,ci,cf);

    for(var i = x; i >0; i--){
        a = (1 / Math.max(1,i))/(color_slider);
        //a = 1;
        btx.beginPath();
        var s = 'rgba('+c+','+c+','+c+','+a+')';
        btx.fillStyle = s;
        if(i == 1)
            btx.arc(center_x,center_y,circle_radius/10*i,0,2*Math.PI);
        else
            btx.arc(center_x,center_y,circle_radius/12*i+3,0,2*Math.PI);
        btx.fill();
        c += cd;
        //a += ad;
    }
}


function redraw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    btx.clearRect(0, 0, canvas.width, canvas.height);
    //ktx.clearRect(0, 0, canvas.width, canvas.height);

    drawWheel();
    drawVeil2();
    drawMask();
    drawMain();

}

function drawMain(){
    ctx.drawImage(mcanvas, 0,0);
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    if(currentMask > 1 && showMask){
        ctx.arc(center_x,center_y,circle_radius*0.9,0,2*Math.PI);
        ctx.fill();
    }
    ctx.drawImage(ccanvas,0,0);
}

function update() {
    redraw();
    //console.log(state == DRAW_CUSTOM);
    if(state == DRAGGING_WHEEL){
        var dx = (x - center_x);
        var dy = (y - center_y);
        var oa = dy/dx;

        if(dx == 0){
            oa = 0;
        }
        var r = Math.atan2(dy,-dx);
        rotation = lastR - r;
    }else if((state == DRAW_CUSTOM || state == DRAWING)){
        var e = document.getElementById("scissors");
        e.classList.add("selected_button");
        if(mouseIsDown)
             drawing();
        b_selected = false;
    }else if(state == MOVE_MASK){
        var dx = x - clX;
        var dy = y - clY;
        mask_x = dx +tmx;
        mask_y = dy +tmy;
        console.log(dx,dy,tmx,tmy);
    }else{
        tmx = mask_x;
        tmy = mask_y;
        var e = document.getElementById("scissors");
        e.classList.remove("selected_button");
        document.getElementById("gamut").style.cursor = "default";
        c_selected = false;
    }
}

var mouseIsDown = false;
canvas.onmousedown = function(e){
    //dragOffset.x = e.x - mainLayer.trans.x;
    //dragOffset.y = e.y - mainLayer.trans.y;

    var rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left,
    y = e.clientY - rect.top

    clX = x;
    clY = y;

    if(state == NORMAL && dist(center_x,center_y,x,y) > circle_radius*(11/12)){
        dragWheel(x,y);
        state = DRAGGING_WHEEL;
    }else if(state == NORMAL && currentMask > 1){
        state = MOVE_MASK;
    }
    if(state == DRAW_CUSTOM){
        start_drawing();
        mask_x = 0;
        mask_y = 0;
    }

    mouseIsDown = true;
}
canvas.onmouseup = function(e){
    if(mouseIsDown) mouseClick(e);

    if(state == MOVE_MASK){
        state = NORMAL;
        tmx = mask_x;
        tmy = mask_y;
    }
    if(state == DRAGGING_WHEEL){
        state = NORMAL;
    }else if(state == DRAWING){
        finished_drawing();
        selectMask(21);
        mask_x = 0;
        mask_y = 0;
    }

    mouseIsDown = false;
}

canvas.onmousemove = function(e){
    var rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left,
    y = e.clientY - rect.top

    if(state == DRAGGING_WHEEL)
        update();

    if(!mouseIsDown) return;

    //mainLayer.trans.x = e.x - dragOffset.x;
    //mainLayer.trans.y = e.y - dragOffset.y;
    return false;
}

var clX = 0;
var clY = 0;
var tmx = 0;//mask_x;
var tmy = 0;//mask_y;
function mouseClick(e){
    var rect = canvas.getBoundingClientRect();
    x = e.clientX - rect.left,
    y = e.clientY - rect.top
    //console.log(x,y);
    clX = x;
    clY = y;
    //tmx = mask_x;
    //tmy = mask_y;
}

var lastR = 0;
function dragWheel(x,y){
    var dx = (x - center_x);
    var dy = (y - center_y);
    var oa = dy/dx;

    if(dx == 0){
        oa = 0;
    }

    lastR = Math.atan2(dy,-dx) + rotation;

}

function dist(x1,y1,x2,y2){
    return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2));
}




Math.radians = function(degrees) {
  return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
  return radians * 180 / Math.PI;
};


function update_sliders(){
    var val = document.getElementById("d_slider").value;
    veil = (100.0-val)/100;
    var val2 = document.getElementById("c_slider").value;
    color_slider = (100.0-val2)/100;
    redraw();
    //console.log("sliders");
}

function switch_pattern(x){
    if(x == 0){
        wheel = standard;
    }
    else {
        wheel = yurmby;
    }
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function printme()
{
    var mywindow = window.open();
    var is_chrome = Boolean(mywindow.chrome);
    mywindow.document.write("<br><img src='"+canvas.toDataURL()+"'/>");
    if (is_chrome) {
     setTimeout(function() { // wait until all resources loaded
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10
        mywindow.print(); // change window to winPrint
        mywindow.close(); // change window to winPrint
     }, 250);
   } else {
        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10

        mywindow.print();
        mywindow.close();
   }
}

//update();
setInterval(function(){ update();},1000/20);
//setInterval(function(){ ktx.clearRect(0, 0, 600,600);},1000);

redraw();
update_sliders();

// Get the modal
//var modal = document.getElementById('myModal');

// Get the button that opens the modal
//var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var mb = [];
var mm = [];
mb.push(document.getElementById('myBtn1'));
mm.push(document.getElementById('myModal1'));
mb.push(document.getElementById('myBtn2'));
mm.push(document.getElementById('myModal2'));
mb.push(document.getElementById('myBtn3'));
mm.push(document.getElementById('myModal3'));
mb.push(document.getElementById('myBtn4'));
mm.push(document.getElementById('myModal4'));
mb.push(document.getElementById('myBtn5'));
mm.push(document.getElementById('myModal5'));
var curM = -1;
function helpme(h){
    mm[h].style.display = "block";
    curM = h;
}

function exitM(h){
    mm[h].style.display = "none";
}


//----------------------------mobile

// Set up touch events for mobile, etc
canvas.addEventListener("touchstart", function (e) {
        mousePos = getTouchPos(canvas, e);
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousedown", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchend", function (e) {
  var mouseEvent = new MouseEvent("mouseup", {});
  canvas.dispatchEvent(mouseEvent);
}, false);
canvas.addEventListener("touchmove", function (e) {
  var touch = e.touches[0];
  var mouseEvent = new MouseEvent("mousemove", {
    clientX: touch.clientX,
    clientY: touch.clientY
  });
  canvas.dispatchEvent(mouseEvent);
}, false);

// Get the position of a touch relative to the canvas
function getTouchPos(canvasDom, touchEvent) {
  var rect = canvasDom.getBoundingClientRect();
  return {
    x: touchEvent.touches[0].clientX - rect.left,
    y: touchEvent.touches[0].clientY - rect.top
  };
}

// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target == canvas) {
    e.preventDefault();
  }
}, false);
