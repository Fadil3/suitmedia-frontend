import { useState } from 'react'
import { Input, Textarea, Button } from '../../components'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [error, setError] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form and set error state
    if (form.name === '' || form.email === '' || form.message === '') {
      setError({
        name: form.name === '' ? 'This field is required' : '',
        message: form.message === '' ? 'This field is required' : '',
        email:
          form.email === ''
            ? 'This field is required'
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
            ? 'Invalid email address'
            : '',
      })
      //check email format
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError({
        name: '',
        message: '',
        email: 'Invalid email address',
      })
      return
    } else {
      setError({
        name: '',
        email: '',
        message: '',
      })

      //reset form
      setForm({
        name: '',
        email: '',
        message: '',
      })
      alert(`
        Name: ${form.name}
        Email: ${form.email}
        Message: ${form.message}
        
        successfully sent!
        `)
    }
  }

  return (
    <section className="contact__container">
      <h1 className="contact__title">CONTACT US</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          title="Name"
          name="name"
          onChange={handleChange}
          error={error.name}
          value={form.name}
        />
        <Input
          type="text"
          title="Email"
          name="email"
          onChange={handleChange}
          error={error.email}
          value={form.email}
        />
        <Textarea
          title="Message"
          name="message"
          onChange={handleChange}
          error={error.message}
          value={form.message}
        />
        <Button type="submit" title="SUBMIT" />
      </form>
    </section>
  )
}
