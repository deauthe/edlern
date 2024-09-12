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
        <NavigationMenuList className="border-none">
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" ">
              <div className="text-3xl font-bold">
                <HamburgerMenuIcon />
              </div>
              {/* icon  */}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="border-red-300 bg-white">
              <NavigationMenuLink className="translate-x-32 border-0 bg-transparent">
                <ul className="grid w-[200px] gap-3 p-4 text-black/60 md:w-[200px] lg:w-[100px]">
                  {staticComponents.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                      icon={component.icon}
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

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  icon?: React.ReactNode; // Custom prop for an optional icon
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, icon, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-md flex flex-row items-center justify-between font-medium leading-none">
              <h1>{title}</h1>
              <>{icon}</>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";

export default HamburgerMenu;
