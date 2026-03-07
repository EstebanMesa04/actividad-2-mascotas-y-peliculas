import "./TarjetaPelicula.css"

function TarjetaPelicula({imgurl, titulo, annio, genero, calificacion, disponible}) {
    return (
        <div className="peli-contenedor">
            <img className="peli-img" src={imgurl} alt="" />
            <ul className="peli-datos">
                <li>Título: <strong>{titulo}</strong></li>
                <li>Año: <strong>{annio}</strong></li>
                <li>Género: <strong>{genero}</strong></li>
                <li>Calificación: <strong>{calificacion}/10</strong></li>
                <li>Disponible: <strong>{disponible?"Si":"No"}</strong></li>
            </ul>
        </div>
    )
}

export default TarjetaPelicula