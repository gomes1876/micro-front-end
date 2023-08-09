import { useEffect } from "react"
import { useInfoStore } from "@codenapp/app-store"

export default function () {
    const { state, setState } = useInfoStore();

    function onHandleClick() {

        const data = new Date();
        const info = data.getTime()
        console.log(`salvo pelo app-store usando zustand store ${info}`);

        setState({
            info: `salvo pelo app-store usando zustand store ${info}`
        })
    }

    return (
        <>
            <button onClick={onHandleClick}>update zustand store</button>
            
            <br />
            <span>{state.info}</span>
        </>
    )

}