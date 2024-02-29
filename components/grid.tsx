export const Grid = ({ children }) => {
    return (
        <div className="my-container flex flex-wrap justify-center gap-x-[2%] gap-y-8 p-20">
            {children}
        </div>
    );
};
