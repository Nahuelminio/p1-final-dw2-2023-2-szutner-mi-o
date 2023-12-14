"use strict";

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
    imagen: "fotos/Productos/teclado1.webp",
    alt: "Iphone 12",
    categoría: "Teclados",
  },
  {
    id: 2,
    nombre: "RAZER TENKEYLESS",
    descripcion: "Teclado óptico analógico para esports ",
    precio: 1000,
    imagen: "fotos/Productos/teclado2.webp",
    alt: "Macbook air",
    categoría: "Teclados",
  },
  {
    id: 3,
    nombre: "RAZER HUNTSMAN V3 PRO ",
    descripcion: "Teclado óptico analógico para esports 60%",
    precio: 200,
    imagen: "fotos/Productos/teclado3.webp",
    alt: "Airpods 3",
    categoría: "Teclados",
  },
  {
    id: 4,
    nombre: "RAZER HUNTSMAN MINI",
    descripcion: "Teclado para juegos de tamaño 60 % ",
    precio: 1500,
    imagen: "fotos/Productos/teclado4.webp",
    alt: "Iphone 15 pro max",
    categoría: "Teclados",
  },
  {
    id: 5,
    nombre: "Razer Cobra Pro",
    descripcion: "Descripción del producto",
    precio: 2000,
    imagen: "fotos/Productos/mouse1.png",
    alt: "Macbook pro",
    categoría: "Ratones",
  },
  {
    id: 6,
    nombre: "Razer Viper 8KHz",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/mouse2.png",
    alt: "Apple Watch",
    categoría: "Ratones",
  },

  {
    id: 7,
    nombre: "Razer Basilisk V3 X HyperSpeed",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/mouse3.png",
    alt: "Apple Watch",
    categoría: "Ratones",
  },

  {
    id: 8,
    nombre: "Apple Watch",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/mouse4.png",
    alt: "Apple Watch",
    categoría: "Ratones",
  },

  {
    id: 9,
    nombre: "Razer Atlas - Black",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/pad1.png",
    alt: "Apple Watch",
    categoría: "Alfombrillas",
  },

  {
    id: 10,
    nombre: "Razer Atlas - White",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/pad2.png",
    alt: "Apple Watch",
    categoría: "Alfombrillas",
  },

  {
    id: 11,
    nombre: "Razer Strider Chroma",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/pad3.png",
    alt: "Apple Watch",
    categoría: "Alfombrillas",
  },

  {
    id: 12,
    nombre: "Razer Goliathus Chroma 3XL - Black",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/pad4.png",
    alt: "Apple Watch",
    categoría: "Alfombrillas",
  },

  {
    id: 13,
    nombre: "RAZER BLACKSHARK V2 PRO",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/auris1.jpg",
    alt: "Apple Watch",
    categoría: "Auriculares",
  },

  {
    id: 14,
    nombre: "RAZER BLACKSHARK V2 HYPERSPEED",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/auris2.webp",
    alt: "Apple Watch",
    categoría: "Auriculares",
  },

  {
    id: 15,
    nombre: "RAZER BLACKSHARK V2 X USB",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/auris3.jpg",
    alt: "Apple Watch",
    categoría: "Auriculares",
  },

  {
    id: 16,
    nombre: "RAZER BLACKSHARK V2 X",
    descripcion: "Descripción del producto",
    precio: 400,
    imagen: "fotos/Productos/auris4.jpg",
    alt: "Apple Watch",
    categoría: "Auriculares",
  },
];

