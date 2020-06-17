import React, { useEffect } from 'react'
import Register from './Register'


const RegisterTable = ({setRegValues, toShow, setToShow, registers}) => {

    useEffect(() => {
        let ES = new EventSource('http://localhost:3003/stream')
        ES.onmessage = e => {
            console.log(e)
            helper(JSON.parse(e.data))
        }
    }, [])
    
    const helper = (data) => {
     DataService.getData(JSON.parse(data))
      .then(data => {
        setRegValues(data)
        setReg1(data.registers.splice(0,20))
        setReg2(data.registers.splice(0,20))
        setReg3(data.registers.splice(0,20))
        setReg4(data.registers.splice(0,20))
        setReg5(data.registers.splice(0,20))
     })
    }

    const handleClick = (e) => {
        if (e.target.id === 'next') {
            toShow < 5 ? setToShow(toShow + 1) : setToShow(1)
        }
        if (e.target.id === 'prev') {
            toShow > 1 ? setToShow(toShow - 1) : setToShow(5)
        }

    }

    if(registers) {
        return (
            <div className="table">
                <button id="prev" onClick={handleClick}>prev</button> 
                <table>
                    <thead>
                        <tr>
                        <th>Register number</th>
                        <th>Register value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registers.map(register => (
                            <Register key={register.regNum} register={register} />
                        ))}
                    </tbody>
    
                </table>
               <button id="next" onClick={handleClick}>next</button> 
            </div>
        )
    }

    return null

}

export default RegisterTable