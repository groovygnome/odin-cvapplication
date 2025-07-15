import { useState } from 'react'

function Input({ type, title, submit, inputType = 'text' }) {
  const [isEditing, setisEditing] = useState(true);
  const [value, setValue] = useState('');

  const handleEdit = () => {
    setisEditing(!isEditing);
  }

  return (
    <>
      <form onSubmit={submit}>
        <p>{title}: </p>
        <input
          type={inputType}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={!isEditing}
        />
        <button
          type='submit'
          disabled={!isEditing}
          onClick={() => { handleEdit(); submit(type, value) }}>
          Submit
        </button>
        <button
          disabled={isEditing}
          onClick={() => handleEdit()}>
          Edit
        </button>
      </form>
    </>
  )
}

export default Input
