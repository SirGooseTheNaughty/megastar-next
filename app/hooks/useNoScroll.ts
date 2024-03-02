import { useEffect } from "react";

export const blockScroll = () => document.body.classList.add('noscroll');
export const unblockScroll = () => document.body.classList.remove('noscroll');

export const useNoScroll = () => {
    useEffect(() => {
        blockScroll();

        return () => {
            unblockScroll();
        }
    }, []);
};
