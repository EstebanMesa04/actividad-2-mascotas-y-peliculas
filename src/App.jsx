import TarjetaMascota from './TarjetaMascota'
import TarjetaPelicula from './TarjetaPelicula'

import './App.css'

function App() {

  return (
    <>
      <main>
        <h2>Macotas</h2>
        <h2>Películas</h2>
        <section>

          <TarjetaMascota 
            nombre="Kira"
            especie="gato"
            raza="Bengalí"
            edad={3}
            peso={4.8}
            vacunado={true}
            emoji="🐱"
          />
          <TarjetaMascota 
            nombre="Rocky"
            especie="perro"
            raza="Bulldog"
            edad={6}
            peso={18.2}
            vacunado={false}
            emoji="🐶"
          />
          <TarjetaMascota 
            nombre="Luna"
            especie="gato"
            raza="Siamés"
            edad={2}
            peso={3.9}
            vacunado={true}
            emoji="🐱"
          />
          <TarjetaMascota
            nombre="Max"
            especie="perro"
            raza="Labrador"
            edad={5}
            peso={29.4}
            vacunado={true}
            emoji="🐶"
          />
          <TarjetaMascota
            nombre="Max"
            especie="perro"
            raza="Labrador"
            edad={5}
            peso={29.4}
            vacunado={true}
            emoji="🐶"
          />
        </section>

        <section>
          <TarjetaPelicula 
            imgurl="https://pics.filmaffinity.com/john_wick-166872838-mmed.jpg"
            titulo="John Wick"
            annio={2014}
            genero="Acción, Thriller, Crimen, Venganza, Película de culto"
            calificacion={6.4}
            disponible={true}
          />

          <TarjetaPelicula 
            imgurl="https://pics.filmaffinity.com/kill_bill_volume_1-216872360-mmed.jpg"
            titulo="Kill Bill: Volume 1"
            annio={2003}
            genero="Acción, Thriller, Artes marciales, Crimen, Venganza, Película de culto"
            calificacion={7.6}
            disponible={false}
          />

          <TarjetaPelicula 
            imgurl="https://pics.filmaffinity.com/sen_to_chihiro_no_kamikakushi-348587850-mmed.jpg"
            titulo="Sen to Chihiro no kamikakushi"
            annio={2001}
            genero="Animación, Fantástico, Aventuras, Dragones, Isekai, Película de culto"
            calificacion={8.1}
            disponible={true}
          />

          <TarjetaPelicula 
            imgurl="https://pics.filmaffinity.com/kimi_no_na_wa_your_name-612760352-mmed.jpg"
            titulo="Your Name"
            annio={2016}
            genero="Animación, Drama, Romance, Fantástico, Viajes en el tiempo, Película de culto"
            calificacion={7.8}
            disponible={true}
          />

          <TarjetaPelicula 
            imgurl="https://pics.filmaffinity.com/beetlejuice_beetlejuice-890586814-mmed.jpg"
            titulo="Beetlejuice Beetlejuice"
            annio={2024}
            genero="Fantástico. Comedia. Terror "
            calificacion={5.9}
            disponible={false}
          />

          <TarjetaPelicula 
            imgurl="https://pics.filmaffinity.com/coraline-509800788-mmed.jpg"
            titulo="Coraline"
            annio={2009}
            genero="Animación, Fantástico, Terror, Stop Motion, Casas encantadas, Película de culto"
            calificacion={7.1}
            disponible={true} 
          />
        </section>
      </main>
    </>
  )
}

export default App
