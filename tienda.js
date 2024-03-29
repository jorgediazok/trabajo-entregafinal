var selected_index = -1; 

var dataCars = localStorage.getItem("dataCars"); 

dataCars = JSON.parse(dataCars); 

if (dataCars == null)
  
  dataCars = [];

function ListCar() {
  document.getElementById("tblList").innerHTML = "";
  var datos = " ";
  //datos += "<table>" ;
  datos += "<thead>";
  datos += "<tr>";
  datos += "	<th></th>";
  datos += "	<th>Modelo</th>";
  datos += "	<th>Cantidad</th>";
  datos += "	<th>Nombre</th>";
  datos += "	<th>Dirección</th>";
  datos += "	<th>Fecha Nacimiento</th>";
  datos += "</tr>";
  datos += "</thead>";
  datos += "<tbody>";

  for (var i in dataCars) {
    var cli = JSON.parse(dataCars[i]);
    datos += "<tr>";
    datos +=
      '	<td><img src="edit.png" alt="Edit" "class="btnEdit"  onClick="mEditarCar(\'' +
      i +
      "');\"/>";
    datos +=
      ' <img src="delete.png" alt="Delete" "class="btnDelete"  onClick="DeleteCar(\'' +
      i +
      "');\"/> </td>";
    datos += "	<td>" + cli.ID + "</td>";
    datos += "	<td>" + cli.Cantidad + "</td>";
    datos += "	<td>" + cli.Name + "</td>";
    datos += "	<td>" + cli.Phone + "</td>";
    datos += "	<td>" + cli.Email + "</td>";
    datos += "</tr>";
  }
  datos += "</tbody>";

  document.getElementById("tblList").innerHTML = datos;
  document.getElementById("txtOperacion").value = "A";
  document.getElementById("txtID").value = "";
  document.getElementById("txtCantidad").value = "";
  document.getElementById("txtName").value = "";
  document.getElementById("txtPhone").value = "";
  document.getElementById("txtEmail").value = "";
  console.log("entro en el ListCarar");
}

function resetearCampos() {
  document.getElementById("txtOperacion").value = "A";
  document.getElementById("txtID").value = "";
  document.getElementById("txtCantidad").value = "";
  document.getElementById("txtName").value = "";
  document.getElementById("txtPhone").value = "";
  document.getElementById("txtEmail").value = "";
}

function AddCar() {
  var car = JSON.stringify({
    ID: document.getElementById("txtID").value,
    Cantidad: document.getElementById("txtCantidad").value,
    Name: document.getElementById("txtName").value,
    Phone: document.getElementById("txtPhone").value,
    Email: document.getElementById("txtEmail").value
  });
  dataCars.push(car);
  localStorage.setItem("dataCars", JSON.stringify(dataCars));
  alert("Agregada al carro de compras");
  ListCar();
  return true;
}

function EditCar(selected_index) {
  alert(selected_index);
  dataCars[selected_index] = JSON.stringify({
    ID: document.getElementById("txtID").value,
    Cantidad: document.getElementById("txtCantidad").value,
    Name: document.getElementById("txtName").value,
    Phone: document.getElementById("txtPhone").value,
    Email: document.getElementById("txtEmail").value
  }); 
  localStorage.setItem("dataCars", JSON.stringify(dataCars));
  

  ListCar();
  return true;
}

function DeleteCar(selected_index) {
  dataCars.splice(selected_index, 1);
  localStorage.setItem("dataCars", JSON.stringify(dataCars));
  ListCar();
  alert("Eliminada del carrito");
}

function mEditarCar(selected_index) {
  var cli = JSON.parse(dataCars[selected_index]);
  document.getElementById("txtID").value = cli.ID;
  document.getElementById("txtCantidad").value = cli.Cantidad;
  document.getElementById("txtName").value = cli.Name;
  document.getElementById("txtPhone").value = cli.Phone;
  document.getElementById("txtEmail").value = cli.Email;
  document.getElementById("txtOperacion").value = selected_index;
}
function GuardarCar() {
  selected_index = document.getElementById("txtOperacion").value;
  if (selected_index == "A") return AddCar();
  if (selected_index > -1) return EditCar(selected_index);
  else "";
}

function RemoveAllDataCar() {
  for (var i in dataCars) {
    dataCars.splice(i - 1, 1);
  }
}

function finalizarCompra() {
  alert("Gracias por hacer tu pedido!");
}
