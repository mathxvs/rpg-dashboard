import { composeEventHandler } from "@/libs/composeEventHandler";
import { createContext } from "@/libs/createContext";
import { useControlledState } from "@/libs/useControlledState";
import React from "react";
import { twMerge } from "tailwind-merge";

function getState(open?: boolean) {
    return open ? "open" : "closed";
}

// COLLAPSIBLE ROOT ============================================================
const COLLAPSIBLE_NAME = "Collapsible";

type CollapsibleElement = React.ComponentRef<"div">;

type CollapsibleProps = React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    disabled?: boolean;
    onChange?(open: boolean): void;
};

type CollapsibleContextValue = {
    contentId: string;
    disabled?: boolean;
    open: boolean;
    onChange(): void;
};

const [CollapsibleProvider, useCollapsibleContext] =
    createContext<CollapsibleContextValue>(COLLAPSIBLE_NAME);

const CollapsibleRoot = React.forwardRef<CollapsibleElement, CollapsibleProps>(
    (props, ref) => {
        const {
            defaultOpen,
            open: openProp,
            disabled = false,
            onChange,
            children,
            className,
            ...collapsibleProps
        } = props;

        const [open = false, setOpen] = useControlledState({
            prop: openProp,
            defaultProp: defaultOpen,
            onChange,
        });

        return (
            <CollapsibleProvider
                contentId={React.useId()}
                disabled={disabled}
                open={open}
                onChange={React.useCallback(
                    () => setOpen((prev) => !prev),
                    [setOpen]
                )}
            >
                <div
                    ref={ref}
                    className={twMerge(className)}
                    {...collapsibleProps}
                >
                    {children}
                </div>
            </CollapsibleProvider>
        );
    }
);

// COLLAPSIBLE TRIGGER =========================================================
const TRIGGER_NAME = "CollapsibleTrigger";

type TriggerElemeent = React.ComponentRef<"button">;

type TriggerProps = React.ComponentProps<"button">;

const CollapsibleTrigger = React.forwardRef<TriggerElemeent, TriggerProps>(
    (props, ref) => {
        const { children, className, ...triggerProps } = props;

        const context = useCollapsibleContext(TRIGGER_NAME);

        const stylePointer: typeof className = !context.disabled
            ? "cursor-pointer"
            : "cursor-not-allowed";

        return (
            <button
                ref={ref}
                type="button"
                aria-controls={context.contentId}
                aria-expanded={context.open || false}
                data-state={getState(context.open)}
                data-disbaled={context.disabled}
                disabled={context.disabled}
                className={twMerge(stylePointer, className)}
                onClick={composeEventHandler(props.onClick, context.onChange)}
                {...triggerProps}
            >
                {children}
            </button>
        );
    }
);

// COLLAPSIBLE CONTENT =========================================================
const CONTENT_NAME = "CollapsibleContent";

type ContentElement = React.ComponentRef<"div">;

type ContentProps = React.ComponentProps<"div">;

// interface ContentProps extends React.ComponentProps<"div"> {
//     present: boolean
// }

const CollapsibleContent = React.forwardRef<ContentElement, ContentProps>(
    (props, ref) => {
        const { children, ...contentProps } = props;

        const context = useCollapsibleContext(CONTENT_NAME);
        // const [isPresent, setIsPresent] = React.useState(present);

        // const isOpen = context.open || isPresent;

        return (
            <div
                ref={ref}
                data-state={getState(context.open)}
                data-disabled={context.disabled ? "" : undefined}
                id={context.contentId}
                hidden={!context.open}
                {...contentProps}
            >
                {context.open && children}
            </div>
        );
    }
);

export {
    CollapsibleRoot as Root,
    CollapsibleTrigger as Trigger,
    CollapsibleContent as Content,
};
