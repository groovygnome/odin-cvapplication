import { useState } from 'react'
import Input from './input.jsx'

function Form() {
  const [resume, setResume] = useState({ name: '', email: '', phone: '', school: '', study: '', studyDateFrom: '', studyDateTo: '', companyName: '', position: '', responsibilities: '', dateFrom: '', dateUntil: '' })

  const handleSubmit = (type, data) => {
    const newResume = { ...resume, [type]: data };
    setResume(newResume);
  }

  return (
    <>
      <div className='form'>
        <section className='general-form'>
          <Input type='name' title='Name' submit={handleSubmit} />
          <Input inputType='email' type='email' title='E-Mail' submit={handleSubmit} />
          <Input inputType='tel' type='phone' title='Phone Number' submit={handleSubmit} />
        </section>
        <section className='education-form'>
          <Input type='school' title='School Name' submit={handleSubmit} />
          <Input type='study' title='Field of Study' submit={handleSubmit} />
          <Input inputType='date' type='studyDateFrom' title='Date Began' submit={handleSubmit} />
          <Input inputType='date' type='studyDateTo' title='Date Ended' submit={handleSubmit} />
        </section>
        <section className='experience-form'>
          <Input type='companyName' title='Name of Company' submit={handleSubmit} />
          <Input type='position' title='Position' submit={handleSubmit} />
          <Input type='responsibilities' title='Responsibilities' submit={handleSubmit} />
          <Input inputType='date' type='dateFrom' title='Worked from' submit={handleSubmit} />
          <Input inputType='date' type='dateUntil' title='Worked to' submit={handleSubmit} />
        </section>
      </div>
      <div className='resume'>
        <h1 className='name'>{resume.name}</h1>
        <p className='contact'>{resume.phone} | {resume.email}</p>
        <h2>Education</h2>
        <p><b>{resume.school}</b></p>
        <div>
          <p>{resume.study}</p>
          <p><i>{resume.studyDateFrom} - {resume.studyDateTo}</i></p>
        </div>
        <h2>Experience</h2>
        <p><b>{resume.companyName}</b></p>
        <div>
          <p>{resume.position}</p>
          <p><i>{resume.dateFrom} - {resume.dateUntil}</i></p>
        </div>
        <p>{resume.responsibilities}</p>
      </div>
    </>
  )
}

export default Form
