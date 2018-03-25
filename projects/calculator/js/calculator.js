//Cooper Hart
//Jul 6th 2017
//For Cocktail Chemistry Lab

//-----------------------------------code below------------------------------------------


//code for unit selection----------------------------------
var fluid_oz = true;
var milli = false;

var units = fluid_oz;

var row_count = 0;

function updateUnits(unit){
    var el;
    ml = document.getElementById('ml');
    oz = document.getElementById('oz');
    oz.classList.remove('unit_selected');
    ml.classList.remove('unit_selected');
    if(unit == fluid_oz){
        units = fluid_oz;
        oz.classList.add('unit_selected');
        document.getElementById('mUnit').innerHTML = "oz";
    }else{
        units = milli;
        ml.classList.add('unit_selected')
        document.getElementById('mUnit').innerHTML = "ml";
    }
    proportions();
}


//code for mixing method:----------------------------------------------

//these are the mixing options
var methods = ["Shaken", "Shaken with Egg Whites", "Built", "Stirred", "Carbonated"];

var method_instructions = [
    //These are the messages to be shown when an option is picked, corresponding exactly to the order of the above options
    "Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds",
    "Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds, strain out ice, then add egg white and dry shake for 10 seconds",
    "Stir directly in your cocktail glass with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds",
    "Stir quickly with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds",
    "Pour ingredients into glass with ice, quick stir to mix ingredients"

]
function changedMix(){
    var method = document.getElementById("mixing_method").value;
    var instruct = document.getElementById("mixing_instructions");
    if(method >= 0)
        instruct.innerHTML = method_instructions[method];
    document.getElementById("mixing_method").classList.remove("wiggle")
    document.getElementById("mixing_method").classList.remove("wiggle")
    if(method == 0){
        document.getElementById("mixing_method").classList.add("wiggle");
    }
    if(method == 1){
        document.getElementById("mixing_method").classList.add("wiggle");
    }
    proportions();
}

var num = 0
function generateSelector(){
    var selecter = document.createElement("select");
    selecter.id = "selecter_"+num;
    selecter.classList.add("dropdown");
    num++;
    var inc = 0;
    var option = document.createElement("option");
    option.text = "Spirits:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < spirits.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = spirits[i][0];
        selecter.appendChild(option);
    }
    option = document.createElement("option");
    option.text = "Sweeteners:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < sweeteners.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = sweeteners[i][0];
        selecter.appendChild(option);
    }
    option = document.createElement("option");
    option.text = "Acids & Juices:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < juices.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = juices[i][0];
        selecter.appendChild(option);
    }
    option = document.createElement("option");
    option.text = "Bitters:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < bitters.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = bitters[i][0];
        selecter.appendChild(option);
    }
    option = document.createElement("option");
    option.text = "Vermouths:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < vermouths.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = vermouths[i][0];
        selecter.appendChild(option);
    }
    option = document.createElement("option");
    option.text = "Liqueurs:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < liqueurs.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = liqueurs[i][0];
        selecter.appendChild(option);
    }
    option = document.createElement("option");
    option.text = "Sodas:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < sodas.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = sodas[i][0];
        selecter.appendChild(option);
    }
    option = document.createElement("option");
    option.text = "Others:";
    option.disabled = true;
    selecter.appendChild(option);
    for (var i = 0; i < others.length; i++) {
        var option = document.createElement("option");
        option.value = inc++;
        option.text = others[i][0];
        selecter.appendChild(option);
    }

    selecter.setAttribute("onchange", 'recalculate();');

    return selecter;
}

function generateInput(){
    var input = document.createElement("input");
    input.id = "input_"+(num-1);

    input.setAttribute("onchange", 'recalculate();');
    input.setAttribute("type", 'tel');
    //type="tel"

    return input;
}


