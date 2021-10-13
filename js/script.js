function registrarUsuario() {
  var nombreUsuario = document.getElementById("nomUsu").value;
  var apellidoUsuario = document.getElementById("apeUsu").value;
  var edadUsuario = document.getElementById("edaUsu").value;
  var correoUsuario = document.getElementById("corUsu").value;
  var fechaUsuario = document.getElementById("fecUsu").value;

  let usuario = {
    nomUsu: nombreUsuario,
    apeUsu: apellidoUsuario,
    edadUsu: edadUsuario,
    corUsu: correoUsuario,
    fecUsu: fechaUsuario,
  };
  debugger;
  console.log(JSON.stringify(usuario));
  let data = new FormData();
  data.append("json", JSON.stringify(usuario));
  fetch("http://localhost:8000/usuarios/", {
    method: "POST", //obligatorio
    mode: "cors", //obligatorio
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      //obligatorio
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: data, //obligatorio
  });
}
