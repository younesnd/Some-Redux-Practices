import './App.css'
import UsersManager from './components/UsersManager/UsersManager'
function App() {
  return (
    <div className="App mx-auto max-w-6xl text-center my-8">
      <h1 className="font-semibold text-2xl">Some Redux Principles </h1>
      <main>
        <UsersManager />
      </main>
    </div>
  )
}
export default App
