import React from "react";

function News() {
	return (
		<div className="news">
			<div className="news-titlebar">
				<h3>What Happenes Here</h3>
				<h2>VERTICAL NEWS</h2>
				<div className="news-border"></div>
			</div>
			<div className="news-content">
				<div className="news-left">
					<div className="news-card">
						<div className="subnews-left gift-card">
							<img
								src="https://www.cafevertical.com/wp-content/uploads/2022/12/giftcard.jpg"
								alt=""
							/>
						</div>
						<div className="subnews-right">
							<h2>CHRISTMAS GIFT CARD</h2>
							<p>by veritcal / Vertical Cafe News / December 2, 2022</p>
							<p>
								Need a Great Christmas Gift? Spread the Warmth & Cheer with a
								Vertical Cafe Gift Card!...
							</p>
						</div>
					</div>

					<div className="news-card">
						<div className="subnews-left subnews-left-size">
							<img
								src="https://www.cafevertical.com/wp-content/uploads/2019/04/vertical-gift-shop2.jpg"
								alt=""
							/>
						</div>
						<div className="subnews-right">
							<h2>THE VERTICAL CAFE GIFT SHOP</h2>
							<p>by Rod Proeforck / Vertical Cafe News / March 29, 2020</p>
							<p>
								The Vertical Gift Shop is open Monday-friday from 7:00 am until
								5:00 pm and on Saturdays from 8:00...
							</p>
						</div>
					</div>

					<div className="news-card">
						<div className="subnews-left subnews-left-size">
							<img
								src="https://www.cafevertical.com/wp-content/uploads/2021/03/vc-conferenceroom.jpg"
								alt=""
							/>
						</div>
						<div className="subnews-right">
							<h2>THE VERTICAL CAFE "GATHERING ROOM"</h2>
							<p>by Rod Proeforck / Vertical Cafe News / March 29, 2020 </p>
							<p>
								The Vertical "Gathering Room" is a conference style room with a
								warm and inviting atmosphere. It is availabe for many..
							</p>
						</div>
					</div>

					<div className="news-card">
						<div className="subnews-left subnews-left-size">
							<img
								src="https://www.cafevertical.com/wp-content/uploads/2019/03/inside-polo.jpg"
								alt=""
							/>
						</div>
						<div className="subnews-right">
							<h2>WELCOME TO VERTICAL CAFE</h2>
							<p>by Rod Proeforck / Vertical Cafe News / March 29, 2020</p>
							<p>
								Welcome to the "News" Vertical Cafe Website. We just launched
								our new website and we're excited to hear what you think!..
							</p>
						</div>
					</div>
				</div>

				<div className="news-right">
					<div className="subnews-top">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/03/vertical-fb-header.jpg"
							alt=""
						/>
					</div>
					<div className="subnews-bottom">
						<div>
							<h2>FOLLOW US ON FACEBOOK</h2>
						</div>
						<div>
							<i className="fa-brands fa-facebook-f"></i>
						</div>
						<div>
							<h2>VERTICAL CAFE</h2>
						</div>
						<div>
							<img
								src="https://www.cafevertical.com/wp-content/uploads/2019/03/verticalcafe-logo-img.png"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default News;
