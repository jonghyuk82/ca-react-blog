import React from 'react'

function Modal(props) {
  return (
    <div className='modal' style={{ background: props.color }}>
      <h4>{props.title[props.titleStatus]}</h4>
      <p>Date</p>
      <p>Desctiption</p>
      <button
        onClick={() => {
          let copy = [...props.title]
          copy[0] = "Women's Coat"
          props.setTitle(copy)
        }}
      >
        Edit
      </button>
    </div>
  )
}

export default Modal
