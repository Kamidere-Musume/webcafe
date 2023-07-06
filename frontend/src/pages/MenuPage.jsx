import React from "react";

function MenuPage() {
	return (
		<div className="menu">
			<div className="menu-titlebar">
				<h1>COFFEES, DRINKS & FOOD</h1>
				<p>Vertical Coffee Shop & Internet Cafe / Coffees, Drinks & Food</p>
			</div>
			<div className="vertical-cafe menu-coffee">
				<fieldset className="menu-legend">
					<legend>
						<h1>
							<i className="fa-solid fa-mug-hot"></i>Coffees & Drinks Menu
						</h1>
					</legend>
				</fieldset>
			</div>
			<div className="menu-container">
				<div className="menu-titles">
					<div>
						<h1>
							WARM DRINKS{" "}
							<span style={{ fontSize: "0.8" }}>-12 0Z / 20 0Z</span>
						</h1>
						<div className="menu-title-border"></div>
					</div>

					<div>
						<h1>
							COLD DRINKS <span style={{ fontSize: "0.8" }}>- 20 0Z</span>
						</h1>
						<div className="menu-title-border"></div>
					</div>
				</div>
      </div>
      <div className="menu-list">
        
      </div>
		</div>
	);
}

export default MenuPage;