// Creador de etiquetas:
const crearEtiqueta = (nombre = null, atributos = {}, contenido = "") => {
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
  document.getElementById("minicarrito").firstElementChild.lastElementChild;

let acumulado =
  document.getElementById("minicarrito").children[1].lastElementChild;

let contador = 0;
let acumulador = 0;

//Creacion de Ul Main
let lista1 = crearEtiqueta("ul", { id: "productos" });
document.querySelector("main").appendChild(lista1);

let creacionUi = function (valor1 = 0, valor2 = 0) {
  for (let i = valor1; i < valor2; i++) {
    let li = crearEtiqueta("li", { id: productos[i].id });
    document.getElementById("productos").appendChild(li);

    let imagen = crearEtiqueta("img", {
      src: productos[i].imagen,
      alt: productos[i].alt,
      class: "imagenesAdd",
    });
    lista1.lastElementChild.appendChild(imagen);

    let div = crearEtiqueta("div", { class: "div-producto" });

    lista1.lastElementChild.append(div);

    let titulo1 = crearEtiqueta("h3", {}, productos[i].nombre);
    li.lastElementChild.append(titulo1);

    let parrafos1 = crearEtiqueta("p", {}, productos[i].descripcion);
    li.lastElementChild.append(parrafos1);

    let parrafos2 = crearEtiqueta("p", {}, `Precio: ${productos[i].precio}`);
    li.lastElementChild.append(parrafos2);

    let parrafos3 = crearEtiqueta(
      "p",
      {},
      `Categoria: ${productos[i].categoría}`
    );
    li.lastElementChild.append(parrafos3);

    let boton = crearEtiqueta(
      "button",
      { class: "button-producto" },
      "Agregar"
    );
    li.lastElementChild.append(boton);

    //Evento Agregar Items
    boton.addEventListener("click", () => {
      acumulador += productos[i].precio;
      acumulado.innerText = "";
      acumulado.innerText += acumulador;
      contador++;
      minicarrito.innerText = contador;
      carritoArray.push(productos[i].id);
    });

    //Evento Actival modal
    imagen.addEventListener("click", () => {
      modalCreator(
        productos[i].id,
        imagen.src,
        imagen.alt,
        titulo1.innerText,
        parrafos1.innerText,
        productos[i].precio,
        parrafos3.innerText
      );
    });
  }
};

creacionUi(0, 16);

const modalCreator = (
  id,
  imgSrc,
  ImgAlt,
  nombre,
  descripcion,
  precio,
  categoria
) => {
  carritoArray.push(id);

  let modal = crearEtiqueta("div", {
    class: "modal modalProducto",
    id: "modalProducto",
  });
  document.querySelector("main").appendChild(modal);

  let modalContenedor = crearEtiqueta("div", {});
  modal.appendChild(modalContenedor);

  let modalA = crearEtiqueta(
    "a",
    {
      class: "cerrar",
      href: "javascript:void(0)",
    },
    "X"
  );

  modalContenedor.appendChild(modalA);

  let modalImg = crearEtiqueta("img", {
    src: imgSrc,
    alt: ImgAlt,
  });

  modalContenedor.appendChild(modalImg);

  let modalTitulo = crearEtiqueta("h3", {}, nombre);
  modalContenedor.appendChild(modalTitulo);

  let modalP1 = crearEtiqueta("p", {}, descripcion);
  modalContenedor.appendChild(modalP1);

  let modalP2 = crearEtiqueta("p", {}, "Precio: $");
  modalContenedor.appendChild(modalP2);

  let modalSpan = crearEtiqueta("span", {}, precio);
  modalP2.appendChild(modalSpan);

  let categoria1 = crearEtiqueta("p", {}, categoria);
  modalContenedor.appendChild(categoria1);

  let modalButton = crearEtiqueta(
    "button",
    { class: "button-producto" },
    "agregar"
  );
  modalContenedor.appendChild(modalButton);

  modalButton.addEventListener("click", () => {
    acumulador += Number(precio);
    acumulado.innerText = "";
    contador++;
    minicarrito.innerText = contador;
    acumulado.innerText += acumulador;
    modal.remove();
  });

  modalA.addEventListener("click", () => {
    modal.remove();
  });
};

document
  .getElementById("minicarrito")
  .lastElementChild.addEventListener("click", () => {
    modalCarrito();
  });

const modalCarrito = () => {
  let divContenedor = crearEtiqueta("div", {
    class: "modal",
    id: "modalCarrito",
  });
  document.querySelector("main").appendChild(divContenedor);

  let div1 = crearEtiqueta("div", { class: "div-carrito" });
  divContenedor.appendChild(div1);

  let a = crearEtiqueta(
    "a",
    { class: "cerrar", href: "javascript:void(0)" },
    "X"
  );
  div1.appendChild(a);
  a.addEventListener("click", () => {
    divContenedor.remove();
  });

  let lista = crearEtiqueta("ul", { class: "li-carrito" }, "");
  div1.append(lista);

  for (let i = 0; i < carritoArray.length; i++) {
    let productoId = carritoArray[i];
    let producto = productos.find((p) => p.id === productoId);

    let items = crearEtiqueta("li", {});
    lista.append(items);

    let img = crearEtiqueta("img", {
      src: producto.imagen,
      alt: producto.alt,
      class: "carrito-imagen",
    });
    items.appendChild(img);

    let nombre = crearEtiqueta("h3", {}, producto.nombre);
    items.appendChild(nombre);

    let precio = crearEtiqueta("p", {}, `$${producto.precio}`);
    items.appendChild(precio);

    let eliminarProducto = crearEtiqueta(
      "button",
      { class: "button-eliminar" },
      "Eliminar"
    );
    items.appendChild(eliminarProducto);
    eliminarProducto.addEventListener("click", () => {
      // Obtener el índice del producto en el array del carrito
      const index = carritoArray.indexOf(producto.id);

      // Verificar si el producto está en el carrito antes de intentar eliminarlo
      if (index !== -1) {
        // Obtener el producto que se va a eliminar
        const productoEliminado = productos.find((p) => p.id === producto.id);

        // Eliminar el producto del array del carrito
        carritoArray.splice(index, 1);

        // Actualizar los contadores y la visualización en la interfaz
        contador--;
        minicarrito.innerText = contador;
        acumulador = acumulador - Number(productoEliminado.precio);
        acumulado.innerText = acumulador;

        // Eliminar el elemento del producto en la interfaz
        items.remove();

        // Verificar si después de la eliminación el carrito está vacío
        if (carritoArray.length === 0) {
          // Eliminar el modal del carrito si está vacío
          divContenedor.remove();
        }
      }
    });
  }

  if (carritoArray.length > 0) {
    let buttonCheckout = crearEtiqueta(
      "button",
      {
        id: "checkout-pago",
        class: "button-producto",
      },
      `Pagar: ${acumulador}`
    );
    let p = crearEtiqueta(
      "p",
      { class: "contador" },
      `items: ${contador} - Total ${acumulador}`
    );
    div1.appendChild(p);
    buttonCheckout.addEventListener("click", modalCheckOut);
    div1.appendChild(buttonCheckout);
    let buttonVaciar = crearEtiqueta(
      "button",
      { class: "buttonVaciar" },
      "Vaciar carrito"
    );
    div1.appendChild(buttonVaciar);

    buttonVaciar.addEventListener("click", () => {
      // Vaciar el array del carrito

      carritoArray = [];

      // Reiniciar contadores

      contador = 0;
      acumulador = 0;

      // Actualizar las visualizaciones en la interfaz

      minicarrito.innerText = contador;
      acumulado.innerText = acumulador;

      // Eliminar elementos del carrito en la interfaz

      let divCarrito = document.getElementById("modalCarrito");

      if (divCarrito) {
        divCarrito.remove();
      }
    });
  } else {
    let h4 = crearEtiqueta("h4", {}, "Tu carrito esta vacío!");
    div1.appendChild(h4);
  }
};

document.getElementById("teclados").addEventListener("click", () => {
  eliminarElementos();
  creacionUi(0, 4);
  anuncio();
});

document.getElementById("ratones").addEventListener("click", () => {
  eliminarElementos();
  creacionUi(4, 8);
  anuncio();
});

document.getElementById("alfombrillas").addEventListener("click", () => {
  eliminarElementos();
  creacionUi(8, 12);
  anuncio();
});

document.getElementById("auriculares").addEventListener("click", () => {
  eliminarElementos();
  creacionUi(12, 16);
  anuncio();
});

let eliminarElementos = function () {
  for (let i = 1; i < 17; i++) {
    let elemento = document.getElementById(`${i}`);
    if (elemento) {
      elemento.remove();
    }
  }
};

function anuncio() {
  randomNumber();
  crearAnuncio();
  setTimeout(eliminarAnuncio, 10000);
}

let randomNumber = function () {
  return Math.floor(Math.random() * 4 + 1);
};

const crearAnuncio = () => {
  let divAnuncio = crearEtiqueta(
    "div",
    { id: "divAnuncio", class: "modalAnuncio" },
    ""
  );

  let anuncio = crearEtiqueta("img", {
    src: `fotos/Anuncios/anuncio${randomNumber()}.png`,
    id: "anuncio",
    class: "anuncioImg",
  });

  divAnuncio.appendChild(anuncio);
  document.querySelector("main").appendChild(divAnuncio);
};

const eliminarAnuncio = () => {
  document.getElementById("divAnuncio").remove();
};

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("modalAnuncio")) {
    event.target.remove();
  } else if (event.target.classList.contains("modalProducto")) {
    event.target.remove();
  } else if (event.target.classList.contains("modal")) {
    event.target.remove();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    let modal1 = document.getElementById("modalProducto");
    let modal2 = document.getElementById("divAnuncio");
    let modal3 = document.getElementById("modalCarrito");
    let modal4 = document.getElementById("modalCheck");
    let modal5 = document.getElementById("modalRespuesta");

    if (modal1 !== null) {
      modal1.remove();
    } else if (modal2 !== null) {
      modal2.remove();
    } else if (modal3 !== null) {
      modal3.remove();
    } else if (modal4 !== null) {
      modal4.remove();
    } else if (modal5 !== null) {
      modal5.remove();
    }
  }
});

