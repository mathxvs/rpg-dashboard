function composeEventHandler<E>(
    prevHandler?: (event: E) => void,
    newHandler?: (event: E) => void,
    { checkDefaultPrevented = false } = {}
) {
    return function handleEvent(event: E) {
        prevHandler?.(event);

        if (
            checkDefaultPrevented === false ||
            !(event as unknown as Event).defaultPrevented
        ) {
            return newHandler?.(event);
        }
    };
}

export { composeEventHandler };
