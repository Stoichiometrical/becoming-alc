import "./form.css"

export default function ContactForm(){
    return(
        <>
            <div className="contactForm">
                <div className="contactWrapper">
                    <div className="imageSide">
                        <img src="assets/people/p20.jpg" className="formImg" alt=""/>
                    </div>
                    <div className="formSide">
                        <div className="formWrap">
                            <span className="message">Send Us A Message</span>
                            <label htmlFor="name">Name</label>
                            <input type="text" className="formfield" placeholder="Enter your name" id="name"/>
                            <label htmlFor="email">Email</label>
                            <input type="email" className="formfield" placeholder="Email address" id="email"/>
                            <label htmlFor="message">Message</label>
                            <textarea className="formfield" placeholder="Enter your message" id="textarea"/>
                            <input type="submit" id="submit" value="Submit"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}