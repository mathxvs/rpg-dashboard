import React from "react";
import { twMerge } from "tailwind-merge";

type RootElement = React.ComponentRef<"div">;

type RootProps = React.ComponentProps<"div">;

const TableRoot = React.forwardRef<RootElement, RootProps>((props, ref) => {
    const { children, className, ...rootProps } = props;

    const style: typeof className = "flex flex-col gap-2";

    return (
        <div ref={ref} className={twMerge(style, className)} {...rootProps}>
            {children}
        </div>
    );
});

type HeaderElement = React.ComponentRef<"header">;

type HeaderProps = React.ComponentProps<"header">;

const TableHeader = React.forwardRef<HeaderElement, HeaderProps>(
    (props, ref) => {
        const { children, className, ...headerProps } = props;

        const style: typeof className =
            "flex w-full gap-2 bg-neutral-1 p-2 text-xs rounded-xs font-medium text-neutral-11 uppercase";

        return (
            <header
                ref={ref}
                className={twMerge(style, className)}
                {...headerProps}
            >
                {children}
            </header>
        );
    }
);

type RowElement = React.ComponentRef<"div">;

interface RowProps extends React.ComponentProps<"div"> {
    clickable?: boolean;
}

const TableRow = React.forwardRef<RowElement, RowProps>((props, ref) => {
    const { children, className, clickable = false, ...headerProps } = props;

    const style: typeof className =
        "flex flex-row items-center gap-2 rounded-sm p-2 text-sm";

    const styleClickable: typeof className =
        "hover:bg-neutral-3 transition-all cursor-pointer focus-visible:ring-2 focus-visible:hover:bg-neutral-3 ring-ecos-gold";

    return (
        <div
            ref={ref}
            className={twMerge(style, clickable && styleClickable, className)}
            {...headerProps}
        >
            {children}
        </div>
    );
});

type CellElement = React.ComponentRef<"span">;

interface CellProps extends React.ComponentProps<"span"> {
    align?: "start" | "center" | "end";
    flexible?: boolean;
}

const TableCell = React.forwardRef<CellElement, CellProps>((props, ref) => {
    const {
        align,
        flexible = false,
        children,
        className,
        ...cellProps
    } = props;

    const style: typeof className = "flex items-center tracking-wide";

    const styleFlexible = flexible ? "flex-1" : "";

    const styleAlign: () => typeof className = () => {
        switch (align) {
            default:
            case "start":
                return "text-start justify-start";
            case "center":
                return "text-center justify-center";
            case "end":
                return "text-end justify-end";
        }
    };

    return (
        <span
            ref={ref}
            className={twMerge(style, styleFlexible, styleAlign(), className)}
            {...cellProps}
        >
            {children}
        </span>
    );
});

export {
    TableRoot as Root,
    TableHeader as Header,
    TableCell as Cell,
    TableRow as Row,
};
