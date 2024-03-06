import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { z } from "zod";

export const RegFormSchema = z.object({
	email: z.string().email(),
});
export type RegFormFields = z.infer<typeof RegFormSchema>;

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Button } from "./ui/button";

type FormProps = {
	onSubmit: SubmitHandler<RegFormFields>;
};

const RegisterForm = ({ onSubmit }: FormProps) => {
	const form = useForm<RegFormFields>({
		resolver: zodResolver(RegFormSchema),
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 text-white flex flex-row gap-5 "
			>
				<div>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										className="h-16 w-96"
										placeholder="Your Email"
										{...field}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div>
					<Button type="submit" className="-translate-y-8 h-16 w-32">
						Register
					</Button>
				</div>
			</form>
		</Form>
	);
};

export default RegisterForm;
