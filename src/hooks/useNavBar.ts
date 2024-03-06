import { useEffect, useState } from "react";
import useScroll from "./useScroll";

const useNavBar = (): [boolean, boolean] => {
	const { direction, position } = useScroll();
	const [showNavBar, setShowNavBar] = useState(true);
	const [isTransparent, setTransparent] = useState(false);

	useEffect(() => {
		if (direction === "UP" || position === "TOP" || direction === "NONE") {
			if (position === "TOP") {
				setTransparent(false);
			}
			setShowNavBar(true);
		} else {
			setShowNavBar(false);
		}

		return () => {
			setTransparent(true);
			setShowNavBar(true);
			console.log("unmounted");
		};
	}, [direction, position]);

	return [showNavBar, isTransparent];
};

export default useNavBar;
