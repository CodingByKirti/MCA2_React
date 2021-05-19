import React from 'react'

export const MyComp = (props) => {
    const currDate =new Date().toDateString()
    const currTime =new Date().toTimeString()
    return (
        <div>
            Current Date {currDate} {props.data}  and Time {currTime}
        </div>
    )
}
