import React from 'react'

const Contact = () => {

    function handleForm(formData){
        // by this like we the entries of the form directly in the form of object and aplly that fn in the form action attribute
        const formValue= Object.fromEntries(formData.entries())
    console.log(formValue)
    }
  return (
<>
 <section className='section-contact'>

<h1 className='container-title'>Contact Us</h1>
<div className='contact-wrapper container'>
    <form action={handleForm}>
        <input className='form-control' 
        type="text"
        required
        name='username' 
        placeholder='Enter the name'/>

       <input className='form-contorl' 
       type="text"
        required
        name='email' 
        placeholder='Enter the E-mail' />

      <textarea className='form-control'
      name="message" 
      required
      rows="10"
      placeholder='Enter your message'

      ></textarea>
      <button type='submit' >Send</button>
      </form>
  </div>

 </section>
</>
  )
}
export default Contact
