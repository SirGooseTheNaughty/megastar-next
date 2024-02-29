export const Heading = ({ id, t, title = null }) => {
    return (
        <div id={id} className="bg-lightblue">
            <h2 className="text-5xl font-bold capitalize py-8 px-20">{title || t(id)}</h2>
        </div>
    )
};
