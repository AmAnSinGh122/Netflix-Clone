import Body from "./components/body.js";
import { Toaster } from 'react-hot-toast';
import MovieDialog from "./components/movieDialog.js";

function App() {
  return (
    <div>
      <Body/>
      <Toaster/>
      <MovieDialog/>
    </div>
  );
}

export default App;
