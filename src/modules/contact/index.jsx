import { Input, Textarea, Button } from '../../components'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact__container">
      <h1 className="contact__title">CONTACT US</h1>
      <form>
        <Input title="Name" />
        <Input title="Email" />
        <Textarea title="Message" />
        <Button title="SUBMIT" />
      </form>
    </section>
  )
}
