import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy,query,doc, getDocs ,getDoc} from "firebase/firestore";
import { auth, db } from "../../../BD/Configuracion";
import IndexNiveles from "../IndexNiveles";
import CuadroDialogo from "../../../Components/CuadroDialogo";
import Datosnivel from "../DatosNivel";
import SubtemaNivel from "../SubtemaNivel";
export default function Nivel() {
    const router = useRouter();
    const [dataArray, setDataArray] = useState({})
    const [DataValidate, setDataValidate] = useState(false) 
  
    const getData =async ()=>{
      await getDocs(collection(db, "11111", "Niveles", router.query.id), orderBy("position","desc"))
      .then(querySnapshot =>{
        const Datoarray = []
        querySnapshot.forEach((doc1) => {
            auth.onAuthStateChanged(async user=>{
              if(user != null){
                const docSnap = await getDoc(doc(db, "11111", "Usuarios","Estudiantes",user.email))
                  if(docSnap.data().posicionActual.posicionNIvel == doc1.data().position){
                    Datoarray.push({...doc1.data(), id:doc1, posicion:doc1.data().position})
                    Datoarray = Datoarray[0]
                    setDataArray(Datoarray)
                } 
              }
            })
          
        });
        setDataValidate(true)
      })
      


      }
    useEffect(()=>{
      getData()

    },[])

   
    return (
      <main className="nivelmain">
            {  
            DataValidate==true?
              dataArray.posicion==1?<Datosnivel data={dataArray}/>:<span></span>
              :<h4>Espere un momento</h4>
          }
          {
            DataValidate==true?
              dataArray.posicion > 1?<SubtemaNivel data={dataArray} />:<span>ddffd</span>
            :<h4>Espere un momento</h4>
          }
          
      </main>
    )
  }
   