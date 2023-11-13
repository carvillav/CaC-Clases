function getUsers() {
    //1 preparar
    const respuesta = fetch('https://reqres.in/api/users?page=2');

    //2 invocar
    respuesta
        .then(response => response.json())
        .then(data => procesarUsers(data))//fulfilled
        .catch(error => dibujarError(error))//rejected

    console.log(respuesta);
}

function procesarUsers(data){
    const users = data.data;
    let rows = '';
    for(let user of users){
        rows +=`
            <tr>
                <th scope="row">${user.id}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td>${user.email}</td>
                <td>
                    <img src ="${user.avatar}">
                </td>
            </tr>
        `
    }

    document.getElementById('usersRows').innerHTML = rows;
}

function dibujarError(error) {
    const alerta = `<div class="alert alert-danger" role="alert">
        ${error.toString()}
    </div>`;
    document.getElementById('msj').innerHTML = alerta;
}

document.getElementById('btnGetUsers').addEventListener('click',getUsers);