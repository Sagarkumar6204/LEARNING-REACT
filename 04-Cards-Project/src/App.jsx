
import Card from './components/Card';
import User from './components/User';
function App() {
  let arr=[{user:'sagar'},{user:'niraj'},{user:'roshan'}];
 
  return (
    <div className='parent'>
       { arr.map(function(ele){
        return <h1>{ele}</h1>;
       })}
       
       
    
    </div>
  )
}

export default App
