import React from "react";

const DescriptionLists = () => {
	return (
		<>
			<div className="overflow-hidden bg-white shadow sm:rounded-lg">
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg font-medium leading-6 text-gray-900">
						Applicant Information
					</h3>
					<p className="max-w-2xl mt-1 text-sm text-gray-500">
						Personal details and application.
					</p>
				</div>
				<div className="border-t border-gray-200">
					<dl>
						<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Full name</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								Margot Foster
							</dd>
						</div>
						<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Application for
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								Backend Developer
							</dd>
						</div>
						<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Email address
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								margotfoster@example.com
							</dd>
						</div>
						<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">
								Salary expectation
							</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								$120,000
							</dd>
						</div>
						<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">About</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
								incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
								consequat sint. Sit id mollit nulla mollit nostrud in ea officia
								proident. Irure nostrud pariatur mollit ad adipisicing
								reprehenderit deserunt qui eu.
							</dd>
						</div>
						<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
							<dt className="text-sm font-medium text-gray-500">Attachments</dt>
							<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
								<ul
									role="list"
									className="border border-gray-200 divide-y divide-gray-200 rounded-md"
								>
									<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
										<div className="flex items-center flex-1 w-0">
											{/* Heroicon name: mini/paper-clip */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="flex-1 w-0 ml-2 truncate">
												resume_back_end_developer.pdf
											</span>
										</div>
										<div className="flex-shrink-0 ml-4">
											<a
												href="#"
												className="font-medium text-indigo-600 hover:text-indigo-500"
											>
												Download
											</a>
										</div>
									</li>
									<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
										<div className="flex items-center flex-1 w-0">
											{/* Heroicon name: mini/paper-clip */}
											<svg
												className="flex-shrink-0 w-5 h-5 text-gray-400"
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
													clipRule="evenodd"
												/>
											</svg>
											<span className="flex-1 w-0 ml-2 truncate">
												coverletter_back_end_developer.pdf
											</span>
										</div>
										<div className="flex-shrink-0 ml-4">
											<a
												href="#"
												className="font-medium text-indigo-600 hover:text-indigo-500"
											>
												Download
											</a>
										</div>
									</li>
								</ul>
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</>
	);
};

DescriptionLists.displayName = "Description Lists";

export default DescriptionLists;
