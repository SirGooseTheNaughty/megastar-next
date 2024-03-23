import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export const useDirectClick = (handler?: Function) => {
    const router = useRouter();
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const { current } = ref;

        const onClick = (event: MouseEvent) => {
            if (event.target === current) {
                handler ? handler() : router.back();
            }
        };

        current?.addEventListener?.('click', onClick);
        return () => current?.removeEventListener?.('click', onClick);
    }, [ref, handler, router]);

    return ref;
};
