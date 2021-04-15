// document.getElementById("submitBtn").onclick(thunderEffect());

function thunderEffect(){
    // Check if email addresses are the same
        val1= $.trim($("input[name='email']").val());
        val2 = $.trim($("input[name='confirm_email']").val());

        if (val1 === val2){
            console.log("same");
            document.getElementById("msg").style.visibility = "visible";
            document.getElementById("msg").innerHTML = "Welcome, You're now on the list";
        }else{
            console.log("different");
            document.getElementById("msg").style.visibility = "visible";
            document.getElementById("msg").innerHTML = "Email Addresses Mismatch, Please check";
        }
        console.log(val1 +""+ val2);             
}

