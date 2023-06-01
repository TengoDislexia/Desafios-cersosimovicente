let componentes =[
    {
        id: "1",
        nombre: "motherboard",
        precio:"$300",
        codigo:"25670"
    },
    {
        nombre: "CPU intel core i9",
        id: "2",
        precio:"$500",
        codigo:"25673"
        },
    {
        nombre: "RAM 16 GB",
        id: "3",
        precio:"$200",
        codigo:"25675"
        },
    {
        nombre:"GPU Nvidia 3060ti",
        id: "4",
        precio:"$1200",
        codigo:"25677"
        },
    {
        nombre:"SSD 256 GB",
        id: "5",
        precio:"$150",
        codigo:"25679"
        },
]

const table = document.getElementById("tabla")

const tbody = table.querySelector("tbody")


componentes.forEach(componente => {
 const columna = document.createElement('tr')

    const idComponente = document.createElement('r')
    idComponente.innerHTML = componente.id
    columna.appendChild(idComponente)
    
    const nombreComponente = document.createElement('td')
    nombreComponente.innerHTML = componente.nombre
    columna.appendChild(nombreComponente)

    const precioComponente = document.createElement("td")
    precioComponente.innerHTML = componente.precio
    columna.appendChild(precioComponente)

    const codigoComponente = document.createElement("td")
    codigoComponente.innerHTML = componente.codigo
    columna.appendChild(codigoComponente)

    tbody.appendChild(columna);
});
