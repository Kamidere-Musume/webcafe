import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
	{
		img: "https://www.cafevertical.com/wp-content/uploads/2019/03/ground-polo.jpg",
		title: "ground-polo",
		overlayTitle: "COFFEE-FRESH GROUND HEAVEN",
		overlaySub: "Coffee",
		id: 1,
	},
	{
		img: "https://www.cafevertical.com/wp-content/uploads/2021/03/IMG_15391.jpg",
		title: "img",
		overlayTitle: "AHH REFRESHING",
		overlaySub: "Coffee",
		id: 2,
	},
	{
		img: "https://www.cafevertical.com/wp-content/uploads/2017/01/food.jpg",
		title: "img",
		overlayTitle: "VERTICLE FOOD",
		overlaySub: "Cafe foods",
		id: 3,
	},
	{
		img: "https://www.cafevertical.com/wp-content/uploads/2019/03/the-benefits-of-coffee.jpg",
		title: "img",
		overlayTitle: "BENEFITS OF COFFEE",
		overlaySub: "Coffee",
		id: 4,
	},
	{
		img: "https://www.cafevertical.com/wp-content/uploads/2019/03/coffee-time.jpg",
		title: "img",
		overlayTitle: "COFFEE-FRESH GROUND HEAVEN",
		overlaySub: "Coffee",
		id: 5,
	},
	{
		img: "https://www.cafevertical.com/wp-content/uploads/2019/03/daily-specials.jpg",
		title: "img",
		overlayTitle: "COFFEE-FRESH GROUND HEAVEN",
		overlaySub: "Coffee",
		id: 5,
	},
];
function Carasole() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<>
			<div className="carousel-content">
				<Carousel
					className="carousel"
					responsive={responsive}
					infinite={true}
					autoPlay={true}>
					{images.map((items) => {
						return (
							<div className="carousel-items" key={items.id}>
								<img src={items.img} alt={items.title} className="image" />
								<div className="overlay-carousel">
									<div>
										<h3>{items.overlayTitle}</h3>
										<p>{items.overlaySub}</p>
									</div>
								</div>
							</div>
						);
					})}
				</Carousel>
			</div>
		</>
	);
}

export default Carasole;
