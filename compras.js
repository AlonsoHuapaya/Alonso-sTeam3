/**
 * Representa un producto de la tienda.
 *
 * Almacena el nombre, el precio y la cantidad de unidades
 * de un producto y permite calcular su importe total.
 */

class Producto {
 /**
   * Crea un nuevo producto.
   *
   * @param {string} nombre - Nombre del producto.
   * @param {number} precio - Precio por unidad del producto, en euros.
   * @param {number} cantidad - Número de unidades del producto.
   */
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
 /**
   * Calcula el importe total del producto.
   *
   * Multiplica el precio por unidad por la cantidad de unidades.
   *
   * @returns {number} Importe total del producto en euros.
   */


  calcularTotal() {
    return this.precio * this.cantidad;
  }
}

/**
 * Representa el carrito de compras y gestiona la lista de productos seleccionados.
 * @class
 */
class Carrito {
  /**
   * Crea una instancia de Carrito con la lista de productos vacía.
   */
  constructor() {
    /** 
     * Colección de productos añadidos al carrito.
     * @type {Array<Object>} 
     */
    this.productos = [];
  }

  /**
   * Añade un nuevo producto a la lista del carrito.
   * @param {Object} producto - Objeto del producto que contiene el método calcularTotal.
   */
  agregarProducto(producto) {
    this.productos.push(producto);
  }

  /**
   * Calcula el importe total de todos los productos presentes en el carrito.
   * @returns {number} La suma acumulada de los totales de cada producto.
   */
  calcularTotalCarrito() {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  }

  /**
   * Elimina todos los productos del carrito, dejándolo vacío.
   */
  vaciarCarrito() {
    this.productos = [];
  }
}

/**
 * Representa a un usuario registrado en la plataforma y gestiona sus operaciones de compra.
 * @class
 */
class Usuario {
  /**
   * Crea una instancia de Usuario asociada a su propio carrito de compras.
   * @param {string} nombre - Nombre completo del usuario.
   * @param {string} correo - Correo electrónico de contacto.
   */
  constructor(nombre, correo) {
    /** @type {string} */
    this.nombre = nombre;

    /** @type {string} */
    this.correo = correo;

    /** 
     * Carrito de compras individual del usuario.
     * @type {Carrito} 
     */
    this.carrito = new Carrito();
  }

  /**
   * Añade un producto al carrito personal del usuario.
   * @param {Producto} producto - Objeto del producto que se añadirá.
   */
  agregarProductoAlCarrito(producto) {
    this.carrito.agregarProducto(producto);
  }

  /**
   * Procesa la compra: calcula el importe total acumulado en el carrito, 
   * muestra la confirmación por consola y vacía el carrito.
   */
  finalizarCompra() {
    /** @type {number} */
    const total = this.carrito.calcularTotalCarrito();
    console.log(`Usuario ${this.nombre} ha realizado una compra por un total de ${total}€`);
    this.carrito.vaciarCarrito();
  }
}

// -----------------------------------------------------------------------------
// EJECUCIÓN Y PRUEBA DEL FLUJO PRINCIPAL
// -----------------------------------------------------------------------------

/** @type {Producto} Instancia de producto: Laptop */
const producto1 = new Producto("Laptop", 1200, 1);

/** @type {Producto} Instancia de producto: Mouse */
const producto2 = new Producto("Mouse", 20, 2);

/** @type {Usuario} Instancia del usuario principal */
const usuario = new Usuario("Juan", "juan@example.com");

// Interacción del usuario con su carrito
usuario.agregarProductoAlCarrito(producto1);
usuario.agregar