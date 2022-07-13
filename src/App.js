import './App.css'
import { Footer, Navbar } from './components'
import { CarouselModule, ContactModule, ValuesModule } from './modules'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CarouselModule />
      <ValuesModule />
      <ContactModule />
      <Footer />
    </div>
  )
}

export default App
