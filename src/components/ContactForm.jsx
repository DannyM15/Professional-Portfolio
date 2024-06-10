import { useState } from "react";
import Footer from "./Footer";


function ContactForm() {
const [formState, setFormState] = useState({name: "", email: "", message: ""})

    function handleSubmit() {
        window.location.href="mailto:merinodanny15@gmail.com?cc=" +formState.email+"&body="+formState.message+"&subject=contact "+formState.name
    }
return (
  <>
<form onSubmit={handleSubmit} className="vh-100" >
  <div className="form-group w-75 p-3 mx-auto">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input type="name" value={formState.name} onChange={(event) => setFormState({...formState, name: event.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="Michael Jordan"/>
  </div>
  <div className="form-group w-75 p-3 mx-auto">
  <input type="email" value={formState.email} onChange={(event) => setFormState({...formState, email: event.target.value})} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="form-group w-75 p-3 mx-auto">
    <label htmlFor="exampleFormControlTextarea1">Message</label>
    <textarea value={formState.message} onChange={(event) => setFormState({...formState, message: event.target.value})} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button>Submit</button>
</form>
<Footer />
</>
)
}

export default ContactForm