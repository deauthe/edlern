import { CreateUsertypes } from "@/types/signUpTypes";
import axios, { AxiosRequestConfig } from "axios";
import { error } from "console";

const Server_url = "http://localhost:8080/api/v1/user";

export const createUser = async (user: CreateUsertypes) => {
	const suffix = "/signup";
	const url = Server_url + suffix;
	let {
		name,
		email,
		phone,
		dob,
		interestField,
		fieldExplanation,
		phonePrefix,
	} = user;

	const config: AxiosRequestConfig = {
		method: "POST",
		url,
		data: {
			name,
			email,
			phone,
			dob,
			interestField,
			fieldExplanation,
			phonePrefix,
		},
	};

	try {
		const newUser = await axios(config);
		if (newUser) {
			console.log("user created", newUser);
		}
		return newUser;
	} catch (e) {
		console.error("error creating user", e);
	}
};

export const getUserByEmail = async ({
	email,
	phone,
}: {
	email: string;
	phone: string;
}) => {
	const getConfig: AxiosRequestConfig = {
		method: "Get",
		url: Server_url + "/email/" + email,
	};

	const user = await axios(getConfig);
};
