import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import { db } from "../../../BD/Configuracion";
import IndexNiveles from "../IndexNiveles";
export default function Nivel() {
    const router = useRouter();
    const [dataArray, setDataArray] = useState([])
    const Datoarray = [];
    const getData =async ()=>{
      await getDocs(collection(db, "11111", "Niveles", router.query.id))
      .then(querySnapshot =>{
        Datoarray.pop()
        querySnapshot.forEach((doc) => {
          if(doc.id != "Datos_Nivel1" ){
            Datoarray.push({...doc.data(), id:doc.id, posicion:Datoarray.length})
          }
        });
      setDataArray(Datoarray)

      })
      }
    useEffect(()=>{
      getData()
      console.log(Datoarray.length)

    },[])
   
    return (
      <>
        {
          dataArray != []?
            dataArray.map(elemnt=>
                <IndexNiveles data={elemnt} DatoarrayTamaño={Datoarray.length} />
            )
            
          :<h1>Espere un momento</h1>
          }
      </>
    )
  }
  