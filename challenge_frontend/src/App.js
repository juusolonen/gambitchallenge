/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import DataService from './services/DataService'
import Header from './components/Header'
import RegisterTable from './components/RegisterTable'
import './App.css'

function App() {

  const [regValues, setRegValues] = useState({})

  useEffect(() => {
    DataService.getData()
      .then(data => {
        setRegValues(data)
      })

  }, [])

  return (
    <div className="App">
      <Header date={regValues.date} />
     <RegisterTable registers={regValues.registers} />
    </div>
  )
}

export default App
