import React from 'react'
import {Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
// import CreateUser from './pages/CreateUser';
// import ShowUser from './pages/ShowUser';
// import EditUser from './pages/EditUser';
// import DeleteUser from './pages/DeleteUser';


const App = () => {
  return (

    <Routes>
      <Route path ='/' element={<LandingPage/>}/>
      {/* <Route path ='/users/create' element={<CreateUser/>}/>
      <Route path ='/users/details/:id' element={<ShowUser/>}/>
      <Route path ='/users/edit/:id' element={<EditUser/>}/>
      <Route path ='/users/delete/:id' element={<DeleteUser/>}/> */}
    </Routes>
  )
}

export default App;