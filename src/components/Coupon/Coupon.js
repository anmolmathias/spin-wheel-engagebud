import React from "react";
import { useState } from "react";
import WheelImage from "../../assets/images/wheel.webp";

function Coupon({ setActivePage, coupon, label }) {
	const [copyText, setCopyText] = useState("Copy");
	function copyFunction() {
		setCopyText("Copied!");
		navigator.clipboard.writeText(coupon);
	}
	return (
		<div className="sm:flex h-screen items-center font-poppins">
			<div className="p-6 max-w-md mx-auto sm:flex xl:items-center sm:max-w-2xl xl:max-w-6xl xl:gap-x-44 sm:visible relative overflow-hidden sm:overflow-visible">
				<div className="w-full sm:w-2/5 xl:w-1/2 xl:object-contain sm:flex sm:items-center sm:static absolute inset-x-0 -top-16">
					<img
						src={WheelImage}
						alt="spin wheel"
						className="w-52 xl:static xl:w-full sm:absolute sm:max-w-none sm:w-96 mx-auto sm:mx-0 sm:-left-64"
					/>
				</div>
				<div className="pt-48 sm:pt-0 sm:w-3/5 xl:w-1/2 text-center">
					<h2 className="text-2xl sm:text-3xl font-poppins font-bold">Congrats! You Won:</h2>
					<div className="mt-4 sm:mt-6 text-4xl sm:text-5xl font-poppins font-bold">{label}</div>
					<div class="mt-4 sm:mt-7 inline-flex">
						<div className="inline-block rounded-l-lg p-5 sm:p-8 border-0 bg-[#141414]/20 align-middle text-white font-black text-4xl sm:text-5xl">
							{coupon}
						</div>
						<div
							onClick={() => copyFunction()}
							className="inline-block rounded-r-lg p-5 pt-6 sm:pt-9 border-0 bg-[#146531] align-middle text-white font-bold text-2xl sm:text-3xl uppercase"
						>
							{copyText}
						</div>
					</div>
					<div
						className="mt-6 sm:mt-8 inline-block rounded-full text-2xl sm:text-3xl font-bold bg-[#146531] text-white px-6 sm:px-9 py-3 sm:py-5"
						onClick={() => {
							navigator.clipboard.writeText(coupon);
							setActivePage("Form");
						}}
					>
						Close Panel & Copy
					</div>
					<div className="mt-6 text-xs sm:text-base font-notosans italic text-[#146531]">
						*You can claim your coupon for 10 minutes only!
					</div>
				</div>
			</div>
		</div>
	);
}

export default Coupon;
