<script>
let username = document.getElementById("User-name");
let password = document.getElementById("password");
let form = 1;
function validateForm(){
    if(username.value ==""){
        document.getElementById("userP").innerHTML = "User name is Empty";
        form = 0;
    }else if(username.value.length < 3){
        document.getElementById("userP").innerHTML = "Minimum 3 char required"
        form = 0;
    }else{
        document.getElementById("userP").innerHTML = "";
        form = 1;
    }

    if(password.value == ""){
        document.getElementById("passP").innerHTML = "Password is empty";
        form = 0;
    }else{
        document.getElementById("passP").innerHTML = "";
        form = 1;
    }
    if(form == 1){
        return true;
    }else{
        return false;
    }
}

</script>