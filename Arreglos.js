const arrayPeli = [
    {
      titulo: "El especialista",
      año: 2024,
      clasificacion: "12",
      duracion: "2h 6min",
      imdbRating: 7.3,
      generos: ["Acción", "Comedia", "Drama"],
      director: "David Leitch",
      argumento: "Un doble de Hollywood trabaja como cazarrecompensas para sobrevivir."
    },
    {
      titulo: "Oppenheimer",
      año: 2023,
      clasificacion: "12",
      duracion: "3h",
      imdbRating: 8.3,
      generos: ["Biografía", "Drama", "Historia"],
      director: "Christopher Nolan",
      argumento: "La historia del científico J. Robert Oppenheimer y su rol en el desarrollo de la bomba atómica."
    }
]
const arrayPeli2 = [
    {
      titulo: "Gran Turismo",
      año: 2023,
      clasificacion: "7",
      duracion: "2h 14min",
      imdbRating: 7.1,
      generos: ["Accion", "Aventura", "Drama"],
      director: "Neill Blomkamp",
      argumento: "Basada en la increíble historia real de un equipo de marginados -un jugador de clase trabajadora, un expiloto de carreras fracasado y un ejecutivo idealista- que lo arriesgan todo para enfrentarse al deporte más elitista del mundo."
    }
]

const nuevaPelicula = {
    titulo: "Titanic",
    año: 1997,
    clasificacion: "12",
    duracion: "3h 14min",
    imdbRating: 7.8,
    generos: ["Drama", "Romance"],
    director: "James Cameron",
    argumento: "Un joven y pobre artista se enamora de una joven adinerada a bordo del Titanic durante su viaje inaugural."
};
arrayPeli.forEach(pelicula => {
    console.log(`\n${pelicula.titulo} - Géneros: ${pelicula.generos.join(", ")} - Director: ${pelicula.director}`);
});
  
arrayPeli.push({...nuevaPelicula});
const infoPeliculas = arrayPeli.map(pelicula => {
    return {
        titulo: pelicula.titulo,
        clasificacion: pelicula.clasificacion
    };
});
console.log("\nInformación de cada película : ", infoPeliculas);

const nPeliculas = arrayPeli.length;
console.log("\nLongitud del arreglo: ",nPeliculas);


// Encontrar una película específica en el array
const peliculaEncontrada = arrayPeli2.find(pelicula => pelicula.director === "Neill Blomkamp");
console.log("\nPelicula encontrada: ", peliculaEncontrada);

// Filtrar las mejores películas según su rating (mayor  a 8)
const mejoresPeliculas = arrayPeli.filter(pelicula => pelicula.imdbRating > 8);
console.log("\nLas  películas con mayor calificación son: ", mejoresPeliculas);

// Calcularr  la suma de los ratings de todas las películas
const sumaRating = arrayPeli.reduce((acumulador, pelicula) => acumulador + pelicula.imdbRating, 0);

console.log(sumaRating);

const copiaArrayPeli = [...arrayPeli];

// Ordenarcopia del array en función del año de la película
copiaArrayPeli.sort((a, b) => a.año - b.año);
console.log("\nOrden por año de la película: ", copiaArrayPeli);

// Verificar si se cumple una condición
const ver=copiaArrayPeli.some(pelicula => pelicula.director === "Quentin Tarantino");
console.log(ver);

//Destructuración de arreglos
const duracionPeliculas = arrayPeli.map(({ duracion }) => duracion);
console.log("\nTítulos de las películas: ", duracionPeliculas);