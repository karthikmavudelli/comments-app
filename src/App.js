import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn/index'
import Comments from './components/Comments/index'
import SignUp from './components/SignUp/index'
import ForgotPassword from './components/ForgotPassword/index'


const App = () => (
  <BrowserRouter>
      <Routes>
      <Route exact path = '/signup' element={<SignUp/>}/>
      <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
      <Route exact path="/" element={<SignIn/>}/>
      <Route exact path="/comments" element={<Comments/>} />
      </Routes>
    </BrowserRouter>
)
export default App 