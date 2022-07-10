import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../BD/Configuracion"

export default function Login() {
  const submitLogin = (e)=>{
    e.preventDefault()
    const correo = document.getElementById("email").value
    const password = document.getElementById("password").value
    signInWithEmailAndPassword(auth, correo, password)
  }
 
    
  return (
    <div className="fondo-login">
      <div className="login">
        <h1>BIENVENIDOS</h1>
        <form> 

          <div>
          </div>
          <div>
            <input id="email" type="email" autoComplete="true" placeholder="Correo Usuario"/>
          </div>
          <div>
            <input id="password" type="password" autoComplete="true" placeholder="Tu contraseña aqui"/>
          </div>
          <button onClick={submitLogin}>EMPEZAR</button>
        </form>
      </div>
    </div>
  )
}
