import React from "react";

const Banners = () => {
	return (
		<>
			<div className="bg-indigo-600">
				<div className="px-3 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div className="flex flex-wrap items-center justify-between">
						<div className="flex items-center flex-1 w-0">
							<span className="flex p-2 bg-indigo-800 rounded-lg">
								{/* Heroicon name: outline/megaphone */}
								<svg
									className="w-6 h-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
									/>
								</svg>
							</span>
							<p className="ml-3 font-medium text-white truncate">
								<span className="md:hidden">We announced a new product!</span>
								<span className="hidden md:inline">
									Big news! We're excited to announce a brand new product.
								</span>
							</p>
						</div>
						<div className="flex-shrink-0 order-3 w-full mt-2 sm:order-2 sm:mt-0 sm:w-auto">
							<a
								href="#"
								className="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50"
							>
								Learn more
							</a>
						</div>
						<div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
							<button
								type="button"
								className="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
							>
								<span className="sr-only">Dismiss</span>
								{/* Heroicon name: outline/x-mark */}
								<svg
									className="w-6 h-6 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Banners.displayName = "Banners";

export default Banners;
