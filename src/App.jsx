
import {Routes,Route} from 'react-router-dom'
import Form from './project/Form'
import Users from './project/Users'

function App() {


  return (
    <Routes>
      <Route index element={<Form/>}/>
      <Route path='/user' element={<Users/> } />
    </Routes>
  )
}

export default App
