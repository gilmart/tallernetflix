export function pintarPeliculas(){
let productos = [
    { 
    nombre:"Pelicula1", 
    precio: 450000, 
    foto: "img/producto1.jpg.jpg",
    descripcion:"Batimovil de la ultima pelicula de Batman original."   
    },
    
    {
    nombre:"Pelicula2",
    precio: "70min",
    foto: 'img/producto1.jpg.jpg' ,
    descripcion: "Puzzle 3D de la ultima pelicula de Batman original.",
    },

    {
    nombre:"Pelicula3 ",
    precio: '90min',
    foto: 'img/producto1.jpg.jpg',
    descripcion: "POP de la ultima pelicula de Batman original."
    },

    {
    nombre:"Pelicula4 ",
    precio: '170min',
    foto: 'img/producto1.jpg.jpg',
    descripcion: "PenDrive de la ultima pelicula de Batman original."
    },

    {
    nombre:"Pelicula5 ",
    precio: '180min',
    foto: 'img/producto1.jpg.jpg',
    descripcion: "Figura de la ultima pelicula de Batman original."
    },

        
]
/*
productos.forEach(function(producto){
    console.log("lo q quiera")
})
*/
let fila=document.getElementById("fila")

productos.forEach(function(producto){

    
    console.log(producto.foto)

    let columna= document.createElement("div")
    columna.classList.add("col")

    //CREO LA TARJETA
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.src= producto.foto  

    //h4 CON LA CLASE TEXT-CENTER
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    let precio=document.createElement("h6")
    precio.classList.add("text-center")
    precio.textContent=producto.precio

    let descripcion=document.createElement("h5")
    descripcion.classList.add("text-center")
    descripcion.textContent=producto.descripcion

    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(descripcion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})

}