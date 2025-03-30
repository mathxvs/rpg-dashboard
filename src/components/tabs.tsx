import React from "react";
import { createContext } from "@/libs/createContext";
import { useControlledState } from "@/libs/useControlledState";
import { twMerge } from "tailwind-merge";

// TABS ROOT ===================================================================
const TABS_NAME = "Tabs";

type RootElement = React.ComponentRef<"div">;

interface RootProps extends React.ComponentProps<"div"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (val: string) => void;
}

type TabsContextValue = RootProps & {
    contextId: string;
};

const [TabsProvider, useTabsContext] =
    createContext<TabsContextValue>(TABS_NAME);

const TabsRoot = React.forwardRef<RootElement, RootProps>((props, ref) => {
    const {
        value: valueProp,
        defaultValue,
        onValueChange,
        children,
        ...rootProps
    } = props;

    const [value, setValue] = useControlledState({
        prop: valueProp,
        defaultProp: defaultValue,
        onChange: onValueChange,
    });

    return (
        <TabsProvider
            ref={ref}
            contextId={React.useId()}
            value={value}
            onValueChange={setValue}
            {...rootProps}
        >
            {children}
        </TabsProvider>
    );
});

// TABS LIST ===================================================================

type ListElement = React.ComponentRef<"nav">;

type ListProps = React.ComponentProps<"nav">;

const TabsList = React.forwardRef<ListElement, ListProps>((props, ref) => {
    const { children, className, ...listProps } = props;

    const style: typeof className = "flex w-full flex-row gap-2 mb-4";

    return (
        <nav ref={ref} className={twMerge(style, className)} {...listProps}>
            {children}
        </nav>
    );
});

// TABS TRIGGER ================================================================

const TRIGGER_NAME = "TabsTrigger";

type TriggerElement = React.ComponentRef<"button">;

interface TriggerProps extends React.ComponentProps<"button"> {
    value: string;
}

const TabsTrigger = React.forwardRef<TriggerElement, TriggerProps>(
    (props, ref) => {
        const {
            value,
            children,
            className,
            disabled = false,
            ...triggerProps
        } = props;

        const context = useTabsContext(TRIGGER_NAME);
        const isSelected = value === context.value;

        const style = {
            base: "p-2 rounded-md text-neutral-11  font-medium flex-1 items-center justify-center text-center cursor-pointer transition-all",
            unselected:
                "bg-transparent hover:bg-neutral-3 focus-visible:bg-neutral-3 active:opacity-80 focus-visible:ring-2 ring-ecos-gold",
            selected:
                "bg-ecos-gold text-ecos-blue hover:bg-ecos-gold/80 focus-visible:bg-ecos-gold/80 active:opacity-80 focus-visible:ring-2 ring-ecos-gold",
            disabled: "cursor-not-allowed",
        };

        return (
            <button
                ref={ref}
                tabIndex={disabled ? -1 : 0}
                aria-selected={isSelected}
                data-state={isSelected ? "selected" : "unselected"}
                data-disabled={disabled ? "" : undefined}
                value={value}
                className={twMerge(
                    style.base,
                    !disabled && isSelected && style.selected,
                    !disabled && !isSelected && style.unselected,
                    disabled && style.disabled,
                    className
                )}
                onClick={(event) => {
                    if (!disabled && context.onValueChange) {
                        context.onValueChange(value);
                    } else {
                        event.preventDefault();
                    }
                }}
                onFocus={() => {
                    if (!isSelected && !disabled && context.onValueChange) {
                        context.onValueChange(value);
                    }
                }}
                {...triggerProps}
            >
                {children}
            </button>
        );
    }
);

// TABS CONTENT ================================================================

const CONTENT_NAME = "TabsContent";

type ContentProps = {
    value: string;
    children: React.ReactNode;
};

const TabsContent = (props: ContentProps) => {
    const { value, children } = props;

    const context = useTabsContext(CONTENT_NAME);
    const isSelected = context.value == value;

    return isSelected && children;
};

export {
    TabsRoot as Root,
    TabsList as List,
    TabsTrigger as Trigger,
    TabsContent as Content,
};
