import React from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Form from './Form'
import Viewpage from './Viewpage'
import Updatepage from './Updatepage'

export default function landing() {
  return (
    <div>
      <BrowserRouter>
        <Link to='/viewPage'>View User</Link>
      <Routes>
        <Route path='/'   element={<Form/>}/>
        <Route path='/viewpage'   element={<Viewpage/>}/>
        <Route path='/updatepage/:id' element={<Updatepage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
