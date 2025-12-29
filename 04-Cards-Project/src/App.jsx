
import { Bookmark } from 'lucide-react';
function App() {
  return (
    <div className='parent'>

      <div className="card">
    <div>    <div className="top">
          <img src="https://th.bing.com/th/id/OIP.XsZfT61yMNN0f4QX81_oFAHaHa?w=161&h=150&c=6&o=7&dpr=1.3&pid=1.7&rm=3" alt="" />
          <button>Save<Bookmark size={12}  /></button>
        </div>

        <div className="center">
        <h3>Amazon <span>5 days ago</span></h3>
        <h2>Senior UI/UX Designer</h2>
        </div>
        <div className='tag'>
          <h4>Part Time</h4>
        <h4>Senior Level</h4>
        </div>
        </div>
        
        <div className="bottom">
        <div>
         
           <h3>$120/hr</h3>
           <p>Mumbai, India</p>
          
         
        </div>
         <button>Appy Now</button>
        </div>
      </div>

    </div>
  )
}

export default App
