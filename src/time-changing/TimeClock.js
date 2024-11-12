import React, { useEffect, useState } from "react";

const TimeCLock = () => {

    const [sec, setSec] = useState(new Date().getSeconds());
    const [min, setMin] = useState(new Date().getMinutes());
    const [hour, setHour] = useState(new Date().getHours());

    useEffect(
        () => {
            setInterval(() => {

                setSec(new Date().getSeconds())
                setMin(new Date().getMinutes())
                setHour(new Date().getHours());

            }, 1000)

        }

    )
    return (<>
        <h2># Time Changer</h2>
        <div style={{ padding: '10px 40px', border: '1px solid black', borderRadius: '5px', margin: '5px', display: 'inline-block' }}>
            <p>{hour}:{min < 10 ? `0${min}` : min} : {sec < 10 ? `0${sec}` : sec}</p>
        </div></>
    )
}

export default TimeCLock;