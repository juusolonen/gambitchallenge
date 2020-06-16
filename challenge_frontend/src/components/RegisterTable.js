import React from 'react'

const Register = ({registers}) => {

    if(registers) {
        return (
            <div className="table">
                <table>
                    <thead>
                        <tr>
                        <th>Register number</th>
                        <th>Register value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {registers.map(register => (
                            <tr>
                            <td>{register.regNum}</td>
                            <td>{register.value}</td>
                            </tr>
                        ))}
                    </tbody>
    
                </table>
            </div>
        )
    }
    return (
        <div>
vittupaska
        </div>
    )
}

export default Register