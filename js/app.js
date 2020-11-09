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
    console.log(avgCN);
    avgCN =parseFloat((avgCN / a),10);
    // console.log(`a = ${a}`);
    // console.log(`avgCN = ${avgCN}`);

    const AMC = document.querySelector('.AMC').value;
    const lambda = document.querySelector('.lambda').value;
    const CNType = document.querySelector('.CNType').value;
    var CN1, CN2, CN3;
    var retain;
    var runoff = new Array();
    if (AMC == 1) {
        CN1 = (avgCN / (2.281 - (0.01281 * avgCN)));
        retain = 254 * ((100/CN1) - 1);
        console.log(`CN1: ${CN1}`);
    } else if (AMC == 2) {
        CN2 = avgCN;
        retain = 254 * ((100/CN2) - 1);
        console.log(`CN2: ${CN2}`);
    } else if(AMC == 3) {
        CN3 = (avgCN / (0.427 + (0.00573 * avgCN)));
        retain = 254 * ((100/CN3) - 1);
        console.log(`CN3: ${CN3}`);
        
    }
    for (let i = 0; i < document.querySelectorAll('.rain-data').length; i++) {
        let rainfall = document.querySelectorAll('.rain-data')[i].value;
        let temp_runoff = 0;
        if (rainfall <= lambda * retain) {
            temp_runoff = 0;
        } else {
            temp_runoff = ((rainfall - lambda * retain)**2)/(rainfall + (1 - lambda) * retain);
        }
        runoff.push(temp_runoff);
    }
    console.log(runoff);
});