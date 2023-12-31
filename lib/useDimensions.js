"use client";
import { useEffect, useState } from "react";

const useDimensions = () => {
	const [windowDimensions, setWindowDimensions] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		function handleResize() {
            console.log("handleResize")
			setWindowDimensions({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowDimensions;
};

export default useDimensions;
