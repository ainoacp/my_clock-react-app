import { useEffect, useState } from "react"

export default function StopwatchPage() {
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);

    useEffect(() => {
        let interval = null;
        if(start) {
            interval = setInterval(() => { // esto ejecuta el proceso de almacenar el valor del tiempo y almacena el tiempo obtenido
                setTime((reload) => reload + 10); // esto almacena el valor del tiempo cada 10 milisegundos
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [start]);

    return (
        <div className="c-stopwatch">
            <div className="c-stopwatch-timer">
                <span>{('0' + Math.floor((time / 6000) % 60)).slice(-2)}:</span> 
                <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div className="c-stopwatch-buttons">
                {!start && time === 0 && (<button onClick={() => setStart(true)}>Start</button>)}
                {start && <button onClick={() => setStart(false)}>Stop</button>}    
                {!start && time > 0 && (<button onClick={() => setStart(true)}>Restart</button>)}
                {!start && time > 0 && (<button onClick={() => setTime(0)}>Reset</button>)}
            </div>
        </div>
    );
}