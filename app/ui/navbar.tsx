import Link from "next/link";

export default function Navbar(){
    return (
        <nav>
            <Link href='/home'>Home</Link>
            <Link href='/blog'>Blog</Link>
        </nav>
    )
}