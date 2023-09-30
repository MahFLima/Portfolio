import { About } from "./components/About"
import { Expirience } from "./components/Expirience"
import { Header } from "./components/Header"
import Projects from "./components/Projects"

function App() {
  return (
    <main className="text-blue-900">
      <Header/>
      <About/>
      <Expirience/>
      <Projects/>
    </main>
  )
}

export default App
