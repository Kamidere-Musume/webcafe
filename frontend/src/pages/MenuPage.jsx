import React from "react";
import UseFetch from "../components/Usefetch";

function MenuPage() {
	const {
		data: warm,
		isPending,
		error,
	} = UseFetch("http://localhost:8000/warm-drinks");
	const { data: cold } = UseFetch("http://localhost:8000/cold-drinks");
	const { data: sandwiches } = UseFetch(
		"http://localhost:8000/cafe-foods?category=sandwiches/wraps"
	);

	const { data: flatbread } = UseFetch(
		"http://localhost:8000/cafe-foods?category=flatbread"
	);

	const { data: acai } = UseFetch(
		"http://localhost:8000/cafe-foods?category=acai"
	);

	const { data: salad } = UseFetch(
		"http://localhost:8000/cafe-foods?category=salad"
	);

	const { data: sweets } = UseFetch(
		"http://localhost:8000/cafe-foods?category=sweets"
	);

	return (
		<div className="menu">
			<div className="menu-titlebar">
				<h1>COFFEES, DRINKS & FOOD</h1>
				<p>Vertical Coffee Shop & Internet Cafe / Coffees, Drinks & Food</p>
			</div>

			<div className="menu-container">
				<div className="top-coffee-title">
					<div className="vertical-cafe menu-coffee">
						<fieldset className="menu-legend">
							<legend>
								<h1>
									<i className="fa-solid fa-mug-hot"></i>Coffees & Drinks Menu
								</h1>
							</legend>
						</fieldset>
					</div>
				</div>

				<div className="menu-list">
					<div className="drinks">
						<div className="drink-title">
							<h1>
								WARM DRINKS
								<span style={{ fontSize: "0.8" }}>-12 0Z / 20 0Z</span>
							</h1>
							<div className="menu-title-border"></div>
						</div>

						<div className="drinks-content">
							{isPending && <div>Loading...</div>}
							{error && <div>{error}</div>}

							{warm &&
								warm.map((items) => (
									<div className="cafe-item-cards" key={items.id}>
										<div className="coffee-items">
											<div className="img-container">
												<img src={items.img} alt="coffee" />
											</div>
											<div className="menu-desc">
												<div className="menu-top">
													<h3>{items.title}</h3>
													<h3 className="price">{items.price}</h3>
												</div>
												<div className="menu-bot">
													<div>
														<p>{items.description}</p>
													</div>

													<div className="coffee-type">
														<p>{items.type}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>

					<div className="drinks">
						<div className="drink-title">
							<h1>
								COLD DRINKS <span style={{ fontSize: "0.8" }}>- 20 0Z</span>
							</h1>
							<div className="menu-title-border"></div>
						</div>
						<div className="drinks-content">
							{isPending && <div>Loading...</div>}
							{error && <div>{error}</div>}

							{cold &&
								cold.map((items) => (
									<div className="cafe-item-cards" key={items.id}>
										<div className="coffee-items">
											<div className="img-container">
												<img src={items.img} alt="coffee" />
											</div>
											<div className="menu-desc">
												<div className="menu-top">
													<h3>{items.title}</h3>
													<h3>{items.price}</h3>
												</div>
												<div className="menu-bot">
													<div>
														<p>{items.description}</p>
													</div>

													<div className="coffee-type">
														<p>{items.type}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
				<div className="extras">
					<div className="extra-container">
						<div className="menu-desc extra-desc">
							<div className="extrass-title">
								<h1>EXTRAS</h1>
							</div>
							<div className="menu-top">
								<h3>— EXTRA ESPRESSO SHOT</h3>
								<h3>$10</h3>
							</div>
							<div className="menu-bot">
								<div>
									<p>
										Extra Shot of Espresso made with rich Italian Moak roast
										straight from italy
									</p>
								</div>

								<div className="coffee-type">
									<p>espresso shot</p>
								</div>
							</div>
						</div>

						<div className="menu-desc extra-desc">
							<div className="menu-top">
								<h3>— EXTRA ESPRESSO SHOT</h3>
								<h3>$10</h3>
							</div>
							<div className="menu-bot">
								<div>
									<p>
										Extra Shot of Espresso made with rich Italian Moak roast
										straight from italy
									</p>
								</div>

								<div className="coffee-type">
									<p>espresso shot</p>
								</div>
							</div>
						</div>

						<div className="menu-desc extra-desc">
							<div className="menu-top">
								<h3>— EXTRA ESPRESSO SHOT</h3>
								<h3>$10</h3>
							</div>
							<div className="menu-bot">
								<div>
									<p>
										Extra Shot of Espresso made with rich Italian Moak roast
										straight from italy
									</p>
								</div>

								<div className="coffee-type">
									<p>espresso shot</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flavors">
						<div>
							<h2>LATTE / CAPPUCCINO FLAVORS:</h2>
						</div>
						<h3>
							Mocha | Carmel | Salted Carmel | Hazelnut | French Vanilla | White
							Chocolate | Chocolate Chip Cookie Dough and over 25 More!
						</h3>
						<p>(Sugar Free Options Are Also Available)</p>
						<h4>Mix & match and make your own flavors</h4>
					</div>
				</div>
				<div className="cafe-bottom">
					<div className="cafe-bot-img">
						<img
							src="https://www.cafevertical.com/wp-content/uploads/2019/03/vertical-logo-img-w.png"
							alt=""
						/>
					</div>
					<div className="cafe-food-title">
						<div className="vertical-cafe">
							<fieldset className="menu-legend menu-coffee">
								<legend>
									<h1>Food Menu</h1>
								</legend>
							</fieldset>
						</div>
					</div>
					<div className="cafe-food">
						<div className="leftside">
							{/* Sandwiches */}

							<div className="food-title  food-pad">
								<h1>SANDWICHES/WRAPS</h1>
								<div className="menu-title-border"></div>
							</div>

							<div className="sandwiches">
								{isPending && <div>Loading...</div>}
								{error && <div>{error}</div>}

								{sandwiches &&
									sandwiches.map((items) => (
										<div className="cafe-item-cards" key={items.id}>
											<div className="coffee-items">
												<div className="img-container">
													<img src={items.img} alt="food" />
												</div>
												<div className="menu-desc">
													<div className="menu-top">
														<h3>{items.title}</h3>
														<h3>{items.price}</h3>
													</div>
													<div className="menu-bot">
														<div>
															<p>{items.description}</p>
														</div>

														<div className="coffee-type">
															<p>{items.type}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
							</div>
							<div className="additional">
								<div className="toppings">
									<h2>+ TOPPINGS FOR SANDWICHES/WRAPS:</h2>
									<h4>
										Lettuce | Tomatoes | Onions | Spinach | Cucumbers Craisins |
										Almonds | Jalapenos Black Olives | Banana Peppers
									</h4>
									<p>(Add $1,00 for Bacon & Avocado)</p>
								</div>

								<div className="toppings">
									<h2>+ DRESSING:</h2>
									<h4>
										Mayo | Ranch | Mustard | Honey Mustard | Italian Blue Cheese
										| Balsamic Vinaigrette
									</h4>
								</div>
								<div className="toppings">
									<h2>+ CHEESES:</h2>
									<h4>
										Provolone | American | Swiss Feta | Cheddar | Mozzarella
									</h4>
								</div>
							</div>
						</div>

						<div className="rightside">
							{/* Flat bread */}
							<div className="flatbread">
								<div className="food-title  food-pad">
									<h1>FLATBREAD GOURMENT PIZZAS - 12 "X 5"</h1>
									<div className="menu-title-border"></div>
								</div>
								{isPending && <div>Loading...</div>}
								{error && <div>{error}</div>}

								{flatbread &&
									flatbread.map((items) => (
										<div className="cafe-item-cards" key={items.id}>
											<div className="coffee-items">
												<div className="img-container">
													<img src={items.img} alt="food" />
												</div>
												<div className="menu-desc">
													<div className="menu-top">
														<h3>{items.title}</h3>
														<h3>{items.price}</h3>
													</div>
													<div className="menu-bot">
														<div>
															<p>{items.description}</p>
														</div>

														<div className="coffee-type">
															<p>{items.type}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}

								<div className="drizzle">
									<h3>
										(Additional Toppings: Pepperoni, Mushroom, Spinach, Onion or
										Peppers - $0.95)
									</h3>
								</div>
							</div>

							{/* Acai bowls */}
							<div className="acai-bowls">
								<div className="food-title  food-pad">
									<h1>Açaí Bowls</h1>
									<div className="menu-title-border"></div>
								</div>
								{isPending && <div>Loading...</div>}
								{error && <div>{error}</div>}

								{acai &&
									acai.map((items) => (
										<div className="cafe-item-cards" key={items.id}>
											<div className="coffee-items">
												<div className="img-container">
													<img src={items.img} alt="food" />
												</div>
												<div className="menu-desc">
													<div className="menu-top">
														<h3>{items.title}</h3>
														<h3>{items.price}</h3>
													</div>
													<div className="menu-bot">
														<div>
															<p>{items.description}</p>
														</div>

														<div className="coffee-type">
															<p>{items.type}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}

								<div className="drizzle">
									<h3>
										(Drizzle Choices:Chocolate, Caramel, Honey Peanut
										Butter(Dip)-$0.75)
									</h3>
								</div>
							</div>

							{/* Salads */}
							<div className="salads">
								<div className="food-title  food-pad">
									<h1>Salads</h1>
									<div className="menu-title-border"></div>
								</div>
								{isPending && <div>Loading...</div>}
								{error && <div>{error}</div>}

								{salad &&
									salad.map((items) => (
										<div className="cafe-item-cards" key={items.id}>
											<div className="coffee-items">
												<div className="img-container">
													<img src={items.img} alt="food" />
												</div>
												<div className="menu-desc">
													<div className="menu-top">
														<h3>{items.title}</h3>
														<h3>{items.price}</h3>
													</div>
													<div className="menu-bot">
														<div>
															<p>{items.description}</p>
														</div>

														<div className="coffee-type">
															<p>{items.type}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
							</div>

							{/* Sweets */}
							<div className="sweets">
								<div className="food-title  food-pad">
									<h1>Sweets</h1>
									<div className="menu-title-border"></div>
								</div>
								{isPending && <div>Loading...</div>}
								{error && <div>{error}</div>}

								{sweets &&
									sweets.map((items) => (
										<div className="cafe-item-cards" key={items.id}>
											<div className="coffee-items">
												<div className="img-container">
													<img src={items.img} alt="food" />
												</div>
												<div className="menu-desc">
													<div className="menu-top">
														<h3>{items.title}</h3>
														<h3>{items.price}</h3>
													</div>
													<div className="menu-bot">
														<div>
															<p>{items.description}</p>
														</div>

														<div className="coffee-type">
															<p>{items.type}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MenuPage;
