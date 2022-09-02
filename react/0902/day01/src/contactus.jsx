import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// npm install @emailjs/browser --save

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j4177fh', 'template_ey8xv0n', form.current, 'elrff6xiGF1RDqTlo')
      .then((result) => {
          console.log(result.text);
          alert('메일보내기 성공')
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset(); // input태그에 입력된 내용 삭제  ->  초기화
  };

  return (
    <div className='mailform'>
      <form ref={form} onSubmit={sendEmail}>
        <p><label>Name</label>
        <input type="text" name="to_name" /></p>
        <p><label>FromName</label>
        <input type="text" name="from_name" /></p>
        <p><label>Email</label>
        <input type="email" name="from_email" /></p>
        <p><label>Number</label>
        <input type="text" name="from_number" /></p>
        <p><label>Message</label>
        <textarea name="message" className='msg' /></p>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default ContactUs;