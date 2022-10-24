const Pizzas = [
    {
        id: 1,
        nombre: "Fugazzeta",
        ingredientes: ["Salsa de tomate", "Queso", "Cebolla"],
        precio: 550,
    },
    {
        id: 2,
        nombre: "Napolitana",
        ingredientes: ["Salsa de tomate", "Queso", "Rodajas de tomate", "Orégano", "Ajo"],
        precio: 500,
    },
    {
        id: 3,
        nombre: "Especial",
        ingredientes: ["Salsa de tomate", "Jamón", "Queso", "Orégano", "Huevo", "Pimientos", "Aceitunas"],
        precio: 500,
    },
    {
        id: 4,
        nombre: "Jamón y queso",
        ingredientes: ["Salsa de tomate", "Orégano", "Jamón", "Queso"],
        precio: 450,
    },
    {
        id: 5,
        nombre: "Cantimpalo",
        ingredientes: ["Salsa de tomate", "Cantimpalo", "Queso", "Orégano", "Aceitunas"],
        precio: 550,
    },
    {
        id: 6,
        nombre: "Rúcula",
        ingredientes: ["Salsa de tomate", "Queso", "Rúcula", "Jamón crudo"],
        precio: 650,
    },
    {
        id: 7,
        nombre: "Panceta",
        ingredientes: ["Queso", "Panceta"],
        precio: 700,
    },
];

/* Definimos las constantes */
const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');
let tasks = [];

//Crear el elemento a renderizar en caso que el ID sea entre 1 y 7
const createTask = task =>
`
    <li class="card">
        <h2>${task.nombre}</h2>
        <img src="./imgs/${task.nombre}.jpg" alt="Foto de pizza de ${task.nombre}">
        <h3>${task.ingredientes}</h3>
        <h3>$${task.precio}</h3>
    </li>
`;
//Crear el elemento a renderizar en caso que el ID no este entre 1 y 7
const wrongId = (pizza) =>
`
    <li class="card red">
        <h2>El Id ${pizza.id} no coincide con ninguna pizza</h2>
    </li>
`;
//Crear el elemento a renderizar en caso que el usuario no escriba un numero
const noNumber = () =>
    `
    <li class="card red">
        <h2>Ingrese un numero por favor</h2>
    </li>
`;

// Funcion que decide si el objeto dado, pertenece a uno de los de la lista o no
const decider = (pizza) =>{
   /*  console.log(pizza); */
    if (pizza == undefined){
        return noNumber ();
    }
    else if (pizza.id < 0 || pizza.id > 7){
        return wrongId (pizza);
    }
    else{
        return createTask (pizza);
    }
};

// Renderizar la o las tareas y corre la funcion que decide a que grupo pertenece el ID
renderTask = TodoList => {
    list.innerHTML = TodoList.map(pizza => decider(pizza)).join('');
};

//Funcion que detecta si el ID no esta entre el 1 y el 7, crea un objeto pizza con ese ID para usarlo en el mensaje
const nuevoObjeto = (n)=>{
    if (Number(n) < 0 || Number(n) > 7){
        return Pizzas.push({id: Number(n) ,nombre:'n',});
    }
    else {
        return;
    }
};


const init = () => {
    form.addEventListener('submit', e =>{
        e.preventDefault();
        const task = input.value;
        input.value = '';
        //Detectamos si el numero que puso el usuario es uno del 1 al 7 y si no lo es creamos un objeto
        nuevoObjeto (task);

        // Filtra que pizza es la que le pasaron el numero de id
        const thisPizza = Pizzas.filter ((Pizza) => Pizza.id == task);
        tasks = [...tasks, thisPizza[0]];
        renderTask(tasks);
    })
}
init();
