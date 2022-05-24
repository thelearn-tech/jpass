var letters_upper_is_checked = false;
var letters_lower_is_checked = false;
var include_number_is_checked = false;
var special_char_is_checked = false;

var passLength = 4;

var letters_upper = document.getElementById("letters_upper");
var letter_lower = document.getElementById("letters_lower");
var include_number = document.getElementById("include_number");
var special_char = document.getElementById("special_char");



letters_upper.addEventListener('click', function(){check_checkbox(letters_upper_is_checked, 'letters_upper_is_checked')});
letters_lower.addEventListener('click', function(){check_checkbox(letters_lower_is_checked, 'letters_lower_is_checked')});
include_number.addEventListener('click', function(){check_checkbox(include_number_is_checked, 'include_number_is_checked')});
special_char.addEventListener('click', function(){check_checkbox(special_char_is_checked, 'special_char_is_checked')});



function check_checkbox(checkbox_value, checkbox_name) {
	if (checkbox_value == false) {
		checkbox_value = true;
	} else if (checkbox_value == true) {
		checkbox_value = false;	
	}

    if (checkbox_name == "letters_upper_is_checked") {
        letters_upper_is_checked = checkbox_value;
    } else if (checkbox_name == "letters_lower_is_checked") {
    	letters_lower_is_checked = checkbox_value;
    } else if (checkbox_name == "include_number_is_checked") {
    	include_number_is_checked = checkbox_value;
    } else if (checkbox_name == "special_char_is_checked") {
    	special_char_is_checked = checkbox_value;
    }
	
}

function show_length(length) {

	document.getElementById("length_holder").innerHTML = length;

}


function add_length() {
	if (passLength < 30) { // max 30 
		passLength += 1
		show_length(passLength);
	}
  
}

function subtract_length() {
	if (passLength > 4) {
		passLength -= 1
		show_length(passLength);
	}
}

function generate_pass() {
    var character;
 

    var upC;
    var lowC;
    var num;
    var spcC;

    var both_letter;
    var num_and_spc;

    // if no opion is secleted
    if ((special_char_is_checked == false) && (include_number_is_checked == false) && (letters_upper_is_checked == false) && (letters_lower_is_checked == false)) {
    	alert("atleast select one option")
    } else {

    if (letters_upper_is_checked) {
        upC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    } else if (letters_upper_is_checked == false) {
    	upC = '';

    }

    if (letters_lower_is_checked) {
    	lowC = 'abcdefghijklnmopqrstuvwxyz';

    } else if (letters_lower_is_checked == false) {
    	lowC = '';
    }  

    if (include_number_is_checked) {
    	num = '1234567890';

    } else if (include_number_is_checked == false) {
    	num = '';

    } if (special_char_is_checked) {
    	spcC = '$/%#@&';
       
    } else if (special_char_is_checked == false) {
    	spcC = '';

    }

    both_letter = upC.concat(lowC);
    num_and_spc = num.concat(spcC);
    character = both_letter.concat(num_and_spc);

    character.replace("/\s/g", '');
    
    length = document.getElementById("length_holder").innerHTML;
    
    pass_gen(length, character);

    character = '';
  

    }



}

function pass_gen(length , characters) {
    var result = '';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() *
 charactersLength));
   }
   document.getElementById("passHolder").innerHTML = "pass : " + result;
}
