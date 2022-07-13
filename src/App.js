import './App.css'
import { Footer, Value } from './components'
import { ContactModule, ValuesModule } from './modules'

function App() {
  return (
    <div className="App">
      <ValuesModule />
      <ContactModule />
      <Footer />
    </div>
  )
}

export default App
