'use client';

import { useEffect, useRef } from "react";

export const useAutoFocus = <T extends HTMLElement>() => {
    const ref = useRef<T>(null);

    useEffect(() => {
        ref.current?.focus?.();
        console.log(ref.current);
    }, [ref]);

    return ref;
};
