import React from 'react'

const Register = ({register}) => {
    return (
        <tr>
        <td>{register.regNum}</td>
        <td>{register.value}</td>
        </tr>
    )
}

export default Register