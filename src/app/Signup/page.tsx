"use client";
import { useToast } from "@/components/ui/use-toast";
import SignUpForm from "@/components/signup/signUpForm";
import { SignUpFormFields } from "@/types/signUpTypes";
import useMobileView from "@/hooks/useMobileView";

const SignUp = () => {
	const { toast } = useToast();
	const isMobileView = useMobileView();

	const onSubmit = async (data: SignUpFormFields) => {
		toast({
			title: "congratulations, you are registered!!",
			description: (
				<div className="w-full  justify-center items-center text-2xl uppercase">
					{data.name}
				</div>
			),
		});
		console.log("registered values are:", data);
	};
	return (
		<div className={`flex flex-row z-10 ${isMobileView ? "mt-10" : ""}`}>
			<div
				className={` p-5 ${
					isMobileView ? "mx-auto w-4/5" : "mr-auto w-3/5"
				} shadow-lg`}
			>
				<SignUpForm onSubmit={onSubmit} />
			</div>
			{isMobileView ? (
				<></>
			) : (
				<>
					<div className="h-screen w-full bg-gradient-to-l from-blue-300 to-blue-200 to-black"></div>
				</>
			)}
		</div>
	);
};

export default SignUp;
