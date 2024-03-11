class CarritoCompra {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total = 0;
        for (const producto of this.productos) {
            total += producto.precio;
        }
        return total;
    }

    aplicarDescuento(porcentaje) {
        const total = this.calcularTotal();
        const descuento = (porcentaje / 100) * total;
        return total - descuento;
    }
}


module.exports = CarritoCompra;