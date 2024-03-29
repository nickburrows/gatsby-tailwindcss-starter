import React from "react";

const Headers = () => {
	return (
		<>
			<div className="relative bg-white">
				<div className="px-4 mx-auto max-w-7xl sm:px-6">
					<div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
						<div className="flex justify-start lg:w-0 lg:flex-1">
							<a href="#">
								<span className="sr-only">Your Company</span>
								<img
									className="w-auto h-8 sm:h-10"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt
								/>
							</a>
						</div>
						<div className="-my-2 -mr-2 md:hidden">
							<button
								type="button"
								className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
								aria-expanded="false"
							>
								<span className="sr-only">Open menu</span>
								{/* Heroicon name: outline/bars-3 */}
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
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
							</button>
						</div>
						<nav className="hidden space-x-10 md:flex">
							<div className="relative">
								{/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
								<button
									type="button"
									className="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									aria-expanded="false"
								>
									<span>Solutions</span>
									{/*
        Heroicon name: mini/chevron-down

        Item active: "text-gray-600", Item inactive: "text-gray-400"
      */}
									<svg
										className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
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
								{/*
      'Solutions' flyout menu, show/hide based on flyout menu state.

      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
    */}
								<div className="absolute z-10 w-screen max-w-md px-2 mt-3 -ml-4 transform sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
									<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/chart-bar */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Analytics
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Get a better understanding of where your traffic is
														coming from.
													</p>
												</div>
											</a>
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/cursor-arrow-rays */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Engagement
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Speak directly to your customers in a more
														meaningful way.
													</p>
												</div>
											</a>
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/shield-check */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Security
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Your customers' data will be safe and secure.
													</p>
												</div>
											</a>
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/squares-2x2 */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Integrations
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Connect with third-party tools that you're already
														using.
													</p>
												</div>
											</a>
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/arrow-path */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Automations
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Build strategic funnels that will drive your
														customers to convert
													</p>
												</div>
											</a>
										</div>
										<div className="px-5 py-5 space-y-6 bg-gray-50 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
											<div className="flow-root">
												<a
													href="#"
													className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
												>
													{/* Heroicon name: outline/play */}
													<svg
														className="flex-shrink-0 w-6 h-6 text-gray-400"
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
															d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
														/>
													</svg>
													<span className="ml-3">Watch Demo</span>
												</a>
											</div>
											<div className="flow-root">
												<a
													href="#"
													className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-100"
												>
													{/* Heroicon name: outline/phone */}
													<svg
														className="flex-shrink-0 w-6 h-6 text-gray-400"
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
															d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
														/>
													</svg>
													<span className="ml-3">Contact Sales</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Pricing
							</a>
							<a
								href="#"
								className="text-base font-medium text-gray-500 hover:text-gray-900"
							>
								Docs
							</a>
							<div className="relative">
								{/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
								<button
									type="button"
									className="inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									aria-expanded="false"
								>
									<span>More</span>
									{/*
        Heroicon name: mini/chevron-down

        Item active: "text-gray-600", Item inactive: "text-gray-400"
      */}
									<svg
										className="w-5 h-5 ml-2 text-gray-400 group-hover:text-gray-500"
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
								{/*
      'More' flyout menu, show/hide based on flyout menu state.

      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
    */}
								<div className="absolute z-10 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
									<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
										<div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/lifebuoy */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Help Center
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Get all of your questions answered in our forums or
														contact support.
													</p>
												</div>
											</a>
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/bookmark-square */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Guides
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Learn how to maximize our platform to get the most
														out of it.
													</p>
												</div>
											</a>
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/calendar */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Events
													</p>
													<p className="mt-1 text-sm text-gray-500">
														See what meet-ups and other events we might be
														planning near you.
													</p>
												</div>
											</a>
											<a
												href="#"
												className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
											>
												{/* Heroicon name: outline/shield-check */}
												<svg
													className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
														d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
													/>
												</svg>
												<div className="ml-4">
													<p className="text-base font-medium text-gray-900">
														Security
													</p>
													<p className="mt-1 text-sm text-gray-500">
														Understand how we take your privacy seriously.
													</p>
												</div>
											</a>
										</div>
										<div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
											<div>
												<h3 className="text-base font-medium text-gray-500">
													Recent Posts
												</h3>
												<ul role="list" className="mt-4 space-y-4">
													<li className="text-base truncate">
														<a
															href="#"
															className="font-medium text-gray-900 hover:text-gray-700"
														>
															Boost your conversion rate
														</a>
													</li>
													<li className="text-base truncate">
														<a
															href="#"
															className="font-medium text-gray-900 hover:text-gray-700"
														>
															How to use search engine optimization to drive
															traffic to your site
														</a>
													</li>
													<li className="text-base truncate">
														<a
															href="#"
															className="font-medium text-gray-900 hover:text-gray-700"
														>
															Improve your customer experience
														</a>
													</li>
												</ul>
											</div>
											<div className="mt-5 text-sm">
												<a
													href="#"
													className="font-medium text-indigo-600 hover:text-indigo-500"
												>
													View all posts
													<span aria-hidden="true"> →</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</nav>
						<div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
							<a
								href="#"
								className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
							>
								Sign in
							</a>
							<a
								href="#"
								className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm whitespace-nowrap hover:bg-indigo-700"
							>
								Sign up
							</a>
						</div>
					</div>
				</div>
				{/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
From: "opacity-0 scale-95"
To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
From: "opacity-100 scale-100"
To: "opacity-0 scale-95"
  */}
				<div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
					<div className="bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50 ring-1 ring-black ring-opacity-5">
						<div className="px-5 pt-5 pb-6">
							<div className="flex items-center justify-between">
								<div>
									<img
										className="w-auto h-8"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt="Your Company"
									/>
								</div>
								<div className="-mr-2">
									<button
										type="button"
										className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
									>
										<span className="sr-only">Close menu</span>
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
							</div>
							<div className="mt-6">
								<nav className="grid gap-y-8">
									<a
										href="#"
										className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/chart-bar */}
										<svg
											className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
												d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Analytics
										</span>
									</a>
									<a
										href="#"
										className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/cursor-arrow-rays */}
										<svg
											className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
												d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Engagement
										</span>
									</a>
									<a
										href="#"
										className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/shield-check */}
										<svg
											className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
												d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Security
										</span>
									</a>
									<a
										href="#"
										className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/squares-2x2 */}
										<svg
											className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
												d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Integrations
										</span>
									</a>
									<a
										href="#"
										className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
									>
										{/* Heroicon name: outline/arrow-path */}
										<svg
											className="flex-shrink-0 w-6 h-6 text-indigo-600"
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
												d="M4.5 12c0-1.232.046-2.453.138-3.662a4.006 4.006 0 013.7-3.7 48.678 48.678 0 017.324 0 4.006 4.006 0 013.7 3.7c.017.22.032.441.046.662M4.5 12l-3-3m3 3l3-3m12 3c0 1.232-.046 2.453-.138 3.662a4.006 4.006 0 01-3.7 3.7 48.657 48.657 0 01-7.324 0 4.006 4.006 0 01-3.7-3.7c-.017-.22-.032-.441-.046-.662M19.5 12l-3 3m3-3l3 3"
											/>
										</svg>
										<span className="ml-3 text-base font-medium text-gray-900">
											Automations
										</span>
									</a>
								</nav>
							</div>
						</div>
						<div className="px-5 py-6 space-y-6">
							<div className="grid grid-cols-2 gap-y-4 gap-x-8">
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Pricing
								</a>
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Docs
								</a>
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Help Center
								</a>
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Guides
								</a>
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Events
								</a>
								<a
									href="#"
									className="text-base font-medium text-gray-900 hover:text-gray-700"
								>
									Security
								</a>
							</div>
							<div>
								<a
									href="#"
									className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
								>
									Sign up
								</a>
								<p className="mt-6 text-base font-medium text-center text-gray-500">
									Existing customer?
									<a href="#" className="text-indigo-600 hover:text-indigo-500">
										Sign in
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

Headers.displayName = "Headers";

export default Headers;
