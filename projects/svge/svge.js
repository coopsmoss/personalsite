var regex = new RegExp('^[0-9]*(%|em|ex|px|in|cm|mm|pt|pc)?$'); // regular numerical string with the possibility of spaces or a percent  //(old one ^[0-9% ]*$)

//call this on the id of you SVGE file to have it processed to standared SVG
function processSVGE(SVGE_id){
	//wait for the svg file to load then parse it
	var mySVG = document.getElementById(SVGE_id);
	mySVG.addEventListener("load",function() {
		var svgDoc = mySVG.contentDocument;
		parseXML(svgDoc);
	}, false);
}

//given the root of the xml doc, parse the tree
function parseXML(doc){
	if(doc.nodeName != "var"){ // not a variable tag
		//exclude comments and junk
		if(doc.nodeName != "#comment" && doc.nodeName != "#text" && doc.nodeName != "#document"){
		    var ats = doc.attributes; //get the atttributes
		    if(ats != null){
		        for(var i = 0; i < ats.length; i++){
		            parseAttribute(ats[i]); // parse the attribute!
		        }
		    }
		}
	}else{ // a variable tag
		var name = "";
		var value =  "";
		var ats = doc.attributes;
	    if(ats != null){
	        for(var i = 0; i < ats.length; i++){
	            if( ats[i].name.toLowerCase() == "name")//pull out the name attribute
	            	name = ats[i].value;
	            if( ats[i].name.toLowerCase() == "value")//pull out the value attibute
	            	value = ats[i].value;
	        }
	    }
	    eval(name + " = " + value + ";"); // declare the name as a global varibale with the value
	}

    for(var i = 0; i < doc.childNodes.length; i++){ // parse all the children nodes!
        parseXML(doc.childNodes[i]);
    }
}

//given an attribute, check to see if it is one that we support
function parseAttribute(attribute){
    var name = attribute.name.toLowerCase();
    switch(name){
		case 'accent-height'  : interpretAttribute(attribute); break;
		case 'alphabetic'  : interpretAttribute(attribute); break;
		case 'amplitude'  : interpretAttribute(attribute); break;
		case 'ascent'  : interpretAttribute(attribute); break;
		case 'cap-height'  : interpretAttribute(attribute); break;
		case 'cx' : interpretAttribute(attribute); break;
		case 'cy' : interpretAttribute(attribute); break;
		case 'descent'  : interpretAttribute(attribute); break;
		case 'dx' : interpretAttribute(attribute); break;
		case 'dy' : interpretAttribute(attribute); break;
		case 'exponent'  : interpretAttribute(attribute); break;
		case 'fx' : interpretAttribute(attribute); break;
		case 'fy' : interpretAttribute(attribute); break;
		case 'font-size' : interpretAttribute(attribute); break;
		case 'hanging'  : interpretAttribute(attribute); break;
		case 'height' : interpretAttribute(attribute); break;
		case 'horiz-adv-x'  : interpretAttribute(attribute); break;
		case 'ideographic'  : interpretAttribute(attribute); break;
		case 'intercept'  : interpretAttribute(attribute); break;
		case 'k'  : interpretAttribute(attribute); break;
		case 'k1' : interpretAttribute(attribute); break;
		case 'k2' : interpretAttribute(attribute); break;
		case 'k3' : interpretAttribute(attribute); break;
		case 'k4' : interpretAttribute(attribute); break;
		case 'mathematical'  : interpretAttribute(attribute); break;
		case 'offset'  : interpretAttribute(attribute); break;
		case 'offset'  : interpretAttribute(attribute); break;
		case 'overline-position'  : interpretAttribute(attribute); break;
		case 'overline-thickness'  : interpretAttribute(attribute); break;
		case 'panose-1'     : interpretAttribute(attribute); break;
		case 'pathLength'  : interpretAttribute(attribute); break;
		case 'r'  : interpretAttribute(attribute); break;
		case 'rx'  : interpretAttribute(attribute); break;
		case 'ry'  : interpretAttribute(attribute); break;
		case 'scale'  : interpretAttribute(attribute); break;
		case 'seed'  : interpretAttribute(attribute); break;
		case 'slope'  : interpretAttribute(attribute); break;
		case 'specularConstant'  : interpretAttribute(attribute); break;
		case 'specularExponent'  : interpretAttribute(attribute); break;
		case 'startOffset'  : interpretAttribute(attribute); break;
		case 'stemh'  : interpretAttribute(attribute); break;
		case 'stemv'  : interpretAttribute(attribute); break;
		case 'strikethrough-position'  : interpretAttribute(attribute); break;
		case 'strikethrough-thickness'  : interpretAttribute(attribute); break;
		case 'targetY'  : interpretAttribute(attribute); break;
		case 'textLength'  : interpretAttribute(attribute); break;
		case 'underline-position'  : interpretAttribute(attribute); break;
		case 'underline-thickness'  : interpretAttribute(attribute); break;
		case 'units-per-em' : interpretAttribute(attribute); break;
		case 'v-alphabetic'  : interpretAttribute(attribute); break;
		case 'v-hanging'  : interpretAttribute(attribute); break;
		case 'v-ideographic'  : interpretAttribute(attribute); break;
		case 'v-mathematical'  : interpretAttribute(attribute); break;
		case 'version'  : interpretAttribute(attribute); break;
		case 'vert-adv-y'  : interpretAttribute(attribute); break;
		case 'vert-adv-y'  : interpretAttribute(attribute); break;
		case 'vert-origin-x'  : interpretAttribute(attribute); break;
		case 'vert-origin-x'  : interpretAttribute(attribute); break;
		case 'vert-origin-y'  : interpretAttribute(attribute); break;
		case 'vert-origin-y'  : interpretAttribute(attribute); break;
		case 'width'  : interpretAttribute(attribute); break;
		case 'x'  : interpretAttribute(attribute); break;
		case 'x1'  : interpretAttribute(attribute); break;
		case 'x2'  : interpretAttribute(attribute); break;
		case 'x-height'  : interpretAttribute(attribute); break;
		case 'y'  : interpretAttribute(attribute); break;
		case 'y1'  : interpretAttribute(attribute); break;
		case 'y2'  : interpretAttribute(attribute); break;
		case 'z'  : interpretAttribute(attribute); break;
        default       : break;
    }
}


//given an attribute we support, interpret and replace the value
function interpretAttribute(attribute){
    var value = attribute.value.trim();
    if(value.match(regex)){
        return; //no reason to interpret
    }
    //console.log(value);
    var result = eval(value);
    //console.log(result);
    attribute.value = result;
}
