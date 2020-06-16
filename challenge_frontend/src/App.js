/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import DataService from './services/DataService'
import Header from './components/Header'
import RegisterTable from './components/RegisterTable'
import './App.css'

function App() {

  const [toShow, setToShow] = useState(1)
  const [regValues, setRegValues] = useState({})
  const [reg1, setReg1] = useState([])
  const [reg2, setReg2] = useState([])
  const [reg3, setReg3] = useState([])
  const [reg4, setReg4] = useState([])
  const [reg5, setReg5] = useState([])

  const some = [1,2,3,4,5]

  useEffect(() => {
    DataService.getData()
      .then(data => {
        setRegValues(data)
        setReg1(data.registers.splice(0,20))
        setReg2(data.registers.splice(0,20))
        setReg3(data.registers.splice(0,20))
        setReg4(data.registers.splice(0,20))
        setReg5(data.registers.splice(0,20))
      })
  }, [])

  return (
    <div className="App">
      <Header date={regValues.date} />
      {toShow === 1 && <RegisterTable registers={reg1} toShow={toShow} setToShow={setToShow} /> } 
      {toShow === 2 && <RegisterTable registers={reg2} toShow={toShow}  setToShow={setToShow} /> } 
      {toShow === 3 && <RegisterTable registers={reg3} toShow={toShow}  setToShow={setToShow} /> } 
      {toShow === 4 && <RegisterTable registers={reg4} toShow={toShow}  setToShow={setToShow} /> } 
      {toShow === 5 && <RegisterTable registers={reg5} toShow={toShow}  setToShow={setToShow} /> } 
    </div>
  )
}

export default App
