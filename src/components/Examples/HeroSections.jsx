import React from "react";

const HeroSections = () => {
	return (
		<>
			{/* This example requires Tailwind CSS v3.0+ */}
			<div className="bg-white isolate">
				<div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
					<svg
						className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
						viewBox="0 0 1155 678"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
							fillOpacity=".3"
							d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
						/>
						<defs>
							<linearGradient
								id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
								x1="1155.49"
								x2="-78.208"
								y1=".177"
								y2="474.645"
								gradientUnits="userSpaceOnUse"
							>
								<stop stopColor="#9089FC" />
								<stop offset={1} stopColor="#FF80B5" />
							</linearGradient>
						</defs>
					</svg>
				</div>
				<div className="px-6 pt-6 lg:px-8">
					<div>
						<nav
							className="flex items-center justify-between h-9"
							aria-label="Global"
						>
							<div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
								<a href="#" className="-m-1.5 p-1.5">
									<span className="sr-only">Your Company</span>
									<img
										className="h-8"
										src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
										alt=""
									/>
								</a>
							</div>
							<div className="flex lg:hidden">
								<button
									type="button"
									className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								>
									<span className="sr-only">Open main menu</span>
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
							<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
								<a
									href="#"
									className="font-semibold text-gray-900 hover:text-gray-900"
								>
									Product
								</a>
								<a
									href="#"
									className="font-semibold text-gray-900 hover:text-gray-900"
								>
									Features
								</a>
								<a
									href="#"
									className="font-semibold text-gray-900 hover:text-gray-900"
								>
									Marketplace
								</a>
								<a
									href="#"
									className="font-semibold text-gray-900 hover:text-gray-900"
								>
									Company
								</a>
							</div>
							<div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
								<a
									href="#"
									className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
								>
									Log in
								</a>
							</div>
						</nav>
						{/* Mobile menu, show/hide based on menu open state. */}
						<div role="dialog" aria-modal="true">
							<div
								focus="true"
								className="fixed inset-0 z-10 px-6 py-6 overflow-y-auto bg-white lg:hidden"
							>
								<div className="flex items-center justify-between h-9">
									<div className="flex">
										<a href="#" className="-m-1.5 p-1.5">
											<span className="sr-only">Your Company</span>
											<img
												className="h-8"
												src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
												alt=""
											/>
										</a>
									</div>
									<div className="flex">
										<button
											type="button"
											className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
								<div className="flow-root mt-6">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="py-6 space-y-2">
											<a
												href="#"
												className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
											>
												Product
											</a>
											<a
												href="#"
												className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
											>
												Features
											</a>
											<a
												href="#"
												className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
											>
												Marketplace
											</a>
											<a
												href="#"
												className="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-400/10"
											>
												Company
											</a>
										</div>
										<div className="py-6">
											<a
												href="#"
												className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
											>
												Log in
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<main>
					<div className="relative px-6 lg:px-8">
						<div className="max-w-3xl pt-20 pb-32 mx-auto sm:pt-48 sm:pb-40">
							<div>
								<div className="hidden sm:mb-8 sm:flex sm:justify-center">
									<div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
										<span className="text-gray-600">
											Announcing our next round of funding.{" "}
											<a href="#" className="font-semibold text-indigo-600">
												<span className="absolute inset-0" aria-hidden="true" />
												Read more <span aria-hidden="true">→</span>
											</a>
										</span>
									</div>
								</div>
								<div>
									<h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
										Data to enrich your online business
									</h1>
									<p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
										Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
										qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
										occaecat fugiat aliqua.
									</p>
									<div className="flex mt-8 gap-x-4 sm:justify-center">
										<a
											href="#"
											className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
										>
											Get started
											<span className="text-indigo-200" aria-hidden="true">
												→
											</span>
										</a>
										<a
											href="#"
											className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
										>
											Live demo
											<span className="text-gray-400" aria-hidden="true">
												→
											</span>
										</a>
									</div>
								</div>
								<div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
									<svg
										className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
										viewBox="0 0 1155 678"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
											fillOpacity=".3"
											d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
										/>
										<defs>
											<linearGradient
												id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
												x1="1155.49"
												x2="-78.208"
												y1=".177"
												y2="474.645"
												gradientUnits="userSpaceOnUse"
											>
												<stop stopColor="#9089FC" />
												<stop offset={1} stopColor="#FF80B5" />
											</linearGradient>
										</defs>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

HeroSections.displayName = "Hero Sections";

export default HeroSections;
