import Link from "next/link"
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, getDocs } from "firebase/firestore";
import { db } from "../BD/Configuracion";
export default function CardLevel(props) {
  const [dataArray, setDataArray] = useState([])
  const [dataArrayDescripcion, setDataArrayDescripcion] = useState([])
  const Datoarray = [];
  const DatoDescripcion = [];

  const getData =async ()=>{
    const querySnapshot = await getDocs(collection(db, "11111", "Niveles", props.id));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        Datoarray.push({...doc.data(), id:doc.id, numero:Datoarray.length })
        if(doc.id == "Datos_Nivel1"){
          DatoDescripcion.push({...doc.data()})
        }
      });

        setDataArray(Datoarray)
        setDataArrayDescripcion(DatoDescripcion)
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
      <style jsx>{`
        .cardLevel{
          background-color:${props.color};
        }
      `}</style>
    {
      <Link href={"Nivel/"+props.id}>
        <a>
          <div className="cardLevel" >
                  <span>{props.Number}</span>
              <div>
                <img src="/img/numeros 1.png" alt="FOTO-DEL-NIVEL" />
              </div>
              <div>
                  <h2>
                      {props.nombre}
                  </h2>
              </div>
        </div>
        </a>
    </Link>
    }
    </>
  )
}
