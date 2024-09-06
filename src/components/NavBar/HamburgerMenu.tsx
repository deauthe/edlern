import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
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

const HamburgerMenu = () => {
	return (
		<div>
			<NavigationMenu orientation="vertical">
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-transparent border-l-1 border-black shadow-sm">
							<div className="text-3xl font-bold">
								<HamburgerMenuIcon />
							</div>
							{/* icon  */}
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<NavigationMenuLink className="translate-x-32">
								<ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px] ">
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
							</NavigationMenuLink>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
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

export default HamburgerMenu;
