import React from "react";

const InputGroups = () => {
	return (
		<>
			{/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
// ...
require('@tailwindcss/forms'),
    ],
  }
  ```
*/}
			<div>
				<label
					htmlFor="price"
					className="block text-sm font-medium text-gray-700"
				>
					Price
				</label>
				<div className="relative mt-1 rounded-md shadow-sm">
					<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
						<span className="text-gray-500 sm:text-sm">$</span>
					</div>
					<input
						type="text"
						name="price"
						id="price"
						className="block w-full pr-12 border-gray-300 rounded-md pl-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						placeholder={0.0}
					/>
					<div className="absolute inset-y-0 right-0 flex items-center">
						<label htmlFor="currency" className="sr-only">
							Currency
						</label>
						<select
							id="currency"
							name="currency"
							className="h-full py-0 pl-2 text-gray-500 bg-transparent border-transparent rounded-md pr-7 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						>
							<option>USD</option>
							<option>CAD</option>
							<option>EUR</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
};

InputGroups.displayName = "Input Groups";

export default InputGroups;
