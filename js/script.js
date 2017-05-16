function agregar(){
	var tareas = document.getElementById("tarea").value;
	//document.getElementById("tarea").value = "";
	var cont = document.getElementById("contenedor");
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");

	if(tareas == null || tareas.length == 0){
		alert("Error, debe ingresar una tarea!");
		return;
	}

	var check = document.createElement("input");
	check.type = "checkbox";
	check.setAttribute("class", "check");
	
	nuevasTareas.appendChild(check);

	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);


	var basura = document.createElement("span"); // <span></span>
	basura.classList.add("fa", "fa-trash-o"); // <span class="fa fa-tr"></span>
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

	check.addEventListener("click", function(){
		elementoContenedor.classList.toggle("tachado")
	})

	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas)
	})	

	cora.addEventListener("click", function(){
		cora.classList.toggle("red");
	})
}
 






