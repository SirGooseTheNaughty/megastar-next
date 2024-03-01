import Image from "next/image";
import Link from "next/link";
import { EventType } from "@/app/types";

export const Tile = (
    {
        id,
        type,
        title,
        text,
        image,
        year,
        rootUrl = process.env.SRC_PHOTOS
    }: {
        id: string;
        type: EventType;
        title: string;
        text?: string;
        image?: string;
        year?: string;
        rootUrl?: string;
    }
) => {
    const link = year ? `?year=${year}&${type}=${id}` : `?${type}=${id}`;
    return (
        <Link href={link} scroll={false} className="flex relative w-[32%] aspect-4/3 cursor-pointer">
            {image && (
                <Image src={`${rootUrl}/${image}`} alt={title} width={400} height={300} className="absolute w-full h-full" />
            )}
            <div
                className="h-full w-full flex flex-col justify-center align-start p-8 z-10 
                bg-lightblue bg-opacity-75 opacity-0 hover:opacity-100 duration-200"
            >
                <h3 className="text-3xl mb-4">{title}</h3>
                {text && <p className="text-2xl text-gray">{text}</p>}
            </div>
        </Link>
    )
};
