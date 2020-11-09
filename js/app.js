$(document).ready(function() {
    var max_rain      = 100; //maximum input boxes allowed
    var wrapper         = $(".input_rain_wrap"); //Fields wrapper
    var add_button      = $(".add_rain_button"); //Add button ID
   
    var x = 1; //initlal text box count
	
	
   $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_rain){ //max input box allowed
	
		     //text box increment
            $(wrapper).append('<div><input class="form-control rain-data mb-3" placeholder="day-'+ (x+1) +'" type="number" name="rain[]"><a href="#" class="remove_field"><img class="rain" src="./assets/cross.svg" alt=""></a></div>'); //add input box
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
            $(wrapper).append('<div class="row"><div class="col-6"><input class="form-control cn-p mb-3" placeholder="% - '+ (x+1) +'"type="number" name="contribution[]"></div><div class="col-6"><input class="form-control cn-v mb-3" placeholder="CN-'+ (x+1) +'" type="number" name="cn[]"></div><a href="#" class="remove_field"><img class="cn" src="./assets/cross.svg" alt=""></a></div>'); //add input box
            x++; 
	  }
    });
   
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
       
		e.preventDefault(); 
		$(this).parent('div').remove(); 
		x--;
    })
});

$(".noob li.nav-item a.nav-link").click(function() {
  $(".noob li.nav-item a.nav-link").removeClass('active');
});

// document.querySelectorAll('.rain-data');
// document.querySelectorAll('.cn-p');
// document.querySelectorAll('.cn-v');

$('.calculate').on('click', (e) => {
    e.preventDefault();
    // document.querySelectorAll('.rain-data');
    // document.querySelectorAll('.cn-p');
    // document.querySelectorAll('.cn-v');

    // calculate Curve number 
    var avgCN = 0, a = 0, b = 0, c = 0;
    for (let i =0; i < document.querySelectorAll('.cn-p').length; i++) {
        a += parseInt(document.querySelectorAll('.cn-p')[i].value, 10);
        b = parseInt(document.querySelectorAll('.cn-p')[i].value, 10);
        c = parseFloat(document.querySelectorAll('.cn-v')[i].value, 10);
        avgCN += b * c;
        // console.log(document.querySelectorAll('.cn-p')[i].value);
    }
    avgCN =parseFloat((avgCN / a),10);
    // console.log(`a = ${a}`);
    // console.log(`avgCN = ${avgCN}`);

    const AMC = document.querySelector('.AMC').value;
    const lambda = parseFloat(document.querySelector('.lambda').value, 10);
    const CNType = document.querySelector('.CNType').value;
    const area_unit = document.querySelector('.area-unit').value;
    const area_data = parseFloat((document.querySelector('.area-data').value), 10);
    var CN1, CN2, CN3;
    var retain = 0;
    var runoff = new Array();
    var total_runoff = 0;
    var runoff_volume = 0;
    if (AMC == 1) {
        if (CNType == 1) {
            CN1 = avgCN;
        } else {
            CN1 = (avgCN / (2.281 - (0.01281 * avgCN)));
        }
        retain = parseFloat((254 * ((100/CN1) - 1)), 10);
    } else if (AMC == 2) {
        CN2 = avgCN;
        retain = parseFloat((254 * ((100/CN2) - 1)), 10);
        // retain = 254 * ((100/CN2) - 1);
        // console.log(`CN2: ${CN2}`);
    } else if(AMC == 3) {
        if (CNType == 3) {
            CN3 = avgCN;
        } else {
            CN3 = (avgCN / (0.427 + (0.00573 * avgCN)));
            // retain = 254 * ((100/CN3) - 1);
        }
        retain = parseFloat((254 * ((100/CN3) - 1)), 10);
    }
    console.log(retain);
    for (let i = 0; i < document.querySelectorAll('.rain-data').length; i++) {
        let rainfall = parseFloat((document.querySelectorAll('.rain-data')[i].value), 10);
        let temp_runoff = 0;
        if (rainfall <= lambda * retain) {
            temp_runoff = 0;
        } else {
            temp_runoff = ((rainfall - (lambda * retain))**2)/(rainfall + (1 - lambda) * retain);
        }
        runoff.push(temp_runoff);
        // console.log(temp_runoff);
    }
    console.log(`a-d: ${area_data}`);
    console.log(`a-u: ${area_unit}`);

    for (let i = 0; i < runoff.length; i++) {
        total_runoff = total_runoff + runoff[i];
    }
    console.log(`total_runoff: ${total_runoff}`);
    if (area_unit == 1) {
        runoff_volume = parseFloat((area_data * total_runoff * 10), 10);
    } else {
        runoff_volume = parseFloat(((area_data * total_runoff) / 1000), 10);
    }
    console.log(`runoff_volume: ${runoff_volume}`);
});