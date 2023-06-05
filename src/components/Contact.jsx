import mailicon from "assets/mailicon.svg";
import locationicon from "assets/locationicon.svg";
const Contact = () => {
  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="contact__content">
          <div class="contact__title">
            <p>contact</p>
            <h3>Don't be shy! Hit me up! 👇</h3>
          </div>
          <div class="contact__icons">
            <div class="contact__icon-box">
              <span>
              <img src={locationicon} alt="" srcset="" />
              </span>
              <div class="contact__info">
                <h3>Location</h3>
                <p>Delhi, India</p>
              </div>
            </div>
            <div class="contact__icon-box">
              <span>
              <img src={mailicon} alt="" srcset="" />
              
              </span>
              <div class="contact__info">
                <h3>Mail</h3>
                <a href="mailto:theamargupta.tech@gmail.com">
                  theamargupta.tech@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
