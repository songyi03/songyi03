import "./App.css";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd/dist/core";
import { BrowserRouter } from "react-router-dom";
import { RoutesSetup } from "./routes/RoutesSetup";
import { AuthProvider } from "./contexts";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <BrowserRouter>
        <AuthProvider>
          <RoutesSetup />
        </AuthProvider>
      </BrowserRouter>
    </DndProvider>
  );
}

export default App;
