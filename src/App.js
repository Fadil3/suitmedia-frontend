import './App.css'
import { Footer, Value } from './components'
import { CarouselModule, ContactModule, ValuesModule } from './modules'

function App() {
  return (
    <div className="App">
      <CarouselModule />
      <ValuesModule />
      <ContactModule />
      <Footer />
    </div>
  )
}

export default App
