import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const reviews = [
	{
		review:
			"It’s all great at Vertical Cafe! Great atmosphere. Great service. Great fare. It’s the perfect place to meet up and catch up!",
		author: "Jennifer Newton",
		id: 1,
	},
	{
		review:
			"I loved everything in the coffee shop, I'm from Puerto Rico I stopped the day I returned from my stay in Canada with my family and I loved the coffee and the person who treated us very kindly, I think it was the owner beautiful town and very nice people I plan to return and make a stop at your place to try your coffee once again , greetings from Puerto Rico .. God bless you",
		author: "Hiram L. Bones",
		id: 2,
	},
	{
		review:
			"I visited the cafe when I was in New York over the holidays. There was a peaceful, calm atmosphere that was so relaxing and nice to enjoy a hot drink. My chai tea latte and iced tea were so good. The breakfast sandwich was very good and well made. I will be back again! I wish I lived in New York and could go more often.",
		author: "Trisha Kay Fronczak",
		id: 3,
	},
	{
		review:
			"I thoroughly enjoy a weekly treat for myself! Great place for specialty drinks and delicious breakfast sandwiches. Fantastic service! A great spot in town",
		author: "Marcie Sue",
		id: 4,
	},
	{
		review:
			"This is such a sweet cafe!!! I love the ambiance- so calming, relaxing, clean! I love that it's 'sprinkled' with godly bits and piece, a place where you can go and just enjoy! Very excited to tell people about it and visit again! The owners are doing a great job! Coffee is fabulous and so is the food! Great great great!",
		author: "Paula Levi Choate",
		id: 5,
	},
	{
		review:
			"So nice! So yummy! And super affordable! And such a cute and welcoming place! I have never been disappointed! And their specials are always amazing!",
		author: "Molly Jo Thompson",
		id: 6,
	},
];
function CarouselReview() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<>
			<Carousel
				className="review-carousel"
				responsive={responsive}
				showDots={true}
				autoPlay={true}
				removeArrowOnDeviceType={[
					"tablet",
					"mobile",
					"desktop",
					"superLargeDesktop",
				]}
				infinite={true}
				transitionDuration={3000}>
				{reviews.map((items) => {
					return (
						<div key={items.id}>
							<p>{items.review}</p>
							<p className="special">{items.author}</p>
						</div>
					);
				})}
			</Carousel>
			;
		</>
	);
}

export default CarouselReview;
