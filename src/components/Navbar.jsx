import { Link } from "@nextui-org/react"
import "../App.css"

const Navbar = () => {

    return (
        <div className="navbar" >
            <Link href="/" >Product</Link>
            <Link href="/cart" >Cart</Link>
        </div>
    )
}

export default Navbar