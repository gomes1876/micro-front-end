import { useEffect, useState } from "react";

export default function () {

    const [valApp01, setValApp01] = useState("sem valor");
    const [valApp02, setValApp02] = useState("sem valor");
    const [valShared, setValShared] = useState("sem valor");



    function getLocalStorage() {
        const infoApp01 = localStorage.getItem("app-01");
        const infoApp02 = localStorage.getItem("app-02");
        const rootStore = localStorage.getItem("root-store");

        setValApp01(infoApp01)
        setValApp02(infoApp02)
        setValShared(rootStore)

    }

    function handleClickButton() {

        const data = new Date();
        const info = data.getTime()
        console.log(`salvo pelo app-02 ${info}`);

        localStorage.setItem("app-01", `salvo pelo app-01 ${info}`);

        localStorage.setItem("root-store", `salvo pelo app-01 ${info}`);


        getLocalStorage()
    }

    useEffect(() => {
        getLocalStorage()
    }, [])

    return (
        <>
            <button onClick={handleClickButton}>app-01</button>
            <p>valor app 01: {valApp01}</p>
            <p>valor app 02: {valApp02}</p>
            <p>valor compartilhado: {valShared}</p>
        </>
    )
}