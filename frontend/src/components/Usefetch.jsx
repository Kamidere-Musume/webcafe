import React, { useReducer } from "react";
import { useState, useEffect } from "react";
function Usefetch(url) {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error("Could not fetch the data");
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setIsPending(false);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setIsPending(null);
			});
	}, [url]);
	return { data, isPending, error };
}
export default Usefetch;
