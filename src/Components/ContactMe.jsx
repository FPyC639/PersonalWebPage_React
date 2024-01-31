import React from 'react';

const ContactMe = () => {
  return (
      <div className="container">
          <p>
            For all inquries as well please fill out this form I will try to contact you within 2 business days.
          </p>
          <form method="POST" action="mailto: joseserra803@gmail.com"
              enctype="multipart/form-data">
              <div className="control">
                  Name:
                  <input aria-required="" id="name" type="text" />
              </div>
                  <div className="control">
                      Phone Number:
                      <input aria-required="" id="mobile_number" type="tel" />
                  </div>
                      <div className="control">
                          Body:
                          <textarea rows="7" cols="30" name="comment">
                          </textarea>
                      </div>
                          <div className="control">
                              <input type="submit" value="Submit" />
                          </div>
             </form>
          </div>
  );
}

export default ContactMe;