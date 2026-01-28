import './App.css'
import Header from './components/Header'
import ProjectGrid from './components/ProjectGrid'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>AI-Powered Projects</h1>
            <p>Showcasing innovative projects built with artificial intelligence</p>
          </div>
        </section>
        <ProjectGrid />
      </main>
    </div>
  )
}

export default App;