//1.FUNCIONES PARA LA TABLA CABIN
//se crea la funcion consultar que se le asigno al boton del html
function ConsultarCabin(){
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"GET",
        datatype:"JSON",
        //success es el resultado exitoso del metodo ajax
        success:function(respuesta){
            $("#resultado").empty();
            console.log(respuesta);
            mostrarCabin(respuesta.items)
        } 
    });
}

function mostrarCabin(items){
    //creacion de una variable tipo tabla
    let myTable="<table>";
    let thead = "<thead>";
            thead += "<tr>";
            thead += "<th>" +"ID" + "</th>"
            thead += "<th>" + "BRAND" + "</th>"
            thead += "<th>" + "N° HABITACIONES" + "</th>"
            thead += "<th>" + "CATEGORIA" + "</th>"
            thead += "<th>" + "NOMBRE CABAÑA" + "</th>"
        thead += "</tr>";
    thead+="<thead>";
    myTable+=thead;
        
    //funcion for para recorrer las columnas de la tabla CABIN
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
            myTable+="<td align=center>"+items[i].id+"</td>";
            myTable+="<td align=center>"+items[i].brand+"</td>";
            myTable+="<td align=center>"+items[i].rooms+"</td>";
            myTable+="<td align=center>"+items[i].category_id+"</td>";
            myTable+="<td align=center>"+items[i].name+"</td>";
            myTable+="<td> <button onclick='borrarCabin("+items[i].id+")'>Borrar</button>"; //Agregar boton borrar en js
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable); //"resultado" hace referencia al id del <div> creado en el html
}

function guardarCabin(){
    let myData={
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#brand").val("");
            $("#rooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            ConsultarCabin();
            alert("se ha guardado el dato")
        }
    });
}

function editarCabin(){
    let myData={
        id:$("#id").val(),
        brand:$("#brand").val(),
        rooms:$("#rooms").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#brand").val("");
            $("#roooms").val("");
            $("#category_id").val("");
            $("#name").val("");
            ConsultarCabin();
            alert("se ha Actualizado")
        }
    });
}

function borrarCabin(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/cabin/cabin",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultado").empty();
            ConsultarCabin();
            alert("Se ha Eliminado.")
        }
    });
}

//2.FUNCIONES PARA LA TABLA CLIENTE
function ConsultarClient(){
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"GET",
        datatype:"JSON",
        //success es el resultado exitoso del metodo ajax
        success:function(respuesta){
            $("#resultClient").empty();
            console.log(respuesta);
            mostrarClient(respuesta.items)
        } 
    });
}

function mostrarClient(items){
    //creacion de una variable tipo tabla
    let myTable="<table>";
    let thead = "<thead>";
            thead += "<tr>";
            thead += "<th>" +"ID" + "</th>"
            thead += "<th>" + "NOMBRE" + "</th>"
            thead += "<th>" + "EMAIL" + "</th>"
            thead += "<th>" + "EDAD" + "</th>"
        thead += "</tr>";
    thead+="<thead>";
    myTable+=thead;

    //funcion for para recorrer las columnas de la tabla CLIENT
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
            myTable+="<td align=left>"+items[i].id+"</td>";
            myTable+="<td align=center>"+items[i].name+"</td>";
            myTable+="<td align=center>"+items[i].email+"</td>";
            myTable+="<td align=center>"+items[i].age+"</td>";
            myTable+="<td> <button onclick='borrarClient("+items[i].id+")'>Borrar</button>"; //Agregar boton borrar en js
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultClient").append(myTable); //"resultClient" hace referencia al id del <div> creado en el html
}

function guardarClient(){
    let myData={
        id:$("#idC").val(),
        name:$("#nameC").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("#resultClient").empty();
            $("#idC").val("");
            $("#nameC").val("");
            $("#email").val("");
            $("#age").val("");
            ConsultarClient();
            alert("se ha guardado el dato")
        }
    });
}

function editarClient(){
    let myData={
        id:$("#idC").val(),
        name:$("#nameC").val(),
        email:$("#email").val(),
        age:$("#age").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultClient").empty();
            $("#idC").val("");
            $("#nameC").val("");
            $("#email").val("");
            $("#age").val("");
            ConsultarClient();
            alert("se ha Actualizado")
        }
    });
}

function borrarClient(idElemento){
    let myData={
        id:idElemento
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g129b2236c30a40-cabin.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("#resultClient").empty();
            ConsultarClient();
            alert("Se ha Eliminado.")
        }
    });
}
