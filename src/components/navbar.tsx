import Link from "next/link";
import { LeftArrow } from "./icons";

const Navbar = () => {
    return (
        <nav className="grid grid-cols-3 p-10">
            <div className="self-center">
                <Link
                    href="/"
                    className="flex w-fit items-center gap-2 rounded-lg px-4 py-2 font-bold hover:translate-x-1 hover:bg-pink-200 hover:transition"
                >
                    <LeftArrow />
                    <p>Accueil</p>
                </Link>
            </div>
            <Link href="/">
                <h1 className="mb-4 text-center font-serif text-xl">
                    Mariage Blais-Raymond
                </h1>
            </Link>
        </nav>
    );
};

export default Navbar;
