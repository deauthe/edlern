import React from "react";
import {
  IconBook2,
  IconHome2,
  IconUser,
  IconBrandProducthunt,
  IconGoGame,
} from "@tabler/icons-react";
interface NavComponentsType {
  title: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
}

export const staticComponents: NavComponentsType[] = [
  {
    title: "Home",
    href: "#home",
    icon: <IconHome2 strokeWidth={1} />,
  },
  {
    title: "About",
    href: "#whyUs",
    icon: <IconUser strokeWidth={1} />,
  },
  {
    title: "Products",
    href: "#faq",
    icon: <IconBrandProducthunt strokeWidth={1} />,
  },
  {
    title: "Features",
    href: "#features",
    icon: <IconGoGame strokeWidth={1} />,
  },
  {
    title: "Contact Us",
    href: "#faq",
    icon: <IconBook2 strokeWidth={1} />,
  },
];
