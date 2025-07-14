import { useState } from 'react'

function Form() {
  const [resume, setResume] = useState({ name: '', email: '', phone: '', school: '', study: '', studyDate: '', companyName: '', position: '', responsibilites: '', dateFrom: '', dateUntil: '' })

  const handleSubmit = (type, data) => {
    const newResume = { ...resume, [type]: data };
  }

  return (
    <>
      <div className='form'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function Input({ type, title, onSubmit }) {
  const [isEditing, setisEditing] = useState(true);

  const handleEdit = () => {
    setisEditing(!isEditing);
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <p>{title}</p>
        <input type='text' disabled={isEditing}></input>
        <button type='submit' disabled={isEditing} onClick={() => handleEdit()}>Submit</button>
        <button disabled={!isEditing} onClick={() => handleEdit()}>Edit</button>
      </form>
    </>
  )
}

export default Form
