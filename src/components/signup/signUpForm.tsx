import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { SignUpFormFields, signUpFormSchema } from "@/types/signUpTypes";
import { Calendar } from "../ui/calendar";

type FormProps = {
	onSubmit: SubmitHandler<SignUpFormFields>;
};

const SignUpForm = ({ onSubmit }: FormProps) => {
	const form = useForm<SignUpFormFields>({
		resolver: zodResolver(signUpFormSchema),
	});

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 m-10  py-5 font-oswald "
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-lg text-semibold">Full Name</FormLabel>
							<FormControl>
								<Input
									className="bg-white/[0.5]"
									placeholder="eg: edlernUser"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-lg text-semibold">Email</FormLabel>
							<FormControl>
								<Input
									className="bg-white/[0.5]"
									placeholder="eg: ...@gmail.com"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="phone"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-lg text-semibold">
								Mobile Number
							</FormLabel>
							<FormControl>
								<Input
									className="bg-white/[0.5]"
									placeholder="Please do not add prefix"
									{...field}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="dob"
					render={({ field }) => (
						<FormItem className="flex flex-col text-black">
							<FormLabel className="text-lg text-semibold">
								Date Of Birth
							</FormLabel>
							<Popover>
								<PopoverTrigger asChild>
									<FormControl>
										<Button
											variant={"outline"}
											className={cn(
												"w-[240px] pl-3 text-left font-normal",
												!field.value && "text-muted-foreground"
											)}
										>
											{field.value ? (
												format(field.value, "PPP")
											) : (
												<span>Pick a date</span>
											)}
											<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
										</Button>
									</FormControl>
								</PopoverTrigger>
								<PopoverContent className="w-auto p-0 bg-white" align="start">
									<Calendar
										mode="single"
										captionLayout="dropdown-buttons"
										fromYear={1980}
										toYear={2020}
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date: Date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="interestField"
					render={({ field }) => (
						<FormItem className="">
							<Select onValueChange={field.onChange}>
								<FormLabel className="text-lg text-semibold">
									Interest Field
								</FormLabel>

								<FormControl>
									<SelectTrigger className="text-zinc-500 font-medium">
										<SelectValue placeholder="select an interest field" />
									</SelectTrigger>
								</FormControl>
								<SelectContent className="lg:w-2/4 w-5/6">
									<SelectItem value="Academics">Academics</SelectItem>
									<SelectItem value="Other">Other</SelectItem>
									<SelectItem value="Finance">Finance</SelectItem>
									<SelectItem value="Sports and Recreation">
										Sports and Recreation{" "}
									</SelectItem>
									<SelectItem value="Law and Legal Studies">
										Law and Legal Studies{" "}
									</SelectItem>
									<SelectItem value="Lifestyle">Lifestyle</SelectItem>
									<SelectItem value="Career Counselling">
										Career Counselling
									</SelectItem>
									<SelectItem value="Personal Development">
										Personal Development
									</SelectItem>
									<SelectItem value="Entrepreneurship">
										Entrepreneurship
									</SelectItem>
									<SelectItem value="IT and Software">
										IT and Software
									</SelectItem>
									<SelectItem value="Competitive Examination">
										Competitive Examination
									</SelectItem>
									<SelectItem value="Education">Education</SelectItem>
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>
				{form.watch("interestField") === "Other" && (
					<motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
						<FormField
							control={form.control}
							name="fieldExplanation"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="text-lg text-semibold">
										more about your field
									</FormLabel>
									<FormControl>
										<Input
											className="bg-white/[0.5]"
											placeholder="explain..."
											{...field}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
					</motion.div>
				)}

				<FormField
					control={form.control}
					name="termsCheckBox"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow bg-white/[0.5]">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel>I accept terms and conditions</FormLabel>
							</div>
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					disabled={form.formState.isSubmitting}
					className={`bg-gradient-to-l from-blue-200 to-blue-300 shadow-sm shadow-black text-lg font-bold tracking-tight ml-auto ${
						form.formState.isSubmitting ? "text-transparent" : ""
					}`}
				>
					Submit
				</Button>
			</form>
		</Form>
	);
};

export default SignUpForm;
