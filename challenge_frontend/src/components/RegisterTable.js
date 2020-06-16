import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
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
                <FontAwesomeIcon className="chevron" icon={faChevronLeft} id="prev" onClick={handleClick} />
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
               <FontAwesomeIcon className="chevron" icon={faChevronRight} id="next" onClick={handleClick} />
            </div>
        )
    }

    return null

}

export default RegisterTable