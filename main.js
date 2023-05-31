let usuarios = [{ id: 1, nombre: "Jorge", edad:20 }];

localStorage.setItem("usuarios", JSON.stringify(usuarios));

console.log(usuarios)

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {

    e.preventDefault();
    let usuariosGuardados = localStorage.getItem("usuarios");

    let usuarios = JSON.parse(usuariosGuardados);


    let inputs = e.target.children;

    let usuario ={

        id: usuarios.length + 1,
        nombre: inputs[0].value,
        edad: inputs[2].value,
    }; 

   
    usuarios.push(usuario);
    
    localStorage.setItem("usuarios", JSON.stringify(usuarios))

});



