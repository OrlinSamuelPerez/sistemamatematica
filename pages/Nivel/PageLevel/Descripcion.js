export default function Descripcion(props) {
    const leer = ()=>{
        if(window.speechSynthesis){
            const locutor = new SpeechSynthesisUtterance(props.Descripcion)
            const voz = window.speechSynthesis
            var voices = voz.getVoices();
            locutor.voice = voices[7];
            locutor.volume =1
            voz.speak(locutor)
         }
        else{
            console.log("No soportado")
        }
    }
    return(
        <div className="descripcion">
            <img className="perro" src="/img/perro.png"/>
            <div>
                <h2>{props.title} </h2>
                <p>{props.Descripcion} </p>
                <div className="descripcionsub">
                    <a onClick={leer}><img src="/img/alto-volumen.png"/></a>
                    {props.boton}
                </div>
            </div>
        </div>
    )
}