//code for adding ingredients:--------------------------------------------------
function newIng(){

    if(row_count >= max_rows)
        return;

    var table = document.getElementById('ingredients_list');
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount-1);
    row.id = "row_"+num;
    row.innerHTML =
               '<td class="la name">' + '</td>'+
    '<td id="mUnit" class="ra meas">'  +'</td>'+
            '<td class="ra ethanol" id="eth_'+num+'">' + '</td>'+
              '<td class="ra sugar" id="sug_'+num+'">'   +   '   </td>'+
               '<td class="ra acid" id="acid_'+num+'">'+'   </td>'+
                '<td class="remove" >  <button class="remove" onclick="remove('+num+');">x</button>   </td>';



    var children = row.childNodes;
    for(var i = 0; i < children.length; i++){
        //console.log(children[i].className);
        if(children[i].classList.contains('name'))
            children[i].appendChild(generateSelector());
        if(children[i].classList.contains('meas'))
            children[i].appendChild(generateInput());


    }
    $(document).ready(function() { $(".dropdown").select2(); });

    row_count++;

}

function remove(x){
    var e = document.getElementById("row_"+x);
    e.parentElement.removeChild(e);
    row_count--;
}

function lookup(row){
    var val = document.getElementById("selecter_"+row).value;
    var meas = document.getElementById("input_"+row).value;
    if(val == null || meas == null)
        return;
    var eth = document.getElementById("eth_"+row);
    var sug = document.getElementById("sug_"+row);
    var acid = document.getElementById("acid_"+row);

    eth.innerHTML = all_drinks[val][1]*100+"%";
    sug.innerHTML = all_drinks[val][2];
    acid.innerHTML = all_drinks[val][3]+"%";
}

var total_measurment = 0;
var total_eth = 0;
var total_sugar = 0;
var total_acid = 0;

function proportions(){
    var c16 = total_measurment;
    var d16 = total_eth;
    var e16 = total_sugar;
    var f16 = total_acid;

    var mix = document.getElementById("mixing_method").value;
    if(mix == "Mixing Method")
        return;

    var c29 = 0;
    if(mix == 0) c29 = shaken(d16);
    if(mix == 1) c29 = shakenEgg(d16);
    if(mix == 2) c29 = built();
    if(mix == 3) c29 = stirred(d16);
    if(mix == 4) c29 = carb();

    c29 = Math.round(c29 * 10)/10;

    var c29f = c29 / 100.0;
    var c30 = Math.round(10*((c16 * c29f) + c16))/10;
    var c31 = Math.round(10*d16 * c16 / c30)/10;
    var c32 = Math.round(10*e16 * c16 / c30)/10;
    var c33 = Math.round(10*f16 * c16 / c30)/10;

    document.getElementById('r11').innerHTML = c29;
    document.getElementById('r12').innerHTML = c30;

    if(isNaN(c31) || isNaN(c32) || isNaN(c33))
        return;

    document.getElementById('r13').innerHTML = c31;
    document.getElementById('r14').innerHTML = c32;
    document.getElementById('r15').innerHTML = c33;





    console.log(mix);
    var e29 = props[mix][0];
    var e31 = props[mix][6];
    var e32 = props[mix][8];
    var e33 = props[mix][10];

    var f29 = props[mix][1];
    var f31 = props[mix][7];
    var f32 = props[mix][9];
    var f33 = props[mix][11];

    var e30;
    if(units == fluid_oz)
        e30 = props[mix][2];
    else
        e30 = props[mix][4];

    var f30;
    if(units == fluid_oz)
        f30 = props[mix][3];
    else
        f30 = props[mix][5];



    document.getElementById('r31').innerHTML = e29+"%";
    document.getElementById('r32').innerHTML = e30;
    document.getElementById('r33').innerHTML = e31+"%";
    document.getElementById('r34').innerHTML = e32;
    document.getElementById('r35').innerHTML = e33+"%";

    document.getElementById('r41').innerHTML = f29+"%";
    document.getElementById('r42').innerHTML = f30;
    document.getElementById('r43').innerHTML = f31+"%";
    document.getElementById('r44').innerHTML = f32;
    document.getElementById('r45').innerHTML = f33+"%";

    var qd = quality(c29,f29,e29);
    var qv = quality(c30,f30,e30);
    var qe = quality(c31,f31,e31);
    var qs = quality(c32,f32,e32);
    var qa = quality(c33,f33,e33);

    document.getElementById('r21').innerHTML = dil[qd];
    document.getElementById('r22').innerHTML = vol[qv];
    document.getElementById('r23').innerHTML = ethn[qe];
    document.getElementById('r24').innerHTML = sweet[qs];
    document.getElementById('r25').innerHTML = ac[qa];

    document.getElementById('r21').setAttribute('style','background-color:'+fill(qd));
    document.getElementById('r22').setAttribute('style','background-color:'+fill(qv));
    document.getElementById('r23').setAttribute('style','background-color:'+fill(qe));
    document.getElementById('r24').setAttribute('style','background-color:'+fill(qs));
    document.getElementById('r25').setAttribute('style','background-color:'+fill(qa));

    document.getElementById('r11').setAttribute('style','background-color:'+fill(qd));
    document.getElementById('r12').setAttribute('style','background-color:'+fill(qv));
    document.getElementById('r13').setAttribute('style','background-color:'+fill(qe));
    document.getElementById('r14').setAttribute('style','background-color:'+fill(qs));
    document.getElementById('r15').setAttribute('style','background-color:'+fill(qa));

}

