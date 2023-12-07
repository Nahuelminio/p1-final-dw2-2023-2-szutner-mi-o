'use strict';

/*
 *  Fernandez Szuter Lautaro
 */
let carritoArray = [];
// let preciosArray = [];
let productos = [
  {
    id: 1,
    nombre: "RAZER HUNTSMAN V3 PRO",
    descripcion: "Teclado óptico analógico para esports",
    precio: 500,
    imagen: "fotos/teclado1.webp",
    alt: "Iphone 12",
    categoría: "Celulares",
  },
  {
    id: 2,
    nombre: "RAZER TENKEYLESS",
    descripcion: "Teclado óptico analógico para esports ",
    precio: 1000,
    imagen: "fotos/teclado2.webp",
    alt: "Macbook air",
    categoría: "Laptop",
  },
  {
    id: 3,
    nombre: "RAZER HUNTSMAN V3 PRO ",
    descripcion: "Teclado óptico analógico para esports 60%",
    precio: 200,
    imagen: "fotos/teclado3.webp",
    alt: "Airpods 3",
    categoría: "Accesorios",
  },
  {
    id: 4,
    nombre: "RAZER HUNTSMAN MINI",
    descripcion: "Teclado para juegos de tamaño 60 % ",
    precio: 1500,
    imagen: "fotos/teclado4.webp",
    alt: "Iphone 15 pro max",
    categoría: "Celulares",
  },
  {
    id: 5,
    nombre: "Macbook pro ",
    descripcion: "Descripción del producto",
    precio: 2000,
    imagen: "fotos/macbookpro.jpg",
    alt: "Macbook pro",
    categoría: "Laptops",
  },
  {
    id: 6,
    nombre: "Apple Watch",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/watch.webp",
    alt: "Apple Watch",
    categoría: "Accesorios",
  },
];

// Creador de etiquetas:
const crearEtiqueta = (nombre = null, atributos = {}, contenido = '') => {
  let etiqueta = document.createElement(nombre);

  for (const atributo in atributos) {
    etiqueta.setAttribute(atributo, atributos[atributo]);
  }

  if (contenido) {
    etiqueta.innerText = contenido;
  }

  return etiqueta;
};

let minicarrito =
  document.getElementById('minicarrito').firstElementChild.lastElementChild;

let acumulado =
  document.getElementById('minicarrito').children[1].lastElementChild;

let contador = 0;
let acumulador = 0;

//Creacion de Ul Main
let lista1 = crearEtiqueta('ul', { id: 'productos' });
document.querySelector('main').appendChild(lista1);

for (let i = 0; i < 6; i++) {
  let li = crearEtiqueta('li', { id: productos[i].id });
  document.getElementById('productos').appendChild(li);

  let imagen = crearEtiqueta('img', {
    src: productos[i].imagen,
    alt: productos[i].alt,
    class: 'imagenesAdd',
  });
  lista1.lastElementChild.appendChild(imagen);

  let div = crearEtiqueta('div', {});
   div.classList.add("div-producto");
  lista1.lastElementChild.append(div);

  let titulo1 = crearEtiqueta('h3', {}, productos[i].nombre);
  li.lastElementChild.append(titulo1);

  let parrafos1 = crearEtiqueta('p', {}, productos[i].descripcion);
  li.lastElementChild.append(parrafos1);

  let parrafos2 = crearEtiqueta("p", {}, `$${ productos[i].precio}`);
  li.lastElementChild.append(parrafos2);

  let parrafos3 = crearEtiqueta("p", {}, `Categoria: ${productos[i].categoría}`);
  li.lastElementChild.append(parrafos3);

  let boton = crearEtiqueta('button', {}, 'Agregar');
  boton.classList.add("button-producto");
  li.lastElementChild.append(boton);

  //Evento Agregar Items
  boton.addEventListener('click', () => {
   
   
    acumulador += productos[i].precio;
    acumulado.innerText = '';
    acumulado.innerText += acumulador;
     contador++;
    minicarrito.innerText = contador;
    carritoArray.push(productos[i].id);
  });

  //Evento Actival modal
  imagen.addEventListener('click', () => {
    modalCreator(
      imagen.src,
      imagen.alt,
      titulo1.innerText,
      parrafos1.innerText,
      parrafos2.innerText,
      parrafos3.innerText,
      boton
    );
  });
}

const modalCreator = (imgSrc, ImgAlt, h3, descripcion, precio, categoria) => {
  let modal = crearEtiqueta('div', { class: 'modal', id: 'modalProducto' });
  document.querySelector('main').appendChild(modal);

  let modalContenedor = crearEtiqueta('div', {});
  modal.appendChild(modalContenedor);

  let modalA = crearEtiqueta(
    'a',
    {
      class: 'cerrar',
      href: 'javascript:void(0)',
    },
    'X'
  );

  modalContenedor.appendChild(modalA);

  let modalImg = crearEtiqueta('img', {
    src: imgSrc,
    alt: ImgAlt,
  });

  modalContenedor.appendChild(modalImg);

  let modalTitulo = crearEtiqueta('h3', {}, h3);
  modalContenedor.appendChild(modalTitulo);

  let modalP1 = crearEtiqueta('p', {}, descripcion);
  modalContenedor.appendChild(modalP1);

  let modalP2 = crearEtiqueta('p', {}, 'precio $ ');
  modalContenedor.appendChild(modalP2);

  let modalSpan = crearEtiqueta('span', {}, precio);
  modalP2.appendChild(modalSpan);

  let categoria1 = crearEtiqueta('div', {}, categoria);
  modalContenedor.appendChild(categoria1);

  let modalButton = crearEtiqueta('button', {}, 'agregar');
  modalContenedor.appendChild(modalButton);

  modalButton.addEventListener('click', () => {
    contador++;
    minicarrito.innerText = contador;
    acumulador += Number(precio);
    console.log(acumulador);
    acumulado.innerText = '';
    acumulado.innerText += acumulador;
  });

  modalA.addEventListener('click', () => {
    modal.remove();
  });
};

document
  .getElementById('minicarrito')
  .lastElementChild.addEventListener('click', () => {
    modalCarrito();
  });

const modalCarrito = () => {
  let divContenedor = crearEtiqueta('div', {
    class: 'modal',
    id: 'modalCarrito',
  });
  document.querySelector('main').appendChild(divContenedor);

  let div1 = crearEtiqueta('div', {});
  divContenedor.appendChild(div1);

  let a = crearEtiqueta(
    'a',
    { class: 'cerrar', href: 'javascript:void(0)' },
    'X'
  );
  div1.appendChild(a);
  a.addEventListener('click', () => {
    divContenedor.remove();
  });

  let p = crearEtiqueta('p', {}, `items: ${contador} - Total ${acumulador}`);
  div1.appendChild(p);

  let hr = crearEtiqueta('hr', {});
  div1.appendChild(hr);

  let lista = crearEtiqueta('ul', {}, '');
  div1.append(lista);

  for (let i = 0; i < carritoArray.length; i++) {
    let items = crearEtiqueta(
      'li',
      {},
      `${
        document.getElementById(carritoArray[i]).lastElementChild
          .firstElementChild.innerHTML
      }`
    );
    lista.append(items);

    let precio = crearEtiqueta(
      'span',
      {},
      `$ ${
        document.getElementById(carritoArray[i]).lastElementChild.children[2]
          .innerText
      }`
    );
    items.append(precio);
    
  }
};
