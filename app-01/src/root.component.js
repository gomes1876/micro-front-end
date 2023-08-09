import { useState, useEffect } from "react"
import Button from "./components/Button";

import { useInfoStore } from "@codenapp/app-store"
export default function Root(props) {

  const { state, setState } = useInfoStore();
  const [shared, setShared] = useState("")

  useEffect(() => {
    setShared(state.info)
  }, [state])

  return <section>
    <>
      app 01
      <br />
      <Button />
      <span>####################</span>
      <span>{shared}</span>
      <span>####################</span>
    </>
  </section>;
}
