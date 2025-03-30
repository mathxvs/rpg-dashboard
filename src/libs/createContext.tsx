import React from "react";

function createContext<ContextValueType extends object | null>(
    rootName: string,
    defaultContext?: ContextValueType
) {
    const Context = React.createContext<ContextValueType | undefined>(
        defaultContext
    );

    const Provider: React.FC<
        ContextValueType & { children: React.ReactNode }
    > = (props) => {
        const { children, ...context } = props;

        // Only re-memoize when prop value changes
        const value = React.useMemo(
            () => context,
            Object.values(context)
        ) as ContextValueType;

        return <Context.Provider value={value}> {children} </Context.Provider>;
    };

    function useContext(consumerName: string) {
        const context = React.useContext(Context);

        if (context) return context;
        if (defaultContext !== undefined) return defaultContext;

        throw new Error(
            `\`${consumerName}\` must be used within \`${rootName}\``
        );
    }

    return [Provider, useContext] as const;
}

export { createContext };
