const CarritoCompra = require("../index");

describe('CarritoCompra', () => {
    let carrito;

    beforeEach(() => {
        carrito = new CarritoCompra();
    });

    test('agregarProducto agrega un producto al carrito', () => {
        const producto = { nombre: 'Producto 1', precio: 10 };
        carrito.agregarProducto(producto);
        expect(carrito.productos.length).toBe(1);
    });

    test('calcularTotal calcula correctamente el total de la compra', () => {
        const producto1 = { nombre: 'Producto 1', precio: 10 };
        const producto2 = { nombre: 'Producto 2', precio: 20 };
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.calcularTotal()).toBe(30);
    });

    test('aplicarDescuento aplica correctamente el descuento al total', () => {
        const producto1 = { nombre: 'Producto 1', precio: 10 };
        const producto2 = { nombre: 'Producto 2', precio: 20 };
        carrito.agregarProducto(producto1);
        carrito.agregarProducto(producto2);
        expect(carrito.aplicarDescuento(10)).toBe(27);
    });
});