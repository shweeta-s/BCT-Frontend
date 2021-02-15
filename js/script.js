$(document).ready(function(){
    'use strict'
    
   $('.category-indiv a p').click(function(){
       
       'use strict'
       
       $('.category-indiv a p').parent().removeClass("active");
       
       $(this).parent().addClass("active");
   });
    
});

$(document).ready(function(){
    'use strict'
    
   $('.brand-indiv a p').click(function(){
       
       'use strict'
       
       $('.brand-indiv a p').parent().removeClass("active");
       
       $(this).parent().addClass("active");
   });
    
});

$(document).ready(function(){
    'use strict'
    
   $('.pg-center a ').click(function(){
       
       'use strict'
       
       $('.pg-center a').removeClass("pg-active");
       
       $(this).addClass("pg-active");
   });
    
});


$(document).ready(function() {

    var regex = /^\d*[.]?\d*$/;

    $("#leftinput").on("input", function() {

        var inputVal = $(this).val();


        if (regex.test(inputVal) == 0) {
            alert("Value must be numeric");
            document.getElementById('leftinput').value = '';
        }
    });
});

$(document).ready(function() {

    var regex = /^\d*[.]?\d*$/;

    $("#rightinput").on("input", function() {

        var inputVal = $(this).val();


        if (regex.test(inputVal) == 0) {
            alert("Value must be numeric");
            document.getElementById('rightinput').value = '';
        }
    });
});



function compare() {
    var min1 = parseInt(document.getElementById("leftinput").value);
    var max2 = parseInt(document.getElementById("rightinput").value);



    if (min1 === max2) {
        alert("Value cannot be same");
        document.getElementById('rightinput').value = '';
    }
    if (min1 > max2) {
        alert("Min value cannot be greater than max value");
        document.getElementById('rightinput').value = '';
        document.getElementById('leftinput').value = '';
    }

};
