import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../BD/Configuracion";
import Video from "./PageLevel/video";
export default function SubtemaNivel(props){
    const [counter, setCounter] = useState(0)
    const [counterObjetivo, setCounterObjetivo] = useState(0)
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        setCounter(counter - 1)
    }
        const handleObjetivos1 = () => {
                setCounterObjetivo(counterObjetivo + 1)

        }
        const handleObjetivos2 = () => {
            setCounterObjetivo(counterObjetivo - 1)

        }
    return(
        <div className="datosNivel">
            {
            counter==0?
                <div>
                    <h1>{props.data.ID}</h1>
                    <p>{props.data.Definicion}</p>
                    <div className="divbutton">
                        <button onClick={handleClick1} >Siguiente</button>
                    </div>
                </div>
            :counter==1?
                props.data.Objetivos.length != counterObjetivo + 1?
                <div>
                    <h2>En {props.data.ID} podras aprender </h2>
                    <p>{props.data.Objetivos[counterObjetivo].Objetivos}</p>
                    <div className="divbutton">
                        <div><button onClick={handleClick2} >Volver a Inicio</button></div>
                        <div><button onClick={handleObjetivos1} >Siguiente</button></div>
                    </div>
                </div>:props.data.Objetivos.length == counterObjetivo + 1?
                    <div>
                        <h2>{props.data.ID}</h2>
                        <Video LinkVideo={props.data.Video} />
                        <div className="divbutton">
                            <div><button onClick={handleClick2} >Volver a Inicio</button></div>
                            <div><button onClick={handleObjetivos2} >Atras</button></div>
                            <div><button onClick={handleObjetivos1} >Siguiente</button></div>
                        </div>
                    </div>
            :<h1>dd</h1>
            :<span></span>
            }
        </div>
    )
}