import Link from "next/link"
function Header() {
  return (
    <div className="flex justify-between px-20 py-4">
        <div>
            logo
        </div>

        <nav className="flex gap-4">
            <Link href="about">about</Link>
            <Link href="about">gallery</Link>
            <Link href="about">contact</Link>
            <Link href="about">about</Link>
            <Link href="about">about</Link>
        </nav>
    </div>
  )
}

export default Header