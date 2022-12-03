import React from "react";

const Pagination = () => {
	return (
		<div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
			<div className="flex justify-between flex-1 sm:hidden">
				<a
					href="#"
					className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
				>
					Previous
				</a>
				<a
					href="#"
					className="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
				>
					Next
				</a>
			</div>
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing
						<span className="font-medium">1</span>
						to
						<span className="font-medium">10</span>
						of
						<span className="font-medium">97</span>
						results
					</p>
				</div>
				<div>
					<nav
						className="inline-flex -space-x-px rounded-md shadow-sm isolate"
						aria-label="Pagination"
					>
						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 focus:z-20"
						>
							<span className="sr-only">Previous</span>
							{/* Heroicon name: mini/chevron-left */}
							<svg
								className="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						<a
							href="#"
							aria-current="page"
							className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50 focus:z-20"
						>
							1
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20"
						>
							2
						</a>
						<a
							href="#"
							className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20 md:inline-flex"
						>
							3
						</a>
						<span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300">
							...
						</span>
						<a
							href="#"
							className="relative items-center hidden px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20 md:inline-flex"
						>
							8
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20"
						>
							9
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 focus:z-20"
						>
							10
						</a>
						<a
							href="#"
							className="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 focus:z-20"
						>
							<span className="sr-only">Next</span>
							{/* Heroicon name: mini/chevron-right */}
							<svg
								className="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fillRule="evenodd"
									d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
									clipRule="evenodd"
								/>
							</svg>
						</a>
					</nav>
				</div>
			</div>
		</div>
	);
};

Pagination.displayName = "Pagination";

export default Pagination;
