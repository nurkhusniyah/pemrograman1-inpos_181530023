function simpan(){
 
    $.ajax({
        type : "POST",
        url: "ajax/ajax_user.php",
        data: {
            aksi : "simpan",
            id_user : $("#id_user").val(),
            nama_user : $("#nama_user").val(),
            email : $("#hf-email").val(),
            lev_user : $("#lev_user").val()
        },
        dataType:"json", 
        beforeSend: function (e){
            if(e && e.overrideMineType){
            e.overrideMineType("application/json;charset=UTF-8");
            }
        },
        success: function (response){
            //respon dari server
            if(response.validasi == "success"){
                window.location = "index.php?page=user";
            }
        },
        error : function(xhr, ajaxoptions, thrownError){
            console.log(xhr.status);
            console.log(thrownError);
        }
    }); 
}
function update(){
    
       $.ajax({
           type : "POST",
           url: "ajax/ajax_user.php",
           data: {
               aksi : "update",
               id_user : $("#id_user").val(),
               nama_user : $("#nama_user").val(),
               email : $("#hf-email").val(),
               lev_user : $("#lev_user").val()
           },
           dataType:"json", 
           beforeSend: function (e){
               if(e && e.overrideMineType){
               e.overrideMineType("application/json;charset=UTF-8");
               }
           },
           success: function (response){
               //respon dari server
               if(response.validasi == "success"){
                   window.location = "index.php?page=user";
               }
           },
           error : function(xhr, ajaxoptions, thrownError){
               console.log(xhr.status);
               console.log(thrownError);
           }
       }); 
   }
function hapus(id_user){
    swal({
        title: "Apakah anda yakin?",
        text:"Anda akan menghapus data tersebut!",
        icon:"warning",
        buttons:true,
        dangerMode:true,
    })
    .then((willDelete) =>{
        if(willDelete) {
            $.ajax({                    //untuk mempercepat eksekusi
                type : "POST",          //tipe data 
                url: "ajax/ajax_user.php",       //untuk memanggil file di folder ajax 
                data: {              //untuk memfilter data / memilih data yang akan di eksekusi 
                    aksi : "hapus",
                    id_user : id_user
                },
                dataType:"json", 
                beforeSend: function (e){
                    if(e && e.overrideMineType){
                    e.overrideMineType("application/json;charset=UTF-8");
                    }
                },
                success: function (response){
                    //respon dari server
                    if(response.validasi == "success"){
                        window.location = "index.php?page=user";
                    }
                },
                error : function(xhr, ajaxoptions, thrownError){
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            }); 
            swal("poof! your imaginary file has been deleted!",{
                icon: "success",
            });
               
        }else{
            swal("Anda batal menghapus data tersebut!");
        }
    });
}

function get_data(id_user){
    $.ajax({
        type : "POST",
        url: "ajax/ajax_user.php",
        data: {
            aksi : "get_data",
            id_user : id_user
           
        },
        dataType:"json", 
        beforeSend: function (e){
            if(e && e.overrideMineType){
            e.overrideMineType("application/json;charset=UTF-8");
            }
        },
        success: function (response){
            //respon dari server
            $("#id_user").val(response .id_user);
            $("#nama_user").val(response.nama_user);
            $("#hf-email").val(response. email);
            $("#lev_user").val(response. lev_user); 
        },
        error : function(xhr, ajaxoptions, thrownError){
            console.log(xhr.status);
            console.log(thrownError);
        }
    }); 
}


$(document).ready(function(){

    $("#btn_tambah").click(function(){
        $(".validasi-id_user").hide();
        $(".validasi-nama_user").hide();
        $(".validasi-email").hide();
        $(".validasi-Level").hide();

        $("#id_user").val("");
        $("#nama_user").val("");
        $("#hf-email").val("");
        $("#lev_user").val("");
        
        $("#btn-simpan").show();
        $("#btn-update").hide();
    });
    $(".item").click (function(){
        $(".validasi-id_user").hide();
        $(".validasi-nama_user").hide();
        $(".validasi-email").hide();
        $(".validasi-Level").hide();
        $("#btn-simpan").hide();
        $("#btn-update").show();
    });
    $("#btn-update").click (function(){
        var id_user =$("#id_user").val();
        var nama_user =$("#nama_user").val();
        var email =$("#hf-email").val();
        var lev_user =$("#lev_user").val();


        if(id_user == ""){
            $(".validasi-id_user").show();
        }else if(nama_user == ""){
            $(".validasi-nama_user").show();
        }else if(email == ""){
            $(".validasi-email").show();
        }else if(lev_user == ""){
            $(".validasi-Level").show();
        }else{
            update();
        }

    });

    $("#btn-simpan").click (function(){
        var id_user =$("#id_user").val();
        var nama_user =$("#nama_user").val();
        var email =$("#hf-email").val();
        var lev_user =$("#lev_user").val();


        if(id_user == ""){
            $(".validasi-id_user").show();
        }else if(nama_user == ""){
            $(".validasi-nama_user").show();
        }else if(email == ""){
            $(".validasi-email").show();
        }else if(lev_user == ""){
            $(".validasi-Level").show();
        }else{
            simpan();
        }
    });
});