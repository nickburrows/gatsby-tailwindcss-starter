import React, { useState } from "react";

import { Transition } from "@headlessui/react";

const SelectMenus = () => {
	const [isShowing, setIsShowing] = useState(false);
	return (
		<div>
			<label
				id="listbox-label"
				className="block text-sm font-medium text-gray-700"
			>
				Assigned to
			</label>
			<div className="relative mt-1">
				<button
					type="button"
					className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md shadow-sm cursor-default focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
					aria-haspopup="listbox"
					aria-expanded="true"
					aria-labelledby="listbox-label"
					onClick={() => setIsShowing((isShowing) => !isShowing)}
				>
					<span className="flex items-center">
						<img
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
							className="flex-shrink-0 w-6 h-6 rounded-full"
						/>
						<span className="block ml-3 truncate">Tom Cook</span>
					</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
						{/* Heroicon name: mini/chevron-up-down */}
						<svg
							className="w-5 h-5 text-gray-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</span>
				</button>
				{/*
Select popover, show/hide based on select state.

Entering: ""
  From: ""
  To: ""
Leaving: "transition ease-in duration-100"
  From: "opacity-100"
  To: "opacity-0"
    */}
				<Transition
					show={isShowing}
					enter="transition-opacity duration-75"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<ul
						className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
						tabIndex={-1}
						role="listbox"
						aria-labelledby="listbox-label"
						aria-activedescendant="listbox-option-3"
					>
						{/*
  Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

  Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
*/}
						<li
							className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9"
							id="listbox-option-0"
							role="option"
							aria-selected="true"
						>
							<div className="flex items-center">
								<img
									src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									className="flex-shrink-0 w-6 h-6 rounded-full"
								/>
								{/* Selected: "font-semibold", Not Selected: "font-normal" */}
								<span className="block ml-3 font-normal truncate">
									Wade Cooper
								</span>
							</div>
							{/*
    Checkmark, only display for selected option.

    Highlighted: "text-white", Not Highlighted: "text-indigo-600"
  */}
							<span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
								{/* Heroicon name: mini/check */}
								<svg
									className="w-5 h-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
						</li>
						{/* More items... */}
					</ul>
				</Transition>
			</div>
		</div>
	);
};

SelectMenus.displayName = "SelectMenus";

export default SelectMenus;
