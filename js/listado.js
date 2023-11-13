const listado = [];//crear array vacio
function edit(e) {
    const id = e.target.id;
    const listado = getItemFromLocalStorage();
    const item = listado.find(item => Number(item.id) === Number(id));
    const nuevoValor = prompt('Nuevo valor', item.texto)
    console.log(item,nuevoValor);
    //updateHtmlById('total', (5 - items.length));
    item.texto = nuevoValor;
    //filter de los arrays
    //setItemIntoLocalStorage(items);

    //actualizar el local con lo que hay + el nuevo actualizado...
    
}


function remove(e) {
    const id = e.target.id;
    const listado = getItemFromLocalStorage();
    const items = listado.filter(item => Number(item.id) !== Number(id));
    /*
    const listadoAux = [];
    for(let item of listado) {
        if(item.id !== id) {
            listadoAux.push(item);
        }
    }
    */
    updateHtmlById('total', (5 - items.length));

    //filter de los arrays
    setItemIntoLocalStorage(items);

    e.target.parentNode.remove();
}

function setItemIntoLocalStorage(items) {
    localStorage.setItem('listado', JSON.stringify(items));
}

function add() {
    //capoturo el valor del input por su id
    const value = getValueById('elemento');

    //solo agregamos si no es vacio
    if (value === '') {
        return;
    }

    //agregamos si la lista aun no tiene 5 elementos
    if (listado.length < 5) {
        const id = Math.random();//0 > 1
        const item = {
            id: id,
            texto: value
        };

        listado.push(item);
        updateHtmlById('total', (5 - listado.length))

        //actualizo el tag ul con el valor, recorriendo la lista 
        addToList('listado', item);
    }

    //limpio el input
    updateValueById('elemento', '');

    //pongo el foco en el input
    setFocusById('elemento');

    //guarda en el localStorage el listado
    guardarEnLocalStorage(JSON.stringify(listado));
}

function addToList(id, item) {//f2
    //1 crear un <li>

    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = item.texto;

    const button = document.createElement('button');
    button.textContent = 'X';
    button.className = 'btn btn-danger btn-sm';

    const buttonEdit = document.createElement('button');
    buttonEdit.textContent = 'E';
    buttonEdit.className = 'btn btn-info btn-sm';
    buttonEdit.id = item.id;
    buttonEdit.addEventListener('click', edit);

    button.id = item.id;
    button.addEventListener('click', remove);

    //agrego al li el sapn y button
    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(buttonEdit);

    //al ul le agrego el li
    const ul = getById(id);//el ul
    ul.appendChild(li);
}

function guardarEnLocalStorage(listado) {
    localStorage.setItem('listado', listado);
}

document.getElementById('btnAdd').addEventListener('click', add);
//1 capturo el boton por su id

function dibujarListado() {
    //mirar el localStorage
    const items = getItemFromLocalStorage();

    for (let item of items) {
        addToList('listado', item)
    }

    updateHtmlById('total', (5 - items.length));
}

function getItemFromLocalStorage() {
    let items = localStorage.getItem('listado');// [{"id":0.2429290484590072,"texto":"a"}]
    if (!items) {
        items = [];
    }
    items = JSON.parse(items);// ['','']
    return items;
}

dibujarListado();