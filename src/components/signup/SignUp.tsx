"use client";
import { useToast } from "@/components/ui/use-toast";
import SignUpForm from "@/components/signup/signUpForm";
import { SignUpFormFields } from "@/types/signUpTypes";
import useMobileView from "@/hooks/useMobileView";
import { FcGraduationCap } from "react-icons/fc";
import { createUser } from "@/apiCalls/UserApi";
import { date } from "zod";
import { MdOutlineError } from "react-icons/md";
import Router from "next/router";
import { Toaster } from "@/components/ui/toaster";

const SignUp = () => {
	const { toast } = useToast();
	const isMobileView = useMobileView();
	const router = Router;

	const onSubmit = async (data: SignUpFormFields) => {
		const {
			email,
			phone,
			dob,
			interestField,
			name,
			phonePrefix,
			fieldExplanation,
		} = data;
		try {
			console.log("registered values are:", data);

			const user = await createUser({
				dob,
				phone,
				email,
				name,
				fieldExplanation,
				phonePrefix,
				interestField,
			});
			console.error(user);
			toast({
				title: "congratulations, you are registered!!",
				description: (
					<div className="w-full  justify-center items-center text-2xl uppercase font-oswald font-semibold">
						{user!.data.name!}
					</div>
				),
			});
			router.replace("/");
		} catch (error: any) {
			console.log("useFul error", error);
			let errorTitle;
			if (error.statusCode === 11000) {
				errorTitle = "user already registered OR Internal Server Error";
			} else {
				errorTitle = "user with this info exists or internal server error";
			}
			toast({
				title: "congratulations, you are registered!!",
				description: (
					<div className="w-full tracking-tighter justify-center items-center text-xl uppercase font-oswald font-semibold">
						{data.name!}
					</div>
				),
			});
		}
	};
	return (
		<div
			className={` z-10 font-oswald text-black h-fit flex flex-col md:gap-3 gap-1 py-2  w-full mx-auto mt-8 md:mt-4 lg:mt-0 p-4`}
		>
			<div className={`h-fit md:mx-5  rounded-lg bg-white/[0.9]  shadow-lg`}>
				<SignUpForm onSubmit={onSubmit} />
			</div>
		</div>
	);
};

export default SignUp;
