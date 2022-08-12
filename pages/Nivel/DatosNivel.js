import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../BD/Configuracion";
export default function Datosnivel(props){
    const [counter, setCounter] = useState(0)
    const [counterObjetivo, setCounterObjetivo] = useState(0)
    const handleClick1 = () => {
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        setCounter(counter - 1)
    }
    const handleObjetivos1 = () => {
        if(props.data.Objetivos.length == counterObjetivo + 1){
            auth.onAuthStateChanged(async user=>{
                if(user != null){
                  const docSnap = doc(db, "11111", "Usuarios","Estudiantes",user.email)
                  await updateDoc(docSnap, {
                    posicionActual:{
                        posicionNIvel:2,
                        nivel:1
                    }
                    
                  });
                  location.reload()
                }
              })
        }else{
            setCounterObjetivo(counterObjetivo + 1)

        }

    }
    const handleObjetivos2 = () => {
        setCounterObjetivo(counterObjetivo - 1)

    }
    return(
        <div className="datosNivel">
            {
            counter==0?
                <div>
                    <h1>{props.data.Nombre}</h1>
                    <p>{props.data.Definicion}</p>
                    <div className="divbutton">
                        <button onClick={handleClick1} >Siguiente</button>
                    </div>
                </div>
            :counter==1?
                <div>
                    <h2>Los objetivos del tema {props.data.Nombre} son: </h2>
                    <p>{props.data.Objetivos[counterObjetivo].Objetivos}</p>
                    <div className="divbutton">
                        <div><button onClick={handleClick2} >Volver a Inicio</button></div>
                        <div><button onClick={handleObjetivos2} >Atras</button></div>
                        <div><button onClick={handleObjetivos1} >Siguiente</button></div>
                    </div>
                </div>
            :<span></span>
            }
        </div>
    )
}