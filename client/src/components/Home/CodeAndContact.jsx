import React from "react";
import "../../styles/CodeAndContact.css";

const CodeAndContact = React.memo(() => {
  return (
    <main className="codeOfConduct-container">
      <section>
        <h1 className="heading-code">Code of Conduct</h1>
        <h2 className="heading-para-code">
          Fostering an Open and Welcoming Community
        </h2>
        <p className="paragraph-codeConduct">
          CNCF's Code of Conduct and Linux Foundation's Events Code of Conduct
          applies to KCD Chennai and its Organizers, Volunteers, Chapter
          members, Speakers, Staff and Attendees. Report violations to the
          organizers by contacting
          organizers-chennai@kubernetescomrnunitydays.org or the CNCF staff at
          conduct@cncf.io.
        </p>
      </section>

      <section>
        <h1 className="heading-code">Contact Us</h1>
        <h2 className="heading-para-code">Connect with our community</h2>
        <div className="contact-component-code">
          <div className="section-contact">
            <img style={{width:'32px'}}  src="discord.png" alt="image loading.." />
            <h4 className="head-contact">Discord</h4>
            <h5 className="para-contacts">discord.com</h5>
          </div>

          <div className="line-contact"></div>

          <div className="section-contact">
            <img style={{width:'32px'}}  src="mail.png" alt="image loading.." />
            <h4 className="head-contact">Email</h4>
            <h5 className="para-contacts">nagpur@cncf.io</h5>
          </div>
          <div className="line-contact"></div>
          <div className="section-contact">
            <img  style={{width:'32px'}} src="whatapps.png" alt="image loading.." />
            <h4 className="head-contact">WhatsApp</h4>
            <h5 className="para-contacts">whatsapp.invite@cncf_nagpur</h5>
          </div>
        </div>
      </section>
    </main>
  );
});

CodeAndContact.displayName = "CodeAndContact";

export default CodeAndContact;
