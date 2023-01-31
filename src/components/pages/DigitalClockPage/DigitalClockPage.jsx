import { useEffect, useState } from "react";

export default function DigitalClockPage() {
    const [clockState, setClockState] = useState();
    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);
    return (
        <div className="c-digital-clock">
            <h2>{clockState}</h2>
        </div>
    )
}