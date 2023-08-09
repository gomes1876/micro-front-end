import { useEffect, useState } from "react"

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

    useEffect(() => {
        getLocalStorage()
    }, [])

    function updateStoreShared(){
        const data = new Date();
        const info = data.getTime()
        console.log(`salvo pelo app-03 ${info}`);

        localStorage.setItem("root-store", `salvo pelo app-03 ${info}`);

        getLocalStorage()
    }

    return (
        <>
            <h3>
                Os dados aqui presentes só são atualizados se recarregar a aplicação, ou ao ela iniciar
            </h3>
            <p>{valApp01}</p>
            <p>{valApp02}</p>
            <p>{valShared}</p>
            <button onClick={updateStoreShared}>update store compartilhada</button>
        </>
    )

}