import React from 'react';
import emailjs from 'emailjs-com';
import resumeUrl from '../images/AmanChaharResume.pdf'

const styles = {
  card: {
    marginTop: '100px',
    width: '80%',
    border: '0px',
    // backgroundColor: 'transparent',
    filter: 'opacity(0.95)',
    borderRadius: '15px',
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  show: {
    display: 'block'
  },
  hide:
  {
    display: 'none'
  },

};

const USER_ID = 'service_akx45wc';
const TEMPLATE_ID = 'template_vh3wzxc';

emailjs.init('RTn0ri1oNV0QVp6gx');

export default function Contact() {

  function handleSubmit(event) {
    event.preventDefault();
    emailjs.sendForm(USER_ID, TEMPLATE_ID, event.target)
      .then((result) => {
        // Handle successful form submission
        console.log(result.text);
        setTimeout(() => {
          window.location.href = "/react-portfolio"; // redirect after 5 seconds
        }, 5000); // 5000 milliseconds = 5 seconds
      }, (error) => {
        // Handle form submission error
        console.log(error.text);
      });
  }
  return (
    <div id='contact'>
      <section style={styles.card} className='card mx-auto mb-5 bg-none rounded-lg'>

        <div style={styles.box}>
          <div className="col-lg-6 d-flex align-items-stretch">
            <div className="info-wrap p-4 w-100 infobackground mx-auto my-auto">
              <div className="dbox w-100 d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <div className="text pl-4">
                  <p><span>Address:</span>Nagla Hatti Malpura Agra UttarPradesh (283102)</p>
                </div>
              </div>
              <div className="dbox w-100 d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone"></span>
                </div>
                <div className="text pl-4">
                  <p><span>Phone:</span> <a href="tel:8307874565">+91-8533995865</a></p>
                </div>
              </div>
              <div className="dbox w-100 d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <div className="text pl-4">
                  <p><span>Email:</span> <a href="mailto:mdglankush565@gmail.com">amanchahar1508@gmail.com</a></p>
                </div>
              </div>
              <div className="dbox w-100 d-flex align-items-start">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe"></span>
                </div>
                <div className="text pl-4">
                  <p><span>Resume:</span> <a href={resumeUrl} rel='noreferrer' target="_blank" download="AmanChaharResume.pdf"> Resume</a></p>
                </div>
              </div>
            </div>
          </div>
          <div className="containerBox bg-white text-center">
            <h1 className='text-center'>Contact</h1>
            <div className="row">
            </div>
            <div style={styles.hide} id="sendmessage">Your message has been sent. Thank you!</div>
            <div className="row">
              <div className=" mx-auto" id='formcard'>
                <div className="form">
                  <div id="errormessage"></div>
                  <form onSubmit={handleSubmit} method="post" role="form" className="contactForm">
                    <div className="form-group">
                      <input type="text" name="from_name" className="form-control mb-1" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <input type="email" className="form-control mb-1" name="from_email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required />
                      <div className="validation"></div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please leave a messege" placeholder="Message" required></textarea>
                      <div className="validation"></div>
                    </div>
                    <div>
                      {/* <h4 className='valid'></h4> */}
                    </div>
                    <div className="text-center">
                      <button onClick={() => {
                        const formControls = document.querySelectorAll('.form-control');
                        let allValid = true;
                        let emailValid = true;
                        const email = document.getElementById('email').value;
                        function isValidEmail(email) {
                          // This regular expression checks if an email is valid
                          const regex = /.+@.+\..+/;
                          return regex.test(email);
                        }
                        formControls.forEach((control) => {
                          if (!control.value) {
                            allValid = false;
                            control.className = 'form-control is-invalid'
                          } else if (!isValidEmail(email)) {
                            emailValid = false;
                            control.className = 'form-control is-invalid'
                            document.querySelector('.valid').textContent = 'Invalid Email 👎';
                          } else {
                            control.className = 'form-control is-valid'
                          }
                        });

                        if (allValid && emailValid) {
                          document.querySelector('.valid').textContent = '';
                          document.getElementById('sendmessage').style.display = "block"
                          document.getElementById('formcard').style.display = 'none'
                        } else if (!allValid) {
                          document.querySelector('.valid').textContent = 'Form Incomplete 😔';
                        } else if (!emailValid) {
                          formControls.forEach((control) => {
                            control.className = 'form-control is-valid'
                          })
                          document.getElementById('email').className = 'form-control is-invalid'
                        }
                      }} className="btn btn-dark">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div></div>
      </section>
    </div>

  );
}
