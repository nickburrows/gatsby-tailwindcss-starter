import React from "react";

const SlideOvers = () => {
	return (
		<div
			className="relative z-10"
			aria-labelledby="slide-over-title"
			role="dialog"
			aria-modal="true"
		>
			{/*
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
From: "opacity-0"
To: "opacity-100"
    Leaving: "ease-in-out duration-500"
From: "opacity-100"
To: "opacity-0"
  */}
			<div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
			<div className="fixed inset-0 overflow-hidden">
				<div className="absolute inset-0 overflow-hidden">
					<div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
						{/*
    Slide-over panel, show/hide based on slide-over state.

    Entering: "transform transition ease-in-out duration-500 sm:duration-700"
      From: "translate-x-full"
      To: "translate-x-0"
    Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
      From: "translate-x-0"
      To: "translate-x-full"
  */}
						<div className="relative w-screen max-w-md pointer-events-auto">
							{/*
      Close button, show/hide based on slide-over state.

      Entering: "ease-in-out duration-500"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in-out duration-500"
        From: "opacity-100"
        To: "opacity-0"
    */}
							<div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
								<button
									type="button"
									className="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
								>
									<span className="sr-only">Close panel</span>
									{/* Heroicon name: outline/x-mark */}
									<svg
										className="w-6 h-6"
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
							<div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
								<div className="px-4 sm:px-6">
									<h2
										className="text-lg font-medium text-gray-900"
										id="slide-over-title"
									>
										Panel title
									</h2>
								</div>
								<div className="relative flex-1 px-4 mt-6 sm:px-6">
									{/* Replace with your content */}
									<div className="absolute inset-0 px-4 sm:px-6">
										<div
											className="h-full border-2 border-gray-200 border-dashed"
											aria-hidden="true"
										/>
									</div>
									{/* /End replace */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

SlideOvers.displayName = "Slide Overs";

export default SlideOvers;
