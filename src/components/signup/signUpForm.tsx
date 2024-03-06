import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
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

import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { SignUpFormFields, signUpFormSchema } from "@/types/signUpTypes";
import { Toaster } from "@/components/ui/toaster";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";

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
				className="space-y-8 text-white "
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>full name</FormLabel>
							<FormControl>
								<Input placeholder="eg: edlernUser" {...field} />
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
							<FormLabel>email</FormLabel>
							<FormControl>
								<Input placeholder="eg: ...@gmail.com" {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="gender"
					render={({ field }) => (
						<FormItem className="space-y-3">
							<FormLabel>gender</FormLabel>
							<FormControl>
								<RadioGroup
									onValueChange={field.onChange}
									defaultValue={field.value}
									className="flex flex-col space-y-1"
								>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="male" />
										</FormControl>
										<FormLabel className="font-normal">male</FormLabel>
									</FormItem>
									<FormItem className="flex items-center space-x-3 space-y-0">
										<FormControl>
											<RadioGroupItem value="female" />
										</FormControl>
										<FormLabel className="font-normal">female</FormLabel>
									</FormItem>
								</RadioGroup>
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
							<FormLabel className="text-white">Date of birth</FormLabel>
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
								<PopoverContent className="w-auto p-0" align="start">
									<Calendar
										mode="single"
										selected={field.value}
										onSelect={field.onChange}
										disabled={(date: Date) =>
											date > new Date() || date < new Date("1900-01-01")
										}
										initialFocus
									/>
								</PopoverContent>
							</Popover>
							<FormDescription>
								Your date of birth is used to calculate your age.
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="termsCheckBox"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel>accept terms and conditions</FormLabel>
							</div>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem className="text-black">
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormLabel className="text-text">Interest Field</FormLabel>

								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="select an interest field" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Academics">Academics</SelectItem>
									<SelectItem value="others">others</SelectItem>
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
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>more about your field</FormLabel>
							<FormControl>
								<Input placeholder="explain..." {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Toaster />
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default SignUpForm;
