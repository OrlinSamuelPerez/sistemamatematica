export default function personaje(props){
    const leer = ()=>{
        if(window.speechSynthesis){
            const locutor = new SpeechSynthesisUtterance(props.paraleer)
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
        <div>

        </div>
    )
}