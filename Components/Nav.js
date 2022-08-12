import Link from "next/link"
export default function Nav({children}){
    return(
        <div>
            <nav >
                <Link href="/">
                    
                    <a><img src="/img/casa.png"/> Casa</a>
                </Link>
                <Link href="/Contenido">
                    
                    <a> Contenido</a>
                </Link>

            </nav>
            {children}
        </div>
    )
}