import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Variant, Variants, motion } from "framer-motion";

const buttonVariants: Variants = {
	hover: {
		scale: 1.1,
		boxShadow: "2px 3px 8px rgb(0,0,0)",
	},
	initial: {
		scale: 0,
	},
	animate: {
		scale: 1,
		boxShadow: "1px 2px 3px rgb(0,0,0)",
	},
};

const RegisterForm = () => {
	return (
		<div>
			<motion.button
				variants={buttonVariants}
				whileHover={"hover"}
				animate="animate"
				initial="initial"
				className="rounded-md h-fit w-52 py-2 text-2xl font-semibold text-white-200/[0.9] tracking-wider uppercase font-oswald bg-black/[0.8] shadow-md"
			>
				Register
			</motion.button>
		</div>
	);
};

export default RegisterForm;
