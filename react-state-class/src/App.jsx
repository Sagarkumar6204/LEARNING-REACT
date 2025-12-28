import './App.css'
import Counter from './counter';   // ✅ Capitalized component name
import LikeButton from './LikeButton';

function App() {
  return (
    <div>
      <h1>States in React</h1>
      <Counter />   {/* ✅ Proper JSX component usage */}
    </div>
  )
}

export default App;
