import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
    children?: ReactNode;
    animation: string;
    startClass?: string;
    endClass?: string;
    rootMargin?: string;
    triggerOnce?: boolean;
    className?: string;
    style?: React.CSSProperties;
}

const AnimationTrigger = ({
    children,
    rootMargin = "-100px",
    animation,
    startClass = "index-module--noShow--b534f",
    endClass = "",
    triggerOnce = true,
    className,
    style
}: Props) => {
    const { ref, inView } = useInView({
        rootMargin: rootMargin,
        triggerOnce: triggerOnce
    });
    return (
        <div ref={ref} className={className} style={style}>
            <p className={inView ? animation : startClass}>{children}</p>
        </div>
    );
};

export default AnimationTrigger;