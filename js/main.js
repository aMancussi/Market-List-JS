let fab = document.getElementById('fab')
let form = document.getElementById('form')
let home = document.getElementById('home')
let btncerrar = document.getElementById('btn-cerrar')
let formulario = document.getElementById('formulario')
let incompleto = document.getElementById('incompleto')
let items = document.getElementById('contenedor-items')
let lista = document.getElementById('lista')
let detalle = document.getElementById('detalle')
let cDetalle = document.getElementById('contenedor-detalle')
let btnatras = document.getElementById('btn-volver')
let seeList = document.getElementById('seeList')


fab.addEventListener('click', () => {
    form.classList.remove('display-none')
    fab.classList.add('display-none')
    lista.classList.add('display-none')
    home.classList.add('display-none')
})

btncerrar.addEventListener('click', () => {
    form.classList.add('display-none')
    fab.classList.remove('display-none')
    home.classList.remove('display-none')
})

btnatras.addEventListener('click', () => {
    form.classList.remove('display-none')
    detalle.classList.add('display-none')
    lista.classList.add('display-none')
})

seeList.addEventListener('click', () => {
    form.classList.add('display-none')
    detalle.classList.add('display-none')
    lista.classList.remove('display-none')
})


const descripcionItem = (titulo, categoria, descripcion) => {
    form.classList.add('display-none');
    fab.classList.add('display-none');
    lista.classList.add('display-none');
    detalle.classList.remove('display-none');

    let item = `<div class="item" id="listi">
        <img src="img/${categoria}" alt="${titulo}">
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
        </div>`;

    cDetalle.innerHTML = item
}

const addItem = (titulo, descripcion, categoria) => {
    let item = `<div class="item">
                <img src="img/${categoria}" alt="${titulo}">
                <h3>${titulo}</h3>
                <button onclick="descripcionItem('${titulo}', '${categoria}', '${descripcion}')">Ver más</button>
                </div>`

    items.innerHTML += item;
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    let titulo = e.target.titulo.value
    let categoria = e.target.categoria.value
    let descripcion = e.target.descripcion.value

    if (titulo && categoria && descripcion) {
        addItem(titulo, descripcion, categoria)
        form.classList.add('display-none')
        fab.classList.remove('display-none')
        lista.classList.remove('display-none')
        formulario.reset()
    }else {
        incompleto.innerHTML = 'Por favor complete todos los campos'
    };
})