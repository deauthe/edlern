import React from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { staticComponents } from "./staticNavComponents";

import { cn } from "@/lib/utils";

const NavMenu = () => {
	return (
		<NavigationMenu className=" mx-auto">
			<NavigationMenuList className="flex flex-row justify-between ">
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent">
						Getting started
					</NavigationMenuTrigger>
					<NavigationMenuContent className="shadow-lg shadow-black">
						<ul className="grid gap-1 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex bg-blue-300 h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/100 to-muted/50 p-6 no-underline outline-none focus:shadow-md"
										href="/"
									></a>
								</NavigationMenuLink>
							</li>

							<ListItem href="/docs" title="Launch" className="">
								the countdown begins
							</ListItem>
							<ListItem href="/docs/installation" title="About" className="">
								what is edlern?
							</ListItem>
							<ListItem
								href="/docs/primitives/typography"
								title="Why Us?"
								className=""
							>
								see what we do
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger className="bg-transparent">
						Components
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
							{staticComponents.map((component) => (
								<ListItem
									key={component.title}
									title={component.title}
									href={component.href}
								>
									{component.description}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
};

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";

export default NavMenu;
