class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []
    }

    getFullName() {
        return `Mi nombre es ${this.nombre} y mi apellido ${this.apellido}`;
    }

    addMascota(namePet) {
        this.mascotas.push(namePet);
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addBook(titleBook, autorBook) {
        this.libros.push({
            title: titleBook,
            autor: autorBook
        });
    }

    getBookNames() {
        let bookByName = this.libros.map(book => book.title);
        return bookByName;
    }
}

let user1 = new Usuario ("Juan", "Perez");

console.log(user1.getFullName());
console.log(user1.addMascota('Piky'));
console.log(user1.addMascota('Pelu'));
console.log(user1.countMascotas());
console.log(user1.addBook('El libro negro de la nueva izquierda', 'Agustín Laje'));
console.log(user1.addBook('Los dias salvajes', 'Marcelo Larraquy'));
console.log(user1.getBookNames());