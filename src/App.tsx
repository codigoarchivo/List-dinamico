import { ListProvider } from "./context";
import { DataList } from "./components";
import "./styles.css";

export default function App() {
  return (
    <ListProvider>
      <div className={"App"}>
        <DataList />
      </div>
    </ListProvider>
  );
}
