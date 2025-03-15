import Banner from "~/components/banner";
import Hero from "./hero";
import Text from "./text";

const bannerText =
    "Restez à l’affût de ce site web d’ici le mariage, car des informations importantes seront ajoutées régulièrement en fonction des nouvelles interrogations. N’hésitez pas à revenir souvent pour consulter les mises à jour !";

const Index = () => {
    return (
        <main className="flex flex-col items-center justify-center">
            <Banner>{bannerText}</Banner>
            <Hero />
            <Text />
        </main>
    );
};

export default Index;
