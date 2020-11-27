$(document).ready(function() {
    var max_rain      = 100; //maximum input boxes allowed
    var wrapper         = $(".input_rain_wrap"); //Fields wrapper
    var add_button      = $(".add_rain_button"); //Add button ID
   
    var x = 1; //initlal text box count
	
	
   $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_rain){ //max input box allowed
	
		     //text box increment
            $(wrapper).append('<div><input class="form-control rain-data mb-3" placeholder="day-'+ (x+1) +'" type="number" name="rain[]"><a href="#" class="remove_field"><svg class="rain" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a></div>'); //add input box
            x++; 
	  }
    });
   
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
       
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    })
});
    

$(document).ready(function() {
    var max_cn          = 100; //maximum input boxes allowed
    var wrapper         = $(".input_cn_wrap"); //Fields wrapper
    var add_button      = $(".add_cn_button"); //Add button ID
   
    var x = 1; //initlal text box count
	
	
   $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_cn){ //max input box allowed
	
		     //text box increment
            $(wrapper).append('<div class="row"><div class="col-6"><input class="form-control cn-p mb-3" placeholder="% - '+ (x+1) +'"type="number" name="contribution[]"></div><div class="col-6"><input class="form-control cn-v mb-3" placeholder="CN-'+ (x+1) +'" type="number" name="cn[]"></div><a href="#" class="remove_field"><svg class="cn" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a></div>'); //add input box
            x++; 
	  }
    });
   
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
       
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    })
});


$(document).ready(function() {
    var max_cn          = 4; 
    var wrapper         = $(".input_soil_type_wrap"); 
    var add_button      = $(".add_soil_type_button"); 
    var x               = 1; 
	
	
   $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_cn){ 
            $(wrapper).append('<div class="input_soil_type_wrap"> <div class="seperator"></div><a href="#" class="remove_field st_wrap"><svg class="remove_st_svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a><hr><div class="row"><div class="col-9"><label for="soil-type">Soil Type</label><select class="form-control soil-type"><option value="1">A</option><option value="2">B</option><option value="3">C</option><option value="4">D</option></select></div><div class="col-3"><label>Soil Percentage</label><input class="form-control soil-type-p mb-3" placeholder="%" type="number"/></div></div><div class="row"><div class="col-9"><label>Land User / Cover</label><select class="form-control land-use-cover"><option value="0">Cultivated Straight row</option><option value="1">Cultivated Contoured Poor</option><option value="2">Cultivated Contoured Good</option><option value="3">Cultivated Contoured & Terraced Poor</option><option value="4">Cultivated Contoured & Terraced Good</option><option value="5">Cultivated Bunded Poor</option><option value="6">Cultivated Bunded Good</option><option value="7">Cultivated Paddy</option><option value="8">Orchards With understory cover</option><option value="9">Orchards Without understory cover</option><option value="10">Forest Dense</option><option value="11">Forest Open</option><option value="12">Forest Scrub</option><option value="13">Pasture Poor</option><option value="14">Pasture Fair</option><option value="15">Pasture Good</option><option value="16">Wasteland</option><option value="17">Roads(dirt) </option><option value="18">Hard Surface area</option></select></div><div class="col-3"><label>percentage</label><input class="form-control quality-type-p mb-3"placeholder="%" type="number"/></div><button class="add_land_use_button my-3"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 496 496" style="enable-background: new 0 0 496 496" xml:space="preserve" > <g> <path d="M248,0C111.033,0,0,111.033,0,248c0.154,136.903,111.097,247.846,248,248c136.967,0,248-111.033,248-248S384.967,0,248,0 z M248,480C119.87,480,16,376.13,16,248C16.146,119.93,119.93,16.146,248,16c128.13,0,232,103.87,232,232S376.13,480,248,480z" /> <path d="M400,240H256V96c0-4.418-3.582-8-8-8s-8,3.582-8,8v144H96c-4.418,0-8,3.582-8,8s3.582,8,8,8h144v144c0,4.418,3.582,8,8,8 s8-3.582,8-8V256h144c4.418,0,8-3.582,8-8S404.418,240,400,240z" /> </g> </svg> </button></div></div>'); //add input box
            x++; 
        }
    });
   
    $(wrapper).on("click",".remove_field", function(e){ 
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    });
});


