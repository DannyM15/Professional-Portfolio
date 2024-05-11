import './App.css'
import Projects from './components/projects'
function App() {

  return (
    <>
      <div className="box">
        <h2 id="About-Me" className="box-title">About Me</h2>
        <div className="card">
          <ul>Hello! I'm Danny, a passionate and detail-oriented web developer with a love for crafting clean and
            efficient code. I thrive on turning complex ideas into elegant, user-friendly websites.
            My journey into the world of web development began during my undergraduate studies, where I
            discovered the power of coding to bring creative visions to life.</ul>
          <ul>With a degree in Mathematics and Coding Bootcamp certificate (WIP) I would be a valuable asset at
            any place of employment. I hope to be an asset to each employer </ul>
        </div>
      </div>
      <section className="box">
        <div>
           < Projects />
        </div>


        <div className="row">
          <div className="card">
            <h3>Project Title</h3>
            <ul>
              <p>future project will be shown here!</p>
            </ul>

          </div>
        </div>
        <div className="row">
          <div className="card">
            <h3>Project Title</h3>
            <ul>
              <p>future project will be shown here!</p>
            </ul>

          </div>
        </div>
        <div className="row">
          <div className="card">
            <h3>Project Title</h3>
            <ul>
              <p>future project will be shown here!</p>
            </ul>

          </div>
        </div>
      </section>
      <div className="box">
        <h2 id="Contact-Me" className="box-title">Contact Me</h2>
        <li className="row"><a href="merinodanny15@gmail.com">My Email</a></li>
        <li className="row">(714)777-7777</li>
        <li className="row"><a href="https://github.com/DannyM15">My github page</a></li>
      </div>
    </>
  )
}

export default App
