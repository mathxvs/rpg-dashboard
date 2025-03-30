import React from "react";
import { useCallbackRef } from "./useCallbackRef";

type UseControlledStateParams<T> = {
    prop?: T | undefined;
    defaultProp?: T | undefined;
    onChange?: (state: T) => void;
};

type SetStateFunction<T> = (prevState?: T) => T;

function useControlledState<T>({
    prop,
    defaultProp,
    onChange = () => {},
}: UseControlledStateParams<T>) {
    const [uncontrolledProp, setUncontrolledProp] = useUncontrolledState({
        defaultProp,
        onChange,
    });
    const isControlled = prop !== undefined;
    const value = isControlled ? prop : uncontrolledProp;
    const handleChange = useCallbackRef(onChange);

    const setValue: React.Dispatch<React.SetStateAction<T | undefined>> =
        React.useCallback(
            (newValue) => {
                if (isControlled) {
                    const setter = newValue as SetStateFunction<T | undefined>;
                    const value =
                        typeof newValue === "function"
                            ? setter(prop)
                            : newValue;

                    if (value !== prop) handleChange(value as T);
                } else {
                    setUncontrolledProp(newValue);
                }
            },
            [isControlled, prop, handleChange, setUncontrolledProp]
        );

    return [value, setValue] as const;
}

function useUncontrolledState<T>({
    defaultProp,
    onChange = () => {},
}: Omit<UseControlledStateParams<T>, "prop">) {
    const uncontrolledState = React.useState<T | undefined>(defaultProp);
    const [value] = uncontrolledState;
    const prevValueRef = React.useRef(value);
    const handleChange = useCallbackRef(onChange);

    React.useEffect(() => {
        if (prevValueRef.current !== value) {
            handleChange(value as T);
            prevValueRef.current = value;
        }
    }, [value, prevValueRef, handleChange]);

    return uncontrolledState;
}

export { useControlledState };
