import styles from '../styles/Home.module.css'
import CardLevel from '../Components/CardLevel'
import { useContext, useEffect,useState } from 'react';
import StaticContext, { ContextProvider } from '../context/StaticContext';
import { collection, onSnapshot, query } from "firebase/firestore";
import {db} from "../BD/Configuracion"

export default function Home() {
  const {userData, setUserData} = useContext(StaticContext)
  const [dataArray, setDataArray] = useState([])
  const Dato = [];
  const getData =async ()=>{
    const q = query(collection(db, "11111","Niveles","ArrayNiveles"));
     onSnapshot(q, (querySnapshot) => {
    Dato.pop()
        querySnapshot.forEach((doc) => {
          Dato.push({...doc.data(), id:doc.id, number:Dato.length + 1})
        });
        setDataArray(Dato)
    }); 
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <>
    {
      dataArray != [] ?
      dataArray.map(e=>
        <div className="grid-home">
          <CardLevel color="#E64848" id={e.id} Number={e.number} />
        </div>
      )
      :<h1>Espere un momento</h1>
    }
    </>
  )
}
 