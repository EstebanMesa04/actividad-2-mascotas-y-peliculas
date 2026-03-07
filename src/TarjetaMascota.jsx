import "./TarjetaMascota.css"

function TarjetaMascota({nombre, especie, raza, edad, peso, vacunado, emoji}){
    
    return(
        <div className="tar-contenedor">
            <p className="tar-emoji">{emoji}</p>
            <h3 className="tar-nombre">{nombre}</h3>
            <p className="tar-esp-raza">{especie} | {raza}</p>
            <div className="tar-cont-datos">
                <div className="tar-subcont">
                    <p className="tar-subcont-t">Edad</p>
                    <p className="tar-subcont-d">{edad} años</p>
                </div>
                <div className="tar-subcont">
                    <p className="tar-subcont-t">Peso</p>
                    <p className="tar-subcont-d">{peso} kg</p>
                </div>
            </div>
            <div className={vacunado?"tar-v-s":"tar-v-n"}>{vacunado? "✔️ Vacunado" : "❌ No vacunado"}</div>
        </div>
    )
}

export default TarjetaMascota