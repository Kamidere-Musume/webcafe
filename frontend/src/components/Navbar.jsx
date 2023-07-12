import React from "react";

const nav = [
	{
		title: "HOME",
		icon: <i className="fa-solid fa-mug-hot"></i>,
		link: "/",
		id: 1,
	},
	{
		title: "OUR MENU",
		icon: <i className="fa-solid fa-mug-hot"></i>,
		link: "/menu",
		id: 2,
	},
	{
		title: "VERTICAL NEWS",
		icon: <i className="fa-solid fa-mug-hot"></i>,
		link: "/news",
		id: 3,
	},
	{
		title: "ABOUT VERTICAL",
		icon: <i className="fa-solid fa-mug-hot"></i>,
		link: "/about",
		id: 4,
	},
	{
		title: "CONTACT US",
		icon: <i className="fa-solid fa-mug-hot"></i>,
		link: "/contact",
		id: 5,
	},
];

function Navbar() {
	return (
		<div className="navbar">
			<div className="nav-top">
				<div className="top-item">
					<p>Call us 1-5825-786-9819</p>
				</div>
				<div className="top-item">
					<p>Contact@cafevertical.com</p>
				</div>
				<div className="top-item">
					<p>Call us 1-5825-786-9819</p>
				</div>
				<div className="top-item special">
					<i className="fa-duotone fa-cup-togo"></i>
					<i className="fa-brands fa-facebook-f"></i>
					<i className="fa-brands fa-google"></i>
					<i className="fa-brands fa-yelp"></i>
				</div>
			</div>

			<div className="nav-bot">
				<div className="nav-left">
					<img
						src="https://www.cafevertical.com/wp-content/uploads/2019/03/vertical-logo-img-w.png"
						alt=""
					/>
					<h2>Vertical Cafe</h2>
				</div>

				<div className="nav-right">
					{nav.map((items) => {
						return (
							<a key={items.id} href={items.link}>
								{items.icon} {items.title}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
