import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FaExternalLinkAlt } from "react-icons/fa";

import React from "react";
import { discalimerText } from "./footerDocuments";

const DisclaimerDialog = () => {
	return (
		<Dialog>
			<DialogTrigger>Disclaimer</DialogTrigger>
			<DialogContent className="h-4/5">
				<DialogHeader className="max-h-fit overflow-y-scroll">
					<DialogTitle>Disclaimer</DialogTitle>
					<DialogDescription className="h-full ">
						{discalimerText}
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default DisclaimerDialog;
