
function aksi_login(){
    var email =$("#email").val();
    var password =$("#password"). val();
    if (email==""){
        alert("Email belum diisi");
    }else if (password==""){
        alert ("Password belum diisi");
    }else if(email=="181530023@gmail.com" && password == "UTSB"){
        alert("Anda Berhasil login ");
        window.location="index.php";
    }else {
        alert("Email dan password yang anda masukkan salah ");
    }
}

$(document).ready(function(){
        $("#btnlogin").click(function(){
            aksi_login();
        })
});