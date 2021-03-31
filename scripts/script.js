// document.getElementById("submitBtn").onclick(thunderEffect());

function thunderEffect(){
    // Check if email addresses are the same
        val1= $.trim($("input[name='email']").val());
        val2 = $.trim($("input[name='confirm_email']").val());

        if (val1 === val2){
            console.log("same");
            document.getElementById("err_msg").style.visibility = "visible";
        }else{
            console.log("different");
        }
        console.log(val1 +""+ val2);             
}

