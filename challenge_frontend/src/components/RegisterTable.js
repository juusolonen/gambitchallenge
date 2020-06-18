import React from 'react'
import Register from './Register'


const RegisterTable = ({toShow, setToShow, registers}) => {

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