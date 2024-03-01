import { useEffect } from "react";

export const useNoScroll = () => {
    useEffect(() => {
        document.body.classList.add('noscroll');

        return () => {
            document.body.classList.remove('noscroll');
        }
    }, []);
};
