/* eslint-disable */
import React, { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  let [title, setTitle] = useState([
    "Men's Coat",
    'Tasty Udon Restaurant',
    'Python Study',
  ])

  let [like, setLike] = useState([0, 0, 0])
  let [modal, setModal] = useState(false)
  let [titleStatus, setTitleStatus] = useState(0)
  let [input, setInput] = useState('')
  let [date, setDate] = useState(['Feb 17', 'Mar 5', 'Jun 18'])

  function sortTitle() {
    let dc = [...title]
    dc.sort()
    setTitle(dc)
  }

  function onClickTitle(index) {
    if (titleStatus != index && modal == true) {
      setTitleStatus(index)
    } else if (titleStatus != index && modal == false) {
      setTitleStatus(index)
      setModal(!modal)
    } else if (titleStatus == index && modal == true) {
      setModal(!modal)
    } else {
      setTitleStatus(index)
      setModal(!modal)
    }
  }

  function onSubmit() {
    if (input == '') {
      alert('You must enter title')
    } else {
      let titleArr = [...title]
      // titleArr.push(input)
      titleArr.unshift(input)
      setTitle(titleArr)
      let tempLike = [...like]
      like.unshift(0)
      setLike(like)
      setInput('')
    }
  }

  function onDateChange() {
    //console.log(date)
  }

  return (
    <div className='App'>
      <div className='black-nav'>
        <h4>Blog</h4>
      </div>

      <button
        type='button'
        // onClick={() => {
        //   let copy = [...title]
        //   copy.sort()
        //   setTitle(copy)
        // }}
        onClick={() => sortTitle()}
      >
        Sort
      </button>

      <button
        type='button'
        onClick={() => {
          let copy = [...title]
          copy[0] = "Women's Coat"
          setTitle(copy)
        }}
      >
        Change
      </button>

      {/* <div className='list'>
        <h4>
          {title[0]}
          <span
            className='pointer'
            onClick={() => {
              setLike(like + 1)
            }}
          >
            👍
          </span>
          {like}
        </h4>
        <p>Feb 17</p>
      </div>
      <div className='list'>
        <h4>{title[1]}</h4>
        <p>Feb 17</p>
      </div>
      <div className='list'>
        <h4
          className='pointer'
          onClick={() => {
            modal = !modal
            setModal(modal)
          }}
        >
          {title[2]}
        </h4>
        <p>Feb 17</p>
      </div> */}

      {title.map(function (a, i) {
        return (
          <div className='list' key={i}>
            <h4 className='pointer' onClick={() => onClickTitle(i)}>
              {title[i]}
              <span
                className='pointer'
                onClick={(e) => {
                  e.stopPropagation() // 상위 html테그 눌러지는걸 방지 prevent event bubbling
                  let copy = [...like]
                  copy[i] = copy[i] + 1
                  setLike(copy)
                }}
              >
                👍
              </span>
            </h4>

            {like[i]}
            <p>{date[i]}</p>
            <button
              type='button'
              onClick={() => {
                let copy = [...title]
                copy.splice(i, 1)
                setTitle(copy)
              }}
            >
              Delete
            </button>
          </div>
        )
      })}

      <input
        placeholder='Enter title'
        type='text'
        onChange={(e) => {
          setInput(e.target.value)
        }}
        value={input}
      ></input>
      {/* <input
        placeholder='Select Date'
        type='date'
        onChange={(e) => {
          setDate(e.target.value)
        }}
        value={date.toString()}
      ></input> */}
      <button type='submit' onClick={onSubmit}>
        Submit
      </button>

      {modal == true ? (
        <Modal
          color={'skyblue'}
          title={title}
          setTitle={setTitle}
          titleStatus={titleStatus}
        />
      ) : null}
      <Modal2 />
    </div>
  )
}

// Old Version : Create component using Class
class Modal2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Lee',
      age: 20,
    }
  }
  render() {
    return (
      <div>
        <h4>
          Hello {this.state.name} age {this.state.age}
          {/* {this.props} */}
        </h4>
        <button
          onClick={() => {
            this.setState({ age: 21 })
          }}
        >
          Button
        </button>
      </div>
    )
  }
}

// function Modal(props) {
//   return (
//     <div className='modal' style={{ background: props.color }}>
//       <h4>{props.title[props.titleStatus]}</h4>
//       <p>Date</p>
//       <p>Desctiption</p>
//       <button
//         onClick={() => {
//           let copy = [...props.title]
//           copy[0] = "Women's Coat"
//           props.setTitle(copy)
//         }}
//       >
//         Edit
//       </button>
//     </div>
//   )
// }

export default App
