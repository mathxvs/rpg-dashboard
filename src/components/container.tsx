import React from "react";
import { twMerge } from "tailwind-merge";

type ContainerElement = React.ComponentRef<"div">;

type ContainerProps = React.ComponentProps<"div">;

const Container = React.forwardRef<ContainerElement, ContainerProps>(
    (props, ref) => {
        const { children, className, ...containerProps } = props;

        const style: typeof className =
            "rounded-md bg-neutral-2 border border-neutral-6/30 p-6";

        return (
            <div
                ref={ref}
                className={twMerge(style, className)}
                {...containerProps}
            >
                {children}
            </div>
        );
    }
);

export default Container;
