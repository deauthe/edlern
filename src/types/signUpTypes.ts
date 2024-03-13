import { z } from "zod";

export const signUpFormSchema = z.object({
	termsCheckBox: z.boolean(),
	name: z.string(),
	dob: z.date({
		required_error: "date of birth is required",
	}),
	email: z.string().email(),
	interestField: z.enum([
		"Academics Education",
		"Competitive Examination",
		"IT &amp; Software",
		"Entrepreneurship",
		"Personal Development",
		"Career Counselling",
		"Lifestyle",
		"Health and Wellness",
		"Law and Legal Studies",
		"Sports and Recreation",
		"Finance",
		"Design",
		"Other",
	]),
	phone: z.string().length(10),
	phonePrefix: z.string().length(3).default("+91"),
	fieldExplanation: z.string().optional(),
});
export type SignUpFormFields = z.infer<typeof signUpFormSchema>;
export type CreateUsertypes = {
	name: string;
	email: string;
	phonePrefix: string;
	phone: string;
	dob: Date;
	interestField:
		| "Academics Education"
		| "Competitive Examination"
		| "IT &amp; Software"
		| "Entrepreneurship"
		| "Personal Development"
		| "Career Counselling"
		| "Lifestyle"
		| "Health and Wellness"
		| "Law and Legal Studies"
		| "Sports and Recreation"
		| "Finance"
		| "Design"
		| "Other";
	fieldExplanation?: string;
};
