import React from "react";
import { staticComponents } from "./staticNavComponents";

import { cn } from "@/lib/utils";

const NavMenu = () => {
	return (
		<div className="mx-auto lg:w-fit md:w-[500px] ">
			<ul className="flex flex-row font-rajdhani mx-auto w-fit gap-10">
				{staticComponents.map((component) => (
					<ListItem
						className=""
						key={component.title}
						title={component.title}
						href={component.href}
					></ListItem>
				))}
			</ul>
		</div>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<a
				ref={ref}
				className={cn("hover:scale-125 hover:text-blue-300", className)}
				{...props}
			>
				<div className="text-md font-medium mx-auto">{title}</div>
			</a>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default NavMenu;
