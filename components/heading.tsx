export const Heading = ({ id, t, title = null }) => {
    return (
        <div id={id} className="bg-lightblue">
            <h2 className="text-4xl md:text-5xl font-bold capitalize py-8 px-10 md:px-20">{title || t(id)}</h2>
        </div>
    )
};
