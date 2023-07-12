import React from "react";

function Footer() {
	const day = [
		{ day: "MONDAY", time: "7:00 am - 5:00 pm", id: 1 },
		{ day: "TUESDAY", time: "7:00 am - 5:00 pm", id: 2 },
		{ day: "WEDNESDAY", time: "7:00 am - 5:00 pm", id: 3 },
		{ day: "THURSDAY", time: "7:00 am - 5:00 pm", id: 4 },
		{ day: "FRIDAY", time: "7:00 am- 5:00 pm", id: 5 },
		{ day: "SATURDAY", time: "8:00 am - 2:00 pm", id: 6 },
		{ day: "SUNDAY", time: "CLOSED", id: 7 },
	];
	return (
		<div className="footer">
			<div className="contact-foot">
				<h3>CONTACT US</h3>
				<p>
					<span style={{ color: "white", fontWeight: "700" }}>
						Vertical Cafe
					</span>
				</p>
				<p>
					18 West Buffalo St <br />
					Warsaw, Mew Yorl 14569 <br />
					Phone:1-5825-786-9819 <br />
					Email: <a href="/">contact@caevertical.com</a>
				</p>
				<img
					src="https://www.cafevertical.com/wp-content/uploads/2019/03/vertical-logo-img-w.png"
					alt=""
				/>
			</div>
			<div className="opening">
				<h3>Opening Hour</h3>
				{day.map((items) => {
					return (
						<div className="workday" key={items.id}>
							<p>{items.day}</p>
							<div className="underline"></div>
							<p>{items.time}</p>
						</div>
					);
				})}
			</div>
			<div className="news-foot">
				<h3>VERTICAL NEWS</h3>
				<div className="subNews">
					<h4>
						<a href="">CHRISTMAS GIFT CARDS</a>
					</h4>
					<p>December 2, 2022</p>
				</div>
				<div className="subNews">
					<h4>
						<a href="">THE VERTICAL CAFE GIFT SHOP</a>
					</h4>
					<p>March 29, 2020</p>
				</div>
				<div className="subNews">
					<h4>
						<a href="">THE VERTICAL CAFE "GATHERING ROOM"</a>
					</h4>
					<p>March 29, 2020</p>
				</div>
				<div className="subNews">
					<h4>
						<a href="">WELCOME TO VERTICAL CAFE</a>
					</h4>
					<p>April 15, 2019</p>
				</div>
			</div>
			<div className="links">
				<h3>SITE LINKS</h3>
				<p>
					<a href="/">Home</a>
				</p>
				<p>
					<a href="/">Coffees, Drinks & Food Menu</a>
				</p>
				<p>
					<a href="/">Our Customer Testimonials</a>
				</p>
				<p>
					<a href="/">Vertical Cafe - About Us</a>
				</p>
				<p>
					<a href="/">Vertical News</a>
				</p>
				<p>
					<a href="/">Contact Us</a>
				</p>
				<p>
					<a href="/">View Our Daily Specials</a>
				</p>
			</div>
		</div>
	);
}

export default Footer;
