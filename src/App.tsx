// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Member from './pages/Member/Member'


export default function App() {
  // console.log(teamFilter)

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home />}/>
            <Route path="member" element={<Member />}/>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
