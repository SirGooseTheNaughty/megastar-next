import Image from 'next/image';

export async function generateStaticParams() {
    return { props: {} };
};

export default async function OpengraphImage() {
    return <Image src='/hero-cover.jpg' alt='' />;
};
