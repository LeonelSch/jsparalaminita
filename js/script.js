// const cosmetico1 = new Cosmetico(01, "Labial Watermelon", "R.E.M Beauty", 3000);
// const cosmetico2 = new Cosmetico(02, "Labial Gloss", "R.E.M Beauty", 3500);
// const cosmetico3 = new Cosmetico(03, "Rubor", "KKW Beauty", 6000);
// const cosmetico4 = new Cosmetico(04, "Delineador Negro", "Jefree Star", 6000);
// const cosmetico5 = new Cosmetico(05, "Bronzer Warm Temp", "Rare Beauty", 7500);
// const cosmetico6 = new Cosmetico(06, "Base facial", "Fenty Rihana", 7000);
// const cosmetico7 = new Cosmetico(07, "Pestañas", "Kylie", 4000);
// const cosmetico8 = new Cosmetico(08, "Labial mate", "Kylie", 5500);

const mercancias = [
{numero: 01, producto: "Labial Watermelon", collecion: "R.E.M Beauty", precio: 3000}, 
{numero: 02, producto: "Labial Gloss", collecion: "R.E.M Beauty", precio: 3500}, 
{numero: 03, producto: "Rubor", collecion: "KKW Beauty", precio: 6000},
{numero: 04, producto: "Delineador Negro", collecion: "Jefree Star", precio: 6000},
{numero: 05, producto: "Bronzer Warm Temp", collecion: "Rare Beauty", precio: 7500},
{numero: 06, producto: "Base facial", collecion: "Fenty Rihana", precio: 7000},
{numero: 07, producto: "Pestañas", collecion: "Kylie", precio: 4000},
{numero: 08, producto: "Base facial", collecion: "Kylie", precio: 5500},
];

const carritoDeCompras = [];
var modoOscuro = false;


const cards = document.getElementById("cards");
const estilo = document.getElementById("estilo");

estilo.addEventListener("click", () => {
    if(modoOscuro === false) {
        document.body.classList.remove("claro");
        document.body.classList.add("oscuro");
        modoOscuro = true;
        sessionStorage.setItem('modo', "oscuro")
    } else {
        document.body.classList.remove("oscuro");
        document.body.classList.add("claro");
        modoOscuro = false;
        sessionStorage.setItem('modo', "claro")
    }
})

// ACA LE PASO EL NUMERO POR PARAMETROS Y LO FILTRA PARA GUARDAR EL PRODUCTO. 
const agregarAlCarrito = (numero) => {
    carritoDeCompras.push(mercancias.filter(productos => productos.numero === numero));
    console.log('Carrito de compras: ', carritoDeCompras)
};

mercancias.forEach(cosmetico => {

    cards.innerHTML += `

        <div id="add${cosmetico.numero}">
            <div>
                <input id="fav" type = "checkbox">
                <label> Agregar a favorito! </label>
            </div>

            <img src="#" alt="">

            <h4> PRODUCTO: ${cosmetico.producto} </h4>
            <p> COLECCIÓN: ${cosmetico.coleccion} </p>
            <p> PRECIO: $ ${cosmetico.precio} </p>
            <button class="boton" onclick="agregarAlCarrito(${cosmetico.numero})">Comprar</button>
        
        </div>

    `

})

// ACA IMPRIMIS TODO LO QUE ESTA EN EL CARRITO (no se como en js puro). TENES QUE DESE

carritoDeCompras.forEach(data => {

    carrito.innerHTML += `


    `

})

// const carrito = document.getElementById("carrito");
// let mensaje = carrito.innerHTML = `<div><p>NO HAY PRODUCTOS EN EL CARRITO.</p></div>`

/*const div = document.getElementById("add${cosmetico.numero}");

boton.addEventListener("click", () => {
    const carrito = [];

    if (agregarCarrito(div)){
    mercancia.forEach(cosmetico => {
        carrito.innerHTML += `
            <div id="add${cosmetico.numero}">
                <img src="#" alt="">
        
                <h4> PRODUCTO: ${cosmetico.producto} </h4>
                <p> COLECCIÓN: ${cosmetico.coleccion} </p>
                <p> PRECIO: $ ${cosmetico.precio} </p>
                
            </div>
        
        `
    })
    }

    carrito.push()
})
*/


// var productosCarrito = [];

// mercancia.forEach(cosmetico =>  {

//     cards.innerHTML += `

//         <div id="add${cosmetico.numero}">
        
//             <div>
//                 <input id="fav" type="checkbox>
//                 <label>Agregar favorito!</label>
//             </div>

//             <h4>Producto: ${cosmetico.producto} </h4>
//             <p>Colección: ${cosmetico.coleccion} </p>
//             <p>Precio: ${cosmetico.precio} </p>
//             <button class="boton" onclick="agregarAlCarrito(${cosmetico.numero})">Comprar</button>

//         </div>

//     `

// });

