import './App.css';
import {GlobalProvider} from "./components/GlobalContext"
import UserForm from "./components/UserForm"

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <UserForm/>
      </div>
    </GlobalProvider>
  );
}

export default App;
