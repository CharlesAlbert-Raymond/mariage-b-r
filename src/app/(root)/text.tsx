import { Link } from "~/components/button";
import GoogleDriveVideo from "~/components/g-drive-video";

const Text = () => {
    return (
        <section className="content__container">
            <h1 className="content__title">
                Bienvenue sur notre site de mariage
            </h1>

            <p className="content__paragraph">
                Ce site a été créé pour vous fournir toutes les informations
                nécessaires concernant notre mariage, qui se déroulera sur
                quatre jours. Vous y trouverez le programme des événements, des
                détails sur le code vestimentaire, ainsi que des informations
                sur l&apos;hébergement et les repas. Nous sommes impatients de
                partager ces moments spéciaux avec vous!
            </p>

            <p className="content__paragraph font-bold">
                Explication de l&apos;événement par les futurs mariés.
            </p>
            <GoogleDriveVideo fileId="1BxdILqkdzL9ex70Baejy8DqjQkknW1sS" />

            <h2 className="content__subtitle">Dates et Lieu</h2>
            <p className="content__paragraph">
                Le mariage aura lieu du 8 au 11 août prochain. La cérémonie se
                déroulera le 9 août, en fin de journée. Veuillez vous référer à
                l’horaire ou aux mariés directement en cas de questionnement.
            </p>

            <ul>
                <li className="content__list-item list-none">
                    <span className="font-bold">
                        {new Intl.NumberFormat("fr-CA", {
                            style: "currency",
                            currency: "CAD",
                        }).format(350)}
                    </span>{" "}
                    par adulte
                </li>
                <li className="content__list-item list-none">
                    <span className="font-bold">
                        {new Intl.NumberFormat("fr-CA", {
                            style: "currency",
                            currency: "CAD",
                        }).format(50)}
                    </span>{" "}
                    par enfant (moins de 18 ans)
                </li>
            </ul>
            <p className="content__paragraph self-start">
                Voici l&apos;adresse du chalet:
            </p>
            <div>
                <p className="text-xl font-bold">1910 boulevard les neiges</p>
                <p className="text-xl font-bold">St-Féréolles-les-neiges</p>
                <p className="text-xl font-bold">QC, G0A 3R0</p>
            </div>
            <div className="mt-4 flex gap-4">
                <Link
                    className="mt-4"
                    href="https://chalets-village.com/chalets/le-festif/"
                    isExternal={true}
                    variant="outline"
                >
                    Le chalet
                </Link>

                <Link className="mt-4" href="/horaire">
                    L&apos;horaire
                </Link>
            </div>

            <p className="mt-4 font-bold">
                Le plan des chambres sera disponible quelques temps avant
                l&apos;événement.
            </p>

            <h2 className="content__subtitle">Couleurs Principales</h2>
            <p className="content__paragraph">
                Pour notre grand jour, nous avons choisi une palette de couleurs
                qui reflète notre amour et l&apos;ambiance que nous souhaitons
                créer. Les couleurs principales sont :
            </p>
            <ul>
                <li className="content__list-item">
                    <span className="inline-block size-10 bg-[#F0CCC5]"></span>
                    &nbsp;
                    <strong>Rose Gold</strong>: Évoque la chaleur et le
                    romantisme. (Difficile à reproduire à l&apos;écran, mais
                    brillant)
                </li>
                <li className="content__list-item">
                    <span className="inline-block size-10 border bg-[#FFFCF5]"></span>
                    &nbsp;
                    <strong>Champagne</strong> : Apporte une touche
                    d&apos;élégance et de douceur.
                </li>
                <li className="content__list-item">
                    <span className="inline-block size-10 bg-[#0C006B]"></span>
                    &nbsp;
                    <strong>Bleu marine</strong> : Symbolise la profondeur et la
                    sérénité.
                </li>
            </ul>

            <h2 className="content__subtitle">Code Vestimentaire</h2>
            <p className="content__paragraph">
                Nous souhaitons que vous vous sentiez à l&apos;aise tout en
                restant élégant. Voici quelques indications concernant le code
                vestimentaire :
            </p>
            <ul>
                <li className="content__list-item">
                    <strong>
                        Pas besoin d&apos;acheter de nouveaux vêtements
                    </strong>{" "}
                    : Nous voulons que vous portiez ce que vous avez déjà, tant
                    que cela reste classe.
                </li>
                <li className="content__list-item">
                    <strong>Costume et cravate non obligatoires</strong> : Vous
                    pouvez opter pour une tenue chic sans pression.
                </li>
                <li className="content__list-item">
                    <strong>Souliers adaptés à l&apos;extérieur</strong> :
                    Pensez à des chaussures confortables, car la cérémonie se
                    déroulera probablement en extérieur. Le code vestimentaire
                    s&apos;appliquera uniquement à la cérémonie.
                </li>
            </ul>

            <h2 className="content__subtitle">
                Attentes en matière de cadeaux
            </h2>
            <p className="content__paragraph">
                Votre présence à notre mariage est le plus beau des cadeaux.
                Nous ne demandons pas de cadeaux et n&apos;avons pas établi de
                liste. Si vous souhaitez offrir quelque chose, sachez que tout
                don sera soit utilisé pour l&apos;événement, soit investi dans
                notre voyage de noces.
            </p>

            <h2 className="content__subtitle">Informations sur le Prix</h2>
            <p className="content__paragraph">
                Nous avons loué un magnifique chalet célébrer notre mariage.
                Voici quelques détails importants :
            </p>
            <ul>
                <li className="content__list-item">
                    <strong>Hébergement</strong> : Tous les invités sont les
                    bienvenus pour rester sur place sans frais supplémentaires.
                    Si vous préférez dormir ailleurs qu&apos;au chalet, il est
                    possible selon vos propres moyens. Cependant, le prix
                    restera le même comme votre place est déjà réservée.
                </li>
                <li className="content__list-item">
                    <strong>Repas</strong> : Certains repas dont, le souper du
                    vendredi soir, diner et souper du samedi et déjeuner du
                    dimanche, sont compris. Les autres repas sont au frais des
                    invités.
                </li>
            </ul>

            <p className="content__paragraph">
                Nous avons hâte de célébrer ce moment spécial avec vous et de
                créer des souvenirs inoubliables ensemble !
            </p>

            <h2 className="content__subtitle">“Un discours! Un discours!”</h2>
            <p className="content__paragraph">
                Si vous souhaitez faire une allocution ou toute autre
                intervention pendant notre mariage, nous sommes totalement
                ouverts à cela ! Nous organiserons un moment et un temps pour
                ces interventions. Si vous êtes intéressé, faites-le nous
                savoir, et nous vous communiquerons les détails.
            </p>

            <p className="content__paragraph">
                Nous avons hâte de célébrer ce moment spécial avec vous et de
                créer des souvenirs inoubliables ensemble !
            </p>

            <h2 className="content__subtitle">Paiement</h2>
            <p className="content__paragraph">
                Pour nous permettre de prévoir les différents achats, nous
                aimerions recevoir votre paiement avant le 1er juin 2025. Vous
                pouvez faire votre paiement à l’aide d’un virement bancaire :
                581 988-8475.
            </p>
            <p className="content__paragraph self-start">
                Nous garderons un registre des paiements reçus de notre côté.
            </p>

            <h2 className="content__subtitle">Musique</h2>
            <p className="content__paragraph">
                Restez à l’affût nous metterons à disposition une méthode pour
                que vous puissiez nous suggérer des chansons pour la soirée
                dansante.
            </p>
        </section>
    );
};

export default Text;
