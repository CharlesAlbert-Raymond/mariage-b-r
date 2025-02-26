import Hero from "~/components/hero";

const Index = () => {
    return (
        <div className="flex min-h-dvh flex-col items-center justify-center">
        {/* Not ready yet
            <section>
                <Hero />
            </section>
        */}
            <section className="flex flex-col bg-white bg-opacity-60 p-4 text-lg">
                <h1 className="mb-4 text-center text-xl font-bold">
                    💑 Mariage Blais-Raymond 🌹
                </h1>

                <p className="font-bold">Minute papillion...</p>
                <p>
                    Tu es beaucoup trop d&apos;avance! Le site sera bientot
                    prêt, mais soit encore un peu patient!
                </p>
            </section>
        </div>
    );
};

export default Index;