const modalResumen = function (name) {
  // Crea y muestra el nuevo modal en respuesta al envío del formulario

  let modalRespuesta = crearEtiqueta("div", {
    class: "modal modalRespuesta",
    id: "modalRespuesta",
  });

  document.querySelector("main").appendChild(modalRespuesta);

  // Resto del código para el nuevo modal de respuesta...
  let a = crearEtiqueta(
    "a",
    {
      class: "cerrar",
      href: "javascript:void(0)",
    },

    "X"
  );
  modalRespuesta.appendChild(a);
  a.addEventListener("click", () => {
    // Cerrar el modal al hacer clic en el enlace de cierre

    modalRespuesta.remove();
  });
  let divCard = crearEtiqueta("div", {
    class: "modalResumen",
  });
  modalRespuesta.appendChild(divCard);

  let titulo = crearEtiqueta("h2", { class: "h2" }, "Resumen de compra");
  divCard.appendChild(titulo);
  let h3 = crearEtiqueta("h3", {});

  let spanGracias = crearEtiqueta(
    "span",
    {
      class: "h3",
    },
    "Gracias por su compra "
  );
  let spanNombre = crearEtiqueta(
    "span",
    {
      class: "span",
    },
    "  " + name
  );

  h3.appendChild(spanGracias);
  h3.appendChild(spanNombre);

  divCard.appendChild(h3);
  divCard.appendChild(h3);
  let lista = crearEtiqueta("ul", { class: "li" }, "");
  divCard.append(lista);
  for (let i = 0; i < carritoArray.length; i++) {
    let productoId = carritoArray[i];
    let producto = productos.find((p) => p.id === productoId);

    let items = crearEtiqueta("li", {});
    lista.append(items);

    let nombre = crearEtiqueta("h3", {}, producto.nombre);
    items.appendChild(nombre);

    let precio = crearEtiqueta("p", {}, `$${producto.precio}`);
    items.appendChild(precio);
  }
  let p = crearEtiqueta("p", { class: "contador" }, `Total ${acumulador}`);
  divCard.appendChild(p);
};
const modalCheckOut = function () {
  document.getElementById("modalCarrito").remove();

  let modalCheck = crearEtiqueta("div", {
    class: "modal",
    id: "modalCheck",
  });

  document.querySelector("main").appendChild(modalCheck);

  let modalContenedor = crearEtiqueta("form", {
    class: "modalContenedor",
    action: "EJEMPLO",
    method: "post",
  });
  modalContenedor.addEventListener("submit", (e) => {
    e.preventDefault();

    let nombreValue = document.getElementById("nombreInput").value;
    modalCheck.remove();

    modalResumen(nombreValue);
  });

  modalCheck.appendChild(modalContenedor);

  let a = crearEtiqueta(
    "a",
    {
      class: "cerrar",
      href: "javascript:void(0)",
    },

    "X"
  );
  modalContenedor.appendChild(a);

  a.addEventListener("click", () => {
    // Cerrar el modal al hacer clic en el enlace de cierre

    modalCheck.remove();
  });
  let titulo = crearEtiqueta(
    "h2",
    { class: "h3-checkout" },
    "Datos personales"
  );
  modalContenedor.appendChild(titulo);
  let label = crearEtiqueta("label", { class: "labelCheck" }, "Nombre:");
  modalContenedor.appendChild(label);

  let inputName = crearEtiqueta("input", {
    type: "text",
    class: "InputCheck",
    id: "nombreInput",
    required: true,
  });

  modalContenedor.appendChild(inputName);
  const nombreValue = document.getElementById("nombreInput").value;

  let labelTelefono = crearEtiqueta(
    "label",
    { class: "labelCheck" },
    "Telefono:"
  );
  modalContenedor.appendChild(labelTelefono);

  let inputTelefono = crearEtiqueta("input", {
    type: "number",
    class: "InputCheck",
  });
  modalContenedor.appendChild(inputTelefono);

  let labelEmail = crearEtiqueta("label", { class: "labelCheck" }, "Email:");
  modalContenedor.appendChild(labelEmail);

  let inputEmail = crearEtiqueta("input", {
    type: "Email",
    class: "InputCheck",
  });
  modalContenedor.appendChild(inputEmail);

  let divCC = crearEtiqueta("div", { class: "divCC" });
  modalContenedor.appendChild(divCC);

  let divCalle = crearEtiqueta("div", { class: "divCalle" });
  divCC.appendChild(divCalle);

  let labelCalle = crearEtiqueta("label", { class: "labelCheck" }, "Calle:");
  divCalle.appendChild(labelCalle);

  let inputCalle = crearEtiqueta("input", {
    type: "text",
    class: "InputCheck",
  });
  divCalle.appendChild(inputCalle);

  let divPostal = crearEtiqueta("div", { class: "divPostal" });
  divCC.appendChild(divPostal);

  let labePostal = crearEtiqueta(
    "label",
    { class: "labelCheck" },
    "Codigo Postal:"
  );
  divPostal.appendChild(labePostal);

  let inputPostal = crearEtiqueta("input", {
    type: "Number",
    class: "InputCheck",
  });
  divPostal.appendChild(inputPostal);

  let labeFecha = crearEtiqueta(
    "label",
    { class: "labelCheck" },
    "Fecha de entrega:"
  );
  modalContenedor.appendChild(labeFecha);

  let inputFecha = crearEtiqueta("input", {
    type: "date",
    class: "InputCheck",
  });
  modalContenedor.appendChild(inputFecha);

  let divSubmit = crearEtiqueta("divSubmit", { id: "divSubmit" });
  modalContenedor.appendChild(divSubmit);

  let submit = crearEtiqueta(
    "button",
    { type: "submit", id: "submitButton" },
    "enviar"
  );

  divSubmit.appendChild(submit);
};

document.getElementById("logoRazer").addEventListener("click", function () {
  let productosRazer = document.getElementById("productos");
  while (productosRazer.firstChild) {
    productosRazer.removeChild(productosRazer.firstChild);
  }
  creacionUi(0, 16);
});
