// document.getElementById("submitBtn").onclick(thunderEffect());

function validateEmail(){

    //Check if email addresses box are null
    if (val1!= null && val2!=null){
        document.getElementById('submitBtn').disabled = true;
    }

    //Trigger after mouse leaves focus?
    document.getElementById('submitBtn').disabled = false;

    //Check if a wrong email address format is entered

    // If Yes leave button greyed out and throw error

    // Else ungrey button
    


    // Check if email addresses are the same
        val1= $.trim($("input[name='email']").val());
        val2 = $.trim($("input[name='confirm_email']").val());

        if (val1 === val2){
            console.log("same");
            document.getElementById("msg").style.visibility = "visible";
            document.getElementById("msg").innerHTML = "Congratulations you're now on the list";
        }else{
            console.log("different");
            document.getElementById("msg").style.backgroundColor = "red";
            document.getElementById("msg").style.visibility = "visible";
            document.getElementById("msg").innerHTML = "Ooops, the email addresses don't match";
        }
        console.log(val1 +""+ val2);             
}