$(document).ready(function() {
    var max_cn          = 100; 
    var wrapper         = $(".input_land_use_wrap"); 
    var add_button      = $(".add_land_use_button"); 
    var x               = 1; 
	
	
   $(add_button).click(function(e){
        e.preventDefault();
        if(x < max_cn){ 
            $(wrapper).append('<div class="row" style="position: relative;"><div class="col-9"><select class="form-control land-use-cover"><option value="0">Cultivated Straight row</option><option value="1">Cultivated Contoured Poor</option><option value="2">Cultivated Contoured Good</option><option value="3"> Cultivated Contoured & Terraced Poor</option><option value="4"> Cultivated Contoured & Terraced Good</option><option value="5">Cultivated Bunded Poor</option><option value="6">Cultivated Bunded Good</option><option value="7">Cultivated Paddy</option><option value="8"> Orchards With understory cover</option><option value="9"> Orchards Without understory cover</option><option value="10">Forest Dense</option><option value="11">Forest Open</option><option value="12">Forest Scrub</option><option value="13">Pasture Poor</option><option value="14">Pasture Fair</option><option value="15">Pasture Good</option><option value="16">Wasteland</option><option value="17">Roads(dirt)</option><option value="18">Hard Surface area</option> </select></div><div class="col-3"> <input class="form-control quality-type-p mb-3" placeholder="%" type="number" /></div> <a href="#" class="remove_field"><svg class="remove_land_use_svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><path d="M275.676,256l111.169-111.169c5.435-5.433,5.435-14.242,0.001-19.675c-5.435-5.433-14.243-5.433-19.677,0L256.001,236.325L144.832,125.156c-5.433-5.433-14.243-5.433-19.678,0c-5.435,5.433-5.433,14.243,0,19.677l111.169,111.169L125.154,367.169c-5.433,5.433-5.433,14.243,0,19.677c2.717,2.717,6.278,4.075,9.838,4.075c3.561,0,7.122-1.358,9.838-4.075l111.169-111.169l111.169,111.169c2.716,2.717,6.278,4.075,9.838,4.075s7.122-1.358,9.838-4.075c5.433-5.433,5.433-14.243,0-19.677L275.676,256z"/></g><g><path d="M255.999,0.001C114.841,0.001,0,114.841,0,256s114.841,255.999,255.999,255.999S512,397.159,512,256S397.158,0.001,255.999,0.001z M255.999,484.173C130.185,484.173,27.827,381.816,27.827,256c0-125.815,102.357-228.172,228.172-228.172S484.173,130.186,484.173,256C484.173,381.816,381.815,484.173,255.999,484.173z"/></g></svg></a></div>'); //add input box
            x++; 
        }
    });
   
    $(wrapper).on("click",".remove_field", function(e){ 
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    });
});


$(".noob li.nav-item a.nav-link").click(function() {
  $(".noob li.nav-item a.nav-link").removeClass('active');
});

// document.querySelectorAll('.rain-data');
// document.querySelectorAll('.cn-p');
// document.querySelectorAll('.cn-v');


// calculates the weighted curve number
function calculateAvgCN() {
    var avgCN = 0;
    if ($('#home-tab').hasClass('active')) {
        var a = 0, b = 0, c = 0;
        for (let i =0; i < document.querySelectorAll('.cn-p').length; i++) {

            a += parseInt(document.querySelectorAll('.cn-p')[i].value, 10);
            b = parseInt(document.querySelectorAll('.cn-p')[i].value, 10);
            c = parseFloat(document.querySelectorAll('.cn-v')[i].value, 10);
            avgCN += b * c;
        }
        avgCN =parseFloat((avgCN / a),10).toFixed(2);
    } else {
        console.log('soil tab tab');
    }
    return avgCN;
}

