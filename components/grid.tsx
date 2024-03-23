export const Grid = ({ children }) => {
    return (
        <div className="container m-auto flex flex-wrap justify-center gap-x-[2%] gap-y-8 py-10 md:py-20 px-4 md:px-0">
            {children}
        </div>
    );
};
