import React, { useEffect, useRef, useState } from "react";
import Carasole from "../components/Carasole";
import CarouselReview from "../components/CarouselReview";

const delay = 3000;

function Home() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const timeoutRef = React.useRef(null);

	const day = [
		{ day: "MONDAY", time: "7:00 am - 5:00 pm", id: 1 },
		{ day: "TUESDAY", time: "7:00 am - 5:00 pm", id: 2 },
		{ day: "WEDNESDAY", time: "7:00 am - 5:00 pm", id: 3 },
		{ day: "THURSDAY", time: "7:00 am - 5:00 pm", id: 4 },
		{ day: "FRIDAY", time: "7:00 am- 5:00 pm", id: 5 },
		{ day: "SATURDAY", time: "8:00 am - 2:00 pm", id: 6 },
		{ day: "SUNDAY", time: "CLOSED", id: 7 },
	];
	const slides = [
		{
			url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
			title: "cafe-interior",
			id:1
		},
		{
			url: "https://www.cafevertical.com/wp-content/uploads/2021/03/IMG_15291-scaled-300x200.jpg",
			title: "cafe-interior",
			id:2
		},
		{
			url: "https://www.cafevertical.com/wp-content/uploads/2021/03/IMG_15301-scaled-300x200.jpg",
			title: "cafe-interior",
			id:3
		},
		{
			url: "https://www.cafevertical.com/wp-content/uploads/2020/01/IMG_07641-scaled-300x200.jpg",
			title: "cafe-interior",
			id:4
		},
	];

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setCurrentIndex((prevIndex) =>
					prevIndex === slides.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		return () => {
			resetTimeout();
		};
	}, [currentIndex]);

	const previous = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const next = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	return (
		<>
			<div className="body-container">
				<div className="coffee-vid">
					<video
						autoPlay
						loop
						src="https://assets.mixkit.co/videos/preview/mixkit-coffee-beans-falling-on-a-layer-of-more-beans-4982-large.mp4"></video>
					<div className="coffee-title">
						<div className="logo">
							<img
								src="https://www.cafevertical.com/wp-content/uploads/2019/03/vertical-logo-img-w.png"
								alt=""
							/>
						</div>

						<div className="titles">
							<h1>
								REST <i className="fa-solid fa-mug-hot"></i>
							</h1>
							<h1>
								RELAX <i className="fa-solid fa-mug-hot"></i>
							</h1>
							<h1>
								REVIVE <i className="fa-solid fa-mug-hot"></i>
							</h1>
						</div>
						<h3>Small town experience with BIG City Appeal!</h3>
						<button>SEE OUR MENU</button>
						<button className="btn">SEE OUR DAILY SPECIAL</button>
					</div>
				</div>
			</div>
			<div className="home-cafe-items">
				<div className="vertical-cafe">
					<fieldset>
						<legend>
							<h1>
								<i className="fa-solid fa-mug-hot"></i>Vertical Cafe
							</h1>
						</legend>
					</fieldset>
				</div>
				<div className="slider-cont">
					<div className="image-slider">
						<div className="image-arrow">
							<img src={slides[currentIndex].url} alt="" />
							<div className="leftarrow" onClick={previous}>
								<i className="fa-solid fa-less-than"></i>
							</div>
							<div className="rightarrow" onClick={next}>
								{" "}
								<i className="fa-solid fa-greater-than"></i>
							</div>
						</div>
						<div className="slider-desc">
							<h3>REST, RELAX & REVIVE!</h3>
							<p>
								At Vertical people come from all around to rest, relax and
								revive with good coffee, good company, and great food!
							</p>
							<img
								className="wifi-img"
								src="https://www.cafevertical.com/wp-content/uploads/2019/04/free-wifi-150x150.png"
								alt="wifi image"
							/>
						</div>
					</div>

					<div className="coffeeinfo">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/03/vertical-fb-header.jpg"
							alt=""
						/>
						<div className="coffeeinfo-desc">
							<h3>DID SOMEONE SAY "COFFEE"!</h3>
							<p>
								We offer some of the best locally roasted coffee using
								"Brazallian Santos" beans. Enjoy Dark, Blonde, Jamaican, Italian
								& Decaf roasts. Also available are our speciality Lattes,
								Frappers, Mochas, Cappuccions, Americano & more...
							</p>
							<p>
								To see more of our coffee, speciality drinks & food menus,
								please click the link below
							</p>
							<a href="/">
								CLICK TO LEARN MORE <i className="fa-solid fa-arrow-right-long"></i>
							</a>
						</div>
					</div>
					<div className="open-time">
						<h2>Opening Hour</h2>
						{day.map((items) => {
							return (
								<div className="workday" key={items.id}>
									<p>{items.day}</p>
									<div className="underline"></div>
									<p>{items.time}</p>
								</div>
							);
						})}
						<p className="number">CALL: +1 585 798 6782</p>
					</div>
				</div>
				<Carasole />
				<div className="choose-title">
					<h3>We have over 25 different flavors to choose from</h3>
					<h1>CHOOSE YOUR STYLE / CHOOSE YOUR FLAVOR</h1>
					<div className="title-border"></div>
				</div>
				<div className="coffee-img">
					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2017/01/home-3-icon-img-1.png"
							alt=""
						/>
						<h2>Espresso</h2>
					</div>
					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/04/traditional-drip.png"
							alt=""
						/>
						<h2>traditional drip</h2>
					</div>
					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/04/capuccino.png"
							alt=""
						/>
						<h2>Capuccino</h2>
					</div>
					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/04/latte2.png"
							alt=""
						/>
						<h2>latte</h2>
					</div>

					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2017/01/home-3-icon-img-5.png"
							alt=""
						/>
						<h2>frappe</h2>
					</div>
					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2017/01/home-3-icon-image-6.png"
							alt=""
						/>
						<h2>mocha</h2>
					</div>
					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/04/home-3-icon-img-protein.png"
							alt=""
						/>
						<h2>protein shake</h2>
					</div>
					<div className="coffee">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/04/home-3-icon-img-smoothie.png"
							alt=""
						/>
						<h2>smoothies</h2>
					</div>
				</div>
				<div className="review">
					<h1>What Our Customers Say...</h1>
					<CarouselReview />
					<div className="testimonial">
						<button>SEE MORE CUSTOMER TESTIMONIALS..</button>
					</div>
				</div>
				<div className="lower-body">
					<div className="lower-cards">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/04/openmic.jpg"
							alt=""
						/>
						<h3>Open Mic Night</h3>
						<p>
							<span style={{ fontWeight: "900", color: "white" }}>
								STAY TUNED!
							</span>
							Open mic nights at Vertical Cafe will be starting up again soon!
							This is open to anyone who would like to play a song, sing… Stay
							tuned for more information, dates and times.
						</p>
						<button>COMING SOON!</button>
					</div>
					<div className="lower-cards">
						<img
							className="lower-images"
							src="https://www.cafevertical.com/wp-content/uploads/2021/03/vc-conferenceroom.jpg"
							alt=""
						/>
						<h3>Vertical "Gathering" Conference Room</h3>
						<p>
							<span style={{ fontWeight: "900", color: "white" }}>
								Now Open!
							</span>
							The Vertical “Gathering Room” is available for business lunch-ins,
							parties, private meetings and public use when not booked. Click on
							the button below for more information and/or to book a
							reservation.
						</p>
						<button>LEARN MORE!</button>
					</div>
					<div className="lower-cards">
						<img
							className="lower-images"
							src="https://www.cafevertical.com/wp-content/uploads/2019/04/vertical-gift-shop.jpg"
							alt=""
						/>
						<h3>The Vertical Cafe Gift Shop</h3>
						<p>
							The Vertical Gift Shop has your favorite tees, caps, mugs,
							plaques, and of course COFFEE, plus a whole lot more and is open
							Monday – Friday from 7:00 am until 5:00 pm and on Saturdays from
							8:00 am until 2:00 pm.
						</p>
						<button>LEARN MORE!</button>
					</div>
				</div>
			</div>
		</>
	);
}
export default Home;
