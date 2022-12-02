import React from "react";
import { useForm } from "react-hook-form";
import WheelImage from "../../assets/images/wheel.webp";

function Form({ setActivePage }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		//handle submitting the form
		console.log(JSON.stringify(data));
		//render the spin wheel
		setActivePage("SpinWheel");
	};

	console.log(errors);
	return (
		<div className="sm:flex h-screen items-center">
			<div className="p-6 max-w-md mx-auto sm:flex sm:max-w-2xl xl:max-w-6xl xl:gap-x-44 sm:visible relative overflow-hidden sm:overflow-visible">
				<div className="w-full sm:w-2/5 xl:w-1/2 xl:object-contain sm:flex sm:items-center sm:static absolute inset-x-0 -top-16">
					<img
						src={WheelImage}
						alt="spin wheel"
						className="w-52 xl:static xl:w-full sm:absolute sm:max-w-none sm:w-96 mx-auto sm:mx-0 sm:-left-64"
					/>
				</div>
				<div className="pt-48 sm:pt-0 sm:w-3/5 xl:w-1/2">
					<h1 className="text-3xl sm:text-4xl font-bold font-poppins">
						This is how EngageBud looks like in action!
					</h1>
					<form
						className="mt-6"
						action=""
						onSubmit={handleSubmit(onSubmit)}
					>
						<div className="font-roboto ">
							<div class="relative">
								<span class="absolute left-2 top-5 w-7 ml-3">
									<svg
										fill="none"
										stroke="#49454F"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										></path>
									</svg>
								</span>
								<input
									{...register("email", {
										required: "Please enter a valid email.",
										pattern: {
											value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
											message:
												"Please enter a valid email.",
										},
									})}
									id="email"
									class="block rounded-t-md placeholder-transparent pl-16 px-3 pt-7 pb-3 w-full text-[#49454F] sm:text-xl text-lg border-0 border-b-2 border-[#186532] appearance-none focus:outline-none focus:ring-0 peer"
									placeholder="Email"
								/>
								{errors.email && (
									<p className="mt-2 text-[#df2020]">
										{errors.email?.message}
									</p>
								)}
								<label
									htmlFor="email"
									class="pl-16 absolute top-2.5 text-sm sm-text:md text-[#49454F] peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl sm:peer-placeholder-shown:text-2xl peer-placeholder-shown:text-[#49454F] peer-focus:text-sm sm:peer-focus:text-sm peer-focus:top-2.5 transition-all"
								>
									Email
								</label>
							</div>
							<div class="relative mt-3">
								<span class="absolute left-2 top-5 w-7 ml-3">
									<svg
										fill="none"
										stroke="#49454F"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										></path>
									</svg>
								</span>
								<input
									{...register("phone", {
										required:
											"Please enter a valid phone number.",
										pattern: {
											value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, //Fixed
											message:
												"Please enter a valid phone number",
										},
									})}
									type="tel"
									id="phone"
									class="block rounded-t-md placeholder-transparent pl-16 px-3 pt-7 pb-3 w-full text-[#49454F] sm:text-xl text-lg focus:border-b-[#186532] border-0 border-b-2 border-[#186532] appearance-none focus:outline-none focus:ring-0 peer"
									placeholder="Phone number"
								/>
								{errors.phone && (
									<p className="mt-2 text-[#df2020]">
										{errors.phone?.message}
									</p>
								)}
								<label
									htmlFor="phone"
									class="pl-16 absolute top-2.5 text-sm sm-text:md text-[#49454F] peer-placeholder-shown:top-5 peer-placeholder-shown:text-xl sm:peer-placeholder-shown:text-2xl peer-placeholder-shown:text-[#49454F] peer-focus:text-sm sm:peer-focus:text-sm peer-focus:top-2.5 transition-all"
								>
									Phone number
								</label>
							</div>
						</div>

						<div className="mt-4 font-notosans">
							<label
								htmlFor="agree"
								class="inline-flex items-start p-4 text-xs sm:text-base rounded-md border-solid border-2 border-black"
							>
								<input
									{...register("agree", {
										required:
											"Please agree to receive messages to proceed.",
									})}
									id="agree"
									type="checkbox"
									className="
		                          border-gray-300 border-2
		                          text-black
		                          focus:border-gray-300 focus:ring-black
		                        "
								/>
								<span class="ml-2 ">
									I agree to receiving recurring automated
									messages at the number I have provided.
									Consent is not a condition to purchase.
								</span>
							</label>
							{errors.agree && (
								<p className="mt-2 text-[#df2020]">
									{errors.agree?.message}
								</p>
							)}
						</div>
						<div className="mt-4 items-stretch text-xs font-poppins">
							<button
								className="inline-block rounded-full text-3xl sm:text-4xl font-bold bg-[#146531] text-white px-4 sm:px-6 py-4 sm:py-5 w-full"
								type="submit"
							>
								Try your luck
							</button>
						</div>
						<div className="text-center text-xs mt-3 font-notosans italic">
							<p>*You can spin the wheel only once!</p>
							<p>
								*If you win, you can claim your coupon for 10
								minutes only!
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Form;
