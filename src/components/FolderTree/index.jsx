import React from "react";
import Tree from "./Tree";
import { structure } from "./structure";

const FolderTree = () => {
	return (
		<div className="max-w-xl p-4 text-white bg-gray-700 min-h-max">
			<Tree data={structure} />
		</div>
	);
};

export default FolderTree;
