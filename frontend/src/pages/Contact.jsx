import React from "react";

function Contact() {
	return (
		<div className="contact">
			<div className="contact-titlebar">
				<h1>CONTACT US</h1>
			</div>

			<div className="contact-container">
				<div className="contact-left">
					<h1>CONTACT US</h1>
					<div className="contact-border"></div>
					<p>
						Please use the form below to send us a message we will reply within
						one business day. You can also drop us an email anytime or feel free
						to give us a call. We'd love to hear form you!
					</p>
					<div className="contact-form">
						<input type="text" name="" id="" placeholder="Your Name" />
						<input type="email" name="" id="" placeholder="Your Email" />
						<textarea
							name=""
							id=""
							placeholder="Your Message or Comments"></textarea>
						<button className="contact-send">SEND</button>
					</div>
				</div>

				<div className="contact-right">
					<h2>WE ARE LOCATED AT</h2>
					<div className="contact-border"></div>
					<p>
						Vertical Cafe is located in downtown Warsaw, New York at the
						crossroads of Route 20A and Route 19
					</p>
					<div className="location-grid">
						<div className="cafe-contact item-one">
							<div>
								<i className="fa-solid fa-location-dot"></i>
								<h3>OUR ADDRESS</h3>
							</div>

							<p>
								18 West Buffalo St <br /> Warsaw, New York 14678
							</p>
						</div>

						<div className="cafe-contact item-two">
							<div>
								<i className="fa-solid fa-phone"></i>
								<h3>PHONE</h3>
							</div>
							<p>Phone: 1-5825-786-9819</p>
						</div>

						<div className="cafe-contact item-three">
							<div>
								<i className="fa-solid fa-envelope"></i>
								<h3>EMAIL</h3>
							</div>
							<p>contact@cafevertical.com</p>
						</div>
					</div>

					<div className="cafe-map">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/03/map-500x331.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
