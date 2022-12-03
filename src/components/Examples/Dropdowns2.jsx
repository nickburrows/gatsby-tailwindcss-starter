import React from "react";

const Dropdowns2 = () => {
	return (
		<div className="relative inline-block text-left">
			<div>
				<button
					type="button"
					className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
					id="menu-button"
					aria-expanded="true"
					aria-haspopup="true"
				>
					Options
					{/* Heroicon name: mini/chevron-down */}
					<svg
						className="w-5 h-5 ml-2 -mr-1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fillRule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</div>
			{/*
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
From: "transform opacity-0 scale-95"
To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
From: "transform opacity-100 scale-100"
To: "transform opacity-0 scale-95"
  */}
			<div
				className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="menu-button"
				tabIndex={-1}
			>
				<div className="py-1" role="none">
					{/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-0"
					>
						Edit
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-1"
					>
						Duplicate
					</a>
				</div>
				<div className="py-1" role="none">
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-2"
					>
						Archive
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-3"
					>
						Move
					</a>
				</div>
				<div className="py-1" role="none">
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-4"
					>
						Share
					</a>
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-5"
					>
						Add to favorites
					</a>
				</div>
				<div className="py-1" role="none">
					<a
						href="#"
						className="block px-4 py-2 text-sm text-gray-700"
						role="menuitem"
						tabIndex={-1}
						id="menu-item-6"
					>
						Delete
					</a>
				</div>
			</div>
		</div>
	);
};

Dropdowns2.displayName = "Dropdowns2";

export default Dropdowns2;
