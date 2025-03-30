import type {
    Icon as PhIcon,
    IconWeight as PhIconWeight,
    IconProps as PhIconProps,
} from "@phosphor-icons/react";
import React from "react";

type IconElement = PhIcon;

type IconProps = {
    icon: PhIcon;
    weight?: PhIconWeight;
    options?: PhIconProps;
    className?: React.ComponentProps<"div">["className"];
};

const Icon = React.forwardRef<IconElement, IconProps>((props) => {
    const { icon, weight, options, className } = props;

    const Comp = React.createElement(icon, { weight, ...options, className });

    return Comp;
});

export default Icon;
