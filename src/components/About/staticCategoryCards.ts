import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import { RiDiscussFill } from "react-icons/ri";
import { GiFamilyTree } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";
import { GiTalk } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { SiSemanticscholar } from "react-icons/si";
import { TbBuildingCommunity } from "react-icons/tb";
export type OfferingCardType = {
	title: string;
	icon: IconType;
};

export const OfferingCardsStatic: OfferingCardType[] = [
	{
		title: "Discussions",
		icon: RiDiscussFill,
	},
	{
		title: "Integrations",
		icon: GiFamilyTree,
	},
	{
		title: "Events",
		icon: MdEmojiEvents,
	},
	{
		title: "Direct Engagement with Eductor via chat",
		icon: GiTalk,
	},
	{
		title: "Coaching and Consulting",
		icon: FaChalkboardTeacher,
	},
	{
		title: "Educational Courses",
		icon: SiSemanticscholar,
	},
	{
		title: "Online Community",
		icon: TbBuildingCommunity,
	},
];
