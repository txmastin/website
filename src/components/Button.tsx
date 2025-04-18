"use client"
import {ReactNode} from "react";

export function Button(props: {onClick:() => void; children: ReactNode}) {
    const onClick = props.onClick;
    const children = props.children;
    return <button onClick={onClick}>{children}</button>
};
