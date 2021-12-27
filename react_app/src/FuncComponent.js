import React from 'react'

export default function FuncComponent({props}) {
    return (
        <div>
              <h1>Привет, {props.name} {props.lastname} из функции!</h1>;
        </div>
    )
}

