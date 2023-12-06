'use strict';

/*
 *  Fernandez Szuter Lautaro
 */
let carritoArray = [];
// let preciosArray = [];
let productos = [
  {
    id: 1,
    nombre: 'RAZER HUNTSMAN V3 PRO',
    descripcion: 'Teclado óptico analógico para esports',
    precio: 500,
    imagen: 'fotos/Productos/teclado1.webp',
    alt: 'Iphone 12',
    categoría: 'Teclados',
  },
  {
    id: 2,
    nombre: 'RAZER TENKEYLESS',
    descripcion: 'Teclado óptico analógico para esports ',
    precio: 1000,
    imagen: 'fotos/Productos/teclado2.webp',
    alt: 'Macbook air',
    categoría: 'Teclados',
  },
  {
    id: 3,
    nombre: 'RAZER HUNTSMAN V3 PRO ',
    descripcion: 'Teclado óptico analógico para esports 60%',
    precio: 200,
    imagen: 'fotos/Productos/teclado3.webp',
    alt: 'Airpods 3',
    categoría: 'Teclados',
  },
  {
    id: 4,
    nombre: 'RAZER HUNTSMAN MINI',
    descripcion: 'Teclado para juegos de tamaño 60 % ',
    precio: 1500,
    imagen: 'fotos/Productos/teclado4.webp',
    alt: 'Iphone 15 pro max',
    categoría: 'Teclados',
  },
  {
    id: 5,
    nombre: 'Razer Cobra Pro',
    descripcion: 'Descripción del producto',
    precio: 2000,
    imagen: 'fotos/Productos/mouse1.png',
    alt: 'Macbook pro',
    categoría: 'Ratones',
  },
  {
    id: 6,
    nombre: 'Razer Viper 8KHz',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/mouse2.png',
    alt: 'Apple Watch',
    categoría: 'Ratones',
  },

  {
    id: 7,
    nombre: 'Razer Basilisk V3 X HyperSpeed',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/mouse3.png',
    alt: 'Apple Watch',
    categoría: 'Ratones',
  },

  {
    id: 8,
    nombre: 'Apple Watch',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/mouse4.png',
    alt: 'Apple Watch',
    categoría: 'Ratones',
  },

  {
    id: 9,
    nombre: 'Razer Atlas - Black',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/pad1.png',
    alt: 'Apple Watch',
    categoría: 'Alfombrillas',
  },

  {
    id: 10,
    nombre: 'Razer Atlas - White',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/pad2.png',
    alt: 'Apple Watch',
    categoría: 'Alfombrillas',
  },

  {
    id: 11,
    nombre: 'Razer Strider Chroma',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/pad3.png',
    alt: 'Apple Watch',
    categoría: 'Alfombrillas',
  },

  {
    id: 12,
    nombre: 'Razer Goliathus Chroma 3XL - Black',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/pad4.png',
    alt: 'Apple Watch',
    categoría: 'Alfombrillas',
  },

  {
    id: 13,
    nombre: 'RAZER BLACKSHARK V2 PRO',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/auris1.jpg',
    alt: 'Apple Watch',
    categoría: 'Auriculares',
  },

  {
    id: 14,
    nombre: 'RAZER BLACKSHARK V2 HYPERSPEED',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/auris2.webp',
    alt: 'Apple Watch',
    categoría: 'Auriculares',
  },

  {
    id: 15,
    nombre: 'RAZER BLACKSHARK V2 X USB',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/auris3.jpg',
    alt: 'Apple Watch',
    categoría: 'Auriculares',
  },

  {
    id: 16,
    nombre: 'RAZER BLACKSHARK V2 X',
    descripcion: 'Descripción del producto',
    precio: 400,
    imagen: 'fotos/Productos/auris4.jpg',
    alt: 'Apple Watch',
    categoría: 'Auriculares',
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

let creacionUi = function (valor1 = 0, valor2 = 0) {
  for (let i = valor1; i < valor2; i++) {
    let li = crearEtiqueta('li', { id: productos[i].id });
    document.getElementById('productos').appendChild(li);

    let imagen = crearEtiqueta('img', {
      src: productos[i].imagen,
      alt: productos[i].alt,
      class: 'imagenesAdd',
    });
    lista1.lastElementChild.appendChild(imagen);

    let div = crearEtiqueta('div', {});
    div.classList.add('div-producto');
    lista1.lastElementChild.append(div);

    let titulo1 = crearEtiqueta('h3', {}, productos[i].nombre);
    li.lastElementChild.append(titulo1);

    let parrafos1 = crearEtiqueta('p', {}, productos[i].descripcion);
    li.lastElementChild.append(parrafos1);

    let parrafos2 = crearEtiqueta('p', {}, `$${productos[i].precio}`);
    li.lastElementChild.append(parrafos2);

    let parrafos3 = crearEtiqueta(
      'p',
      {},
      `Categoria: ${productos[i].categoría}`
    );
    li.lastElementChild.append(parrafos3);

    let boton = crearEtiqueta('button', {}, 'Agregar');
    boton.classList.add('button-producto');
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
};

creacionUi(0, 16);

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

document.getElementById('teclados').addEventListener('click', () => {
  eliminarElementos();
  creacionUi(0, 4);
});

document.getElementById('ratones').addEventListener('click', () => {
  eliminarElementos();
  creacionUi(4, 8);
});

document.getElementById('alfombrillas').addEventListener('click', () => {
  eliminarElementos();
  creacionUi(8, 12);
});

document.getElementById('auriculares').addEventListener('click', () => {
  eliminarElementos();
  creacionUi(12, 16);
});

let eliminarElementos = function () {
  for (let i = 1; i < 17; i++) {
    let elemento = document.getElementById(`${i}`);
    if (elemento) {
      elemento.remove();
      console.log(`${i} eliminado`);
    }
  }
};
