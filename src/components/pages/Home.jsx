import Footer from "../Footer"
import '../../App.css';


export default function Home() {
    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <img className="image-container" src="assets/images/Danny.jpeg" ></img>
            </div>
<div className="HomeStyle">
            <div><br />  <GoTime /><br />
            </div>
            <br />
            
                <div>
                    <DescribeMe />
                </div>
                <div> </div><br />
                <div>
                    <UseNav />
                </div> </div>
                <footer>
                    <Footer />
                </footer>
           
        </div>
    )
}

function GoTime() {
    return (`Hello! I'm Danny, a passionate and detail-oriented web developer with a love for crafting clean and
    efficient code. I thrive on turning complex ideas into elegant, user-friendly websites.
    My journey into the world of web development began during my undergraduate studies, where I
    discovered the power of coding to bring creative visions to life`)
}

function DescribeMe() {
    return (`With a degree in Mathematics and Coding Bootcamp certificate I am a valuable asset at
    any place of employment. I hope to be an asset to each employer 

    Please use the navigation link to explore my resume, view my profile, or get in contact with me.  I'm looking
        forward to hearing from you.
    `)
}

function UseNav() {
    return (`Please use the navigation link to explore my resume, view my profile, or get in contact with me.  I'm looking
    forward to hearing from you.`)
}