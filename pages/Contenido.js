import { async } from "@firebase/util";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../BD/Configuracion";
import Video from "./Nivel/PageLevel/video";
export default function Contenido(){
  const [dataArray, setDataArray] = useState([])
    const getData = async ()=>{
        const Dato = [];
        await getDocs(collection(db, "11111","Niveles", "ArrayNiveles"))
        .then((querySnapshot)=>{
            querySnapshot.forEach((doc) => {
                getDocs(collection(db, "11111","Niveles", doc.data().Nivel), orderBy("position","desc"))
                .then((querydata)=>{
                    querydata.forEach((Datos)=>{
                        Dato.push({...Datos.data(), id:Datos.id})
                        setDataArray(Dato)

                    })
                })
                
              });
        })
    }
    useEffect(()=>{
        getData()
    }, [])
    
    return(
        <main>
            {dataArray.length != 0?
                dataArray.map(e=>
                    e.position == 1?
                    <div>
                        <h1>{e.Nombre}</h1> 
                        <p>{e.Definicion}</p>
                        {
                            e.Objetivos.map(data=>
                               <p>{data.Objetivos}</p> 
                            )
                        }
                    </div>
                    :
                    <div>
                        <h3>{e.ID}</h3>
                        <p>{e.Definicion}</p>
                        {
                            e.Objetivos.map(data=>
                               <p>{data.Objetivos}</p> 
                            )
                        }
                        <Video LinkVideo={e.Video} />
                    </div>
                )
            :<h1>ss</h1>
            
        }
        </main>
    )
}