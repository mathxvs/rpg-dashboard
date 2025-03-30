import React from "react";
import { twMerge } from "tailwind-merge";

type AttrCardElement = React.ComponentRef<"div">;

interface AttrCardProps extends React.ComponentProps<"div"> {
    attrName: string;
    attrValue: number;
}

const AttrCard = React.forwardRef<AttrCardElement, AttrCardProps>(
    (props, ref) => {
        const { attrName, attrValue, className, ...attrCardProps } = props;

        const style: typeof className =
            "rounded-sm flex-1 flex flex-col justify-between items-center gap-1 bg-neutral-3 p-2 cursor-pointer hover:bg-neutral-4 focus-visible:bg-neutral-4 transition-all focus-visible:ring-2 ring-ecos-gold";

        return (
            <div
                ref={ref}
                className={twMerge(style, className)}
                tabIndex={0}
                {...attrCardProps}
            >
                <h3 className="text-neutral-11 uppercase tracking-wide font-medium">
                    {attrName}
                </h3>

                <h1 className="text-3xl tracking-wide font-serif font-bold">
                    {attrValue}
                </h1>
            </div>
        );
    }
);

export default AttrCard;
