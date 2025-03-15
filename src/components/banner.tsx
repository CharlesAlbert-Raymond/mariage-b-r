const Banner = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="sticky left-0 right-0 top-0 z-50 border border-pink-300 bg-pink-100 p-4 w-full">
            <p className="text-center text-sm md:text-base">
            {children}
            </p>
        </div>
    );
};

export default Banner;
