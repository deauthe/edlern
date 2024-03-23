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
import { termsDescription } from "./terms";

const TermsDialog = () => {
	return (
		<Dialog>
			<DialogTrigger>
				<FaExternalLinkAlt />
			</DialogTrigger>
			<DialogContent className="h-4/5">
				<DialogHeader className="max-h-fit overflow-y-scroll">
					<DialogTitle>Terms & Conditions</DialogTitle>
					<DialogDescription className="h-full ">
						{termsDescription}
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};

export default TermsDialog;
