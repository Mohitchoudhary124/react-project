import React from 'react'

export default function Message(props) {
  return (
    <div className={props.addclass}>
      <div className='message'>
        <div className='msg-content'>
          <p>{props.message}</p>
        </div>
      </div>
    </div>
  )
}
