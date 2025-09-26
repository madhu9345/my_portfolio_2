import Feed from './Feed';
import Sidebar from './Sidebar'
import Suggesstions from './Suggesstions';
import DarkModeToggle from './DarkModeToggle';
function App() {
  return (
    <div className="d-flex vh-100">
      <div className="w-20"><Sidebar/></div>
      <div className="w-50"><Feed/></div>
      <div className="w-30"><Suggesstions/></div>
      <div><DarkModeToggle/></div>
    </div>
  );
}

export default App
//npx json-server --watch db.json --port 3000