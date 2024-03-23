export const Heading = ({ id, t, title = null }) => {
    return (
        <div id={id} className="bg-lightblue">
            <h2 className="container m-auto text-4xl md:text-5xl font-bold capitalize py-8 px-4 md:px-0">{title || t(id)}</h2>
        </div>
    )
};
