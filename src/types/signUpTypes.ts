import { z } from "zod";

export const signUpFormSchema = z.object({
	termsCheckBox: z.boolean().default(false),
	name: z.string().optional(),
	dob: z
		.date({
			required_error: "date of birth is required",
		})
		.optional(),
	gender: z.enum(["male", "female"]).optional(),
	email: z.string().email().optional(),
	interestField: z
		.enum([
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
			"others",
		])
		.optional(),
	extraInformation: z.string().optional(),
});
export type SignUpFormFields = z.infer<typeof signUpFormSchema>;