$('.calculate').on('click', (e) => {
    e.preventDefault();
    // document.querySelectorAll('.rain-data');
    // document.querySelectorAll('.cn-p');
    // document.querySelectorAll('.cn-v');

    // calculate Curve number 
    var avgCN = calculateAvgCN();
    // console.log(`a = ${a}`);
    console.log(`avgCN = ${avgCN}`);

    const AMC = document.querySelector('.AMC').value;
    const lambda = parseFloat(document.querySelector('.lambda').value, 10);
    const CNType = document.querySelector('.CNType').value;
    const area_unit = document.querySelector('.area-unit').value;
    const area_data = parseFloat((document.querySelector('.area-data').value), 10);
    var CN1, CN2, CN3;
    var retain = 0;
    var runoff = new Array();
    var rainfall = new Array();
    var total_runoff = 0;
    var runoff_volume = 0;
    if (AMC == 1) {
        if (CNType == 1) {
            CN1 = avgCN;
        } else {
            CN1 = (avgCN / (2.281 - (0.01281 * avgCN))).toFixed(2);
        }
        retain = parseFloat((254 * ((100/CN1) - 1)), 10).toFixed(2);
    } else if (AMC == 2) {
        CN2 = avgCN;
        retain = parseFloat((254 * ((100/CN2) - 1)), 10).toFixed(2);
        // retain = 254 * ((100/CN2) - 1);
        // console.log(`CN2: ${CN2}`);
    } else if(AMC == 3) {
        if (CNType == 3) {
            CN3 = avgCN;
        } else {
            CN3 = (avgCN / (0.427 + (0.00573 * avgCN))).toFixed(2);
            // retain = 254 * ((100/CN3) - 1);
        }
        retain = parseFloat((254 * ((100/CN3) - 1)), 10).toFixed(2);
    }
    console.log(retain);
    for (let i = 0; i < document.querySelectorAll('.rain-data').length; i++) {
        let temp_rainfall = parseFloat((document.querySelectorAll('.rain-data')[i].value), 10);
        rainfall.push(temp_rainfall);
        let temp_runoff = 0;
        if (temp_rainfall <= lambda * retain) {
            temp_runoff = 0;
        } else {
            temp_runoff = ((temp_rainfall - (lambda * retain))**2)/(temp_rainfall + (1 - lambda) * retain);
        }
        runoff.push(temp_runoff);
        // console.log(temp_runoff);
    }
    // console.log(`a-d: ${area_data}`);
    // console.log(`a-u: ${area_unit}`);

    for (let i = 0; i < runoff.length; i++) {
        total_runoff = total_runoff + runoff[i];
    }
    console.log(`total_runoff: ${total_runoff}`);
    if (area_unit == 1) {
        runoff_volume = parseFloat((area_data * total_runoff * 10), 10).toFixed(2);
    } else {
        runoff_volume = parseFloat(((area_data * total_runoff) / 1000), 10).toFixed(2);
    }
    console.log(`runoff_volume: ${runoff_volume}`);

    for (let i = 0; i < runoff.length; i++) {
        $("table").append(`<tr><td>${rainfall[i]}</td><td>${runoff[i].toFixed(2)}</td></tr>`);
    }
    $("#result").append(`<div class="dispaly-4 center">Total Runoff Depth: <strong>${total_runoff.toFixed(2)}(in mm)</strong></div>`);
    $("#result").append(`<div class="dispaly-4 center">Total Runoff Volume: <strong>${runoff_volume}(in m^3)</strong></div>`);
    $("form").parent().removeClass('active');
    $("#result").addClass('active show');
    $("table").css('display', 'flex');
});