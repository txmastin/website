"use client"

import styles from "./page.module.css"
import {Button} from "@/components/Button.tsx"
import {useState, useEffect} from "react"

function Page() {
    const [count, setCount] = useState(0);
    const [doubleCount, setDoubleCount] = useState(0);
    useEffect(() => {
        setDoubleCount(count * 2);
    }, [count])
    const handleClick = () => {
        console.log("Clicked");
        setCount(count + 1); 
        }
    return (
        <div>
            <div className={styles.wrapper}> Count: {count} </div>
            <br/> 
            <div> Double Count: {doubleCount} </div>
            <Button onClick={handleClick}>Click Me!</Button>
        </div>
    )
};

export default Page;
