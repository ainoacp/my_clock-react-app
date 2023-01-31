import { useEffect, useState } from "react"

export default function CountdownPage() {
    
    const [time, setTime] = useState('');
    
    useEffect(() => {
        let countdownDate = new Date("February 23, 2023 17:00:00").getTime();
        let left = setInterval(() => {
            let now = new Date().getTime();
            let timeLeft = countdownDate - now;
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            setTime(days + 'd' + hours + 'h' + minutes + 'm' + seconds + 's');

            if(timeLeft < 0) {
                clearInterval(left);
                setTime("COUNTDOWN FINISHED!")
            }
        }, 1000);

    }, []);
    
    return (
    <div className="countdown">
        <h2>{time}</h2>
    </div>
    );
}