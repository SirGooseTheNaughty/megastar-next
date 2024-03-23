import { useEffect } from "react";

type EventMap = {
    [key: string]: Function;
}

export const useHandleKeyPress = (eventMap: EventMap, target: HTMLElement = document.body) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            eventMap?.[event.key]?.();
        };

        target?.addEventListener?.('keydown', handleKeyPress);

        return () => target?.removeEventListener?.('keydown', handleKeyPress);
    }, [eventMap, target]);
};
