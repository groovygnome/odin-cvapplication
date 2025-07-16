import { useState } from 'react'
import Input from './input.jsx'

function Form() {
  const [resume, setResume] = useState({ name: '', email: '', phone: '', schools: [{ schoolName: '', study: '', studyDateFrom: '', studyDateTo: '' }], jobs: [{ companyName: '', position: '', responsibilities: '', dateFrom: '', dateUntil: '' }] })

  const handleSubmit = (type, data, isSchool, isJob, index) => {
    if (isSchool || isJob) {
      let array;
      if (isSchool) array = resume.schools;
      if (isJob) array = resume.jobs;
      array[index][type] = data;

      let newResume;
      if (isSchool) newResume = { ...resume, schools: array };
      if (isJob) newResume = { ...resume, jobs: array };

      setResume(newResume);
    } else {
      const newResume = { ...resume, [type]: data };
      setResume(newResume);
    }
  }

  const addNewSchool = () => {
    const newSchools = [...resume.schools, { schoolName: '', study: '', studyDateFrom: '', studyDateTo: '' }]
    const newResume = { ...resume, schools: newSchools };
    setResume(newResume);
  }

  const addNewJob = () => {
    const newJobs = [...resume.jobs, { companyName: '', position: '', dateFrom: '', dateUntil: '' }]
    const newResume = { ...resume, jobs: newJobs };
    setResume(newResume);
  }

  return (
    <>
      <div className='form'>
        <section className='general-form'>
          <h2>Contact Information</h2>
          <Input type='name' title='Name' submit={handleSubmit} />
          <Input inputType='email' type='email' title='E-Mail' submit={handleSubmit} />
          <Input inputType='tel' type='phone' title='Phone Number' submit={handleSubmit} />
        </section>
        <section className='education-form'>
          <h2>Education Information</h2>
          {resume.schools.map((school, index) => {
            return (
              <>
                <hr />
                <Input type='schoolName' title='School Name' submit={handleSubmit} isSchool={true} index={index} />
                <Input type='study' title='Field of Study' submit={handleSubmit} isSchool={true} index={index} />
                <Input inputType='date' type='studyDateFrom' title='Date Began' submit={handleSubmit} isSchool={true} index={index} />
                <Input inputType='date' type='studyDateTo' title='Date Ended' submit={handleSubmit} isSchool={true} index={index} />
              </>
            )
          })}
          <hr />
          <button onClick={addNewSchool}>Add School</button>
        </section>
        <section className='experience-form'>
          <h2>Work Experience</h2>
          {resume.jobs.map((job, index) => {
            return (
              <>
                <hr />
                <Input type='companyName' title='Name of Company' submit={handleSubmit} isJob={true} index={index} />
                <Input type='position' title='Position' submit={handleSubmit} isJob={true} index={index} />
                <Input type='responsibilities' title='Responsibilities' submit={handleSubmit} isJob={true} index={index} />
                <Input inputType='date' type='dateFrom' title='Worked from' submit={handleSubmit} isJob={true} index={index} />
                <Input inputType='date' type='dateUntil' title='Worked to' submit={handleSubmit} isJob={true} index={index} />
              </>
            )
          })}
          <hr />
          <button onClick={addNewJob}>Add Work Experience</button>
        </section>
      </div>
      <div className='resume'>
        <h1 className='name'>{resume.name}</h1>
        <p className='contact'>{resume.phone} | {resume.email}</p>
        <h2>Education</h2>
        {resume.schools.map((school) => {
          return (
            <>
              <p><b>{school.schoolName}</b></p>
              <div>
                <p>{school.study}</p>
                <p><i>{school.studyDateFrom} - {school.studyDateTo}</i></p>
              </div>
            </>
          )
        })}
        <h2> Experience</h2>
        {resume.jobs.map((job) => {
          return (
            <>
              <p><b>{job.companyName}</b></p>
              <div>
                <p>{job.position}</p>
                <p><i>{job.dateFrom} - {job.dateUntil}</i></p>
              </div>
              <p>{job.responsibilities}</p>
            </>
          )
        })}
      </div>
    </>
  )
}

export default Form
