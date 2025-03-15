import Navbar from "~/components/navbar";

const Page = () => {
    return (
        <>
            <Navbar />
            <div className="flex h-full flex-col items-center justify-center">
                <div className="r-0 t-0 absolute z-10 bg-white p-8 bg-opacity-25 rounded-lg">
                    <p>Chargement...</p>
                    <p>Le calendrier apparaitra bientôt.</p>
                </div>
                <iframe
                    className="h-[100vh] w-full relative z-10"
                    src="https://complex-politician-8ae.notion.site/ebd/1a7caab4b30a80e88340c21f9a0c3df6"
                    loading="eager"
                />
            </div>
        </>
    );
};
export default Page;
