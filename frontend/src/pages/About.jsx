import React from "react";

function About() {
	return (
		<div className="about">
			<div className="about-titlebar">
				<h1>VERTICAL CAFE-ABOUT US</h1>
			</div>

			<div className="about-container">
				<div className="about-top">
					<div className="about-left">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/03/verticalcafe-logo-img.png"
							alt=""
						/>
					</div>

					<div className="about-right">
						<h1>VERTICAL CAFE</h1>
						<p>
							Vertical Cafe is located in downtown Warsaw, New York at the
							crossroads of Route 20A and Route 19.
						</p>
						<div className="about-left-border">
							<p>REST, RELAX, REVIVE...</p>
						</div>
						<p>
							Vertical is a family owned and operated coffee shop which provides
							a small town experience with big city appeal. It's warm and
							friendly environment provides an excellent atmosphere to enjoy a
							great cup of coffee or sandwich, hang with friends, or do a bit of
							work using the FREE WiFi.
						</p>
						<p>Stop in today, We'd love to see ya...</p>
						<div className="about-icons">
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-facebook-f"></i>
							<i class="fa-brands fa-tumblr"></i>
						</div>
					</div>
				</div>

				<div className="about-bot">
					<h1>OUR MISSION STATEMENT</h1>
					<div className="mission-top">
						<h2>VERTICAL CAFE-PEOPLE OVER PROFITS</h2>
						<p>
							We will prioritize people more than the profits. Profits will come
							if people come first.
						</p>
						<p>
							<strong>Our Mission</strong>
							To provide the most inviting atmosphere in the industry by giving
							exceptional customer service and hospitality to all of our
							customers as we serve them quality food and drinks. To be the best
							stewards with what God has entrusted us with.
						</p>
					</div>

					<div className="mission-bot">
						<h2>OUR 5 C'S OF FOCUS</h2>
						<div className="five-c">
							<h3>1. Christ</h3>
							<p>
								We will do our best to glorify God by reflecting the attributes
								of Christ through the way we serve our customers and colleagues.
								Imperfect but with a Purpose.
							</p>
						</div>

						<div className="five-c">
							<h3>2. Cleanliness</h3>
							<p>
								We will make cleanliness a priority for the purpose of giving
								our customers a comfortable and clean place to gather and our
								colleagues a sanitary place to serve and work.
							</p>
						</div>

						<div className="five-c">
							<h3>3. Customers</h3>
							<p>
								We will do all we can to make sure our customers are welcomed
								and treated with dignity and respect. Our goal is to make them
								feel important and they leave feeling better then when they came
								in.
							</p>
						</div>

						<div className="five-c">
							<h3>4. Colleagues</h3>
							<p>
								We will treat each colleague as a family memeber, with care and
								compassrion. We will do our best to encourage each other and
								create an environment that we enjoy coming to.
							</p>
						</div>

						<div className="five-c">
							<h3>5. Community</h3>
							<p>
								We will participate and support the community and do business in
								through sponsorhips, volunteering, donations and leadership
								opportunities.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
