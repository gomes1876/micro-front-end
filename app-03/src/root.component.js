import FixedView from "./screen/FixedView";
import ReceptData from "./components/ReceptData";
export default function Root(props) {
  return (
    <section>
      <FixedView />
      <ReceptData />
    </section>
  );
}