function fill(x){
    if(x == 2)
        return "#67a367";
    return "#cb8181";
}

var dil = ["Overdiluted","Underdiluted","Good"];
var vol = ["Too Much Volume","Not Enough Volume","Good"];
var ethn = ["Too Much Ethanol","Not Enough Ethanol","Good"];
var sweet = ["Too Sweet","Not Sweet Enough ","Good"];
var ac = ["Too Acidic","Not Acidic Enough","Good"];

function quality(a,b,c){
    if(a > b)
        return 0;
    if( a < c )
        return 1;
    return 2;
}

function built(){
    return 24.0;
}

function stirred(d16){
    d16 /= 100;
    return (-1.21 * d16 * d16 + 1.246 * d16 + 0.145)*100;
}

function shaken(d16){
    d16 = d16/100;
    return (-1.567*d16*d16+1.742*d16+0.203)*100;
}

function shakenEgg(d16){
    return shaken(d16);
}

function carb(){
    return 0;
}


var max_rows = 15;
//calculate stuff
function recalculate(){
    var e = 0;
    var s = 0;
    var a = 0;

    for(var i = 0; i < max_rows; i++){
        var r = document.getElementById("row_"+i);
        if(r != null){
            lookup(i);
            var val = document.getElementById("selecter_"+i).value;
            var tmp = (all_drinks[val][1]*100) * document.getElementById("input_"+i).value;
            if(!isNaN(tmp))
                e += tmp;
            tmp = (all_drinks[val][2]) * document.getElementById("input_"+i).value;
            if(!isNaN(tmp))
                s += tmp;
            tmp = (all_drinks[val][3]) * document.getElementById("input_"+i).value;
            if(!isNaN(tmp))
                a += tmp;
        }
    }
    var tot_meas = document.getElementById("tot_meas");
    var tot_eth  = document.getElementById("tot_al");
    var tot_sug  = document.getElementById("tot_sug");
    var tot_acid = document.getElementById("tot_acid");

    var m = 0;
    for(var i = 0; i < max_rows; i++){
        var x = document.getElementById("input_"+i);
        if(x != null){
            xx = parseFloat(x.value);
            //console.log(xx);
            if(!isNaN(xx))
                m += xx;
        }
    }
    tot_meas.innerHTML = m;
    total_measurment = m;

    if(e ==0 && m == 0)
        tot_eth.innerHTML = "0.0%";
    else{
        var x = Math.round(e / m*100)/100;
        tot_eth.innerHTML = x+"%";
        total_eth = x;
    }

    if(s ==0 && m == 0)
        tot_sug.innerHTML = "0.0";
    else{
        var x = Math.round(s / m *100)/100;
        tot_sug.innerHTML = x;
        total_sugar = x;
    }

    if(a ==0 && m == 0)
        tot_acid.innerHTML = "0.0%";
    else{
        var x = Math.round(a / m *100)/100;
        tot_acid.innerHTML = x+"%";
        total_acid = x;
    }


    proportions();
}
