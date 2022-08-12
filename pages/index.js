import styles from '../styles/Home.module.css'
import CardLevel from '../Components/CardLevel'
import { useContext, useEffect,useState } from 'react';
import StaticContext, { ContextProvider } from '../context/StaticContext';
import { collection, onSnapshot, query,getDocs } from "firebase/firestore";
import {db} from "../BD/Configuracion"

export default function Home() {
  const {userData, setUserData} = useContext(StaticContext)
  const [dataArray, setDataArray] = useState([])
  const getData =async ()=>{
    const Dato = [];
    const querySnapshot = await getDocs(collection(db, "11111","Niveles","ArrayNiveles"));
      querySnapshot.forEach((doc) => {
        Dato.push({...doc.data(), id:doc.id, number:Dato.length + 1})
    });
    setDataArray(Dato)
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className='gridhomemain'>
    {
      dataArray != [] ?
      dataArray.map(e=>
        <div className="grid-home">
          <CardLevel color="#E64848" id={e.id}  nombre={e.Nombre} Number={e.number} />
        </div>
      )
      :<h1>Espere un momento</h1>
    }
    </div>
  )
}
 