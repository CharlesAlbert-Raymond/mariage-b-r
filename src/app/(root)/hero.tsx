import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="flex h-[95dvh] flex-col items-center justify-center gap-4">
            <h1 className="main-title pb-8">Gabrielle et Charles-Albert</h1>
            <Image
                src="/static/img/gabrielle-charles.png"
                width={1080}
                height={1920}
                alt="Gabrielle et Charles-Albert"
                className="h-96 object-scale-down rounded-md"
            />
            <p className="subtitle">8 au 11 août 2025</p>
            <Link href="/horaire" className="underline">🗓️ Clique ici pour voir l&apos;horaire 📅</Link>
        </section>
    );
};

export default Hero;
