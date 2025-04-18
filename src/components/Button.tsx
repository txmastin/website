"use client"

export function Button(props) {
    const onClick = props.onClick;
    const children = props.children;
    return <button onClick={onClick}>{children}</button>
};
