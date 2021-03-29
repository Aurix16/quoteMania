// document.getElementById("submitBtn").onclick(thunderEffect());

function thunderEffect(){
    // Check if email addresses are the same
        val1= $.trim($("input[name='email']").val());
        val2 = $.trim($("input[name='confirm_email']").val());

        if (val1 === val2){
            console.log("same");
        }else{
            console.log("different");
        }
        console.log(val1 +""+ val2);
    // $(".ext-1").fadeIn(1500).fadeOut(250, function(){

    //     $(this).css("background-color", "rgba(255, 255, 255, .7)");

    //     document.getElementById("au001").play();

    //     $(this).fadeIn(250).fadeOut(2000, function(){

    //         $(this).css("background-color", "rgba(0, 0, 0, .4)");                    
    //     });                
    // });                 
}

