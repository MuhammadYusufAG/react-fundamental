import "./App.css"
import Article from "./components/Article"

function App() {
  return (
    <>
    <div className="App">
      <Article name="Muhammad" titles={["ReactJs","NextJs","NodeJs"]}/>
      <br/>
      <Article name="agus" titles={["VueJs","NuxtJs","Deno"]}/>
    </div>
    </>
  )
}

export default App;
