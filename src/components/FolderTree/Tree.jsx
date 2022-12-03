import React from "react";
import styled from "styled-components";
import File from "./File";
import Folder from "./Folder";

const StyledTree = styled.div`
	line-height: 1.5;
`;

const TreeRecursive = ({ data }) => {
	// loop through the data
	return data.map((item) => {
		// if its a file render <File />
		if (item.type === "file") {
			return <File name={item.name} />;
		}
		// if its a folder render <Folder />
		if (item.type === "folder") {
			return (
				<Folder name={item.name}>
					{/* Call the <TreeRecursive /> component with the current item.childrens */}
					<TreeRecursive data={item.childrens} />
				</Folder>
			);
		}
		return item;
	});
};

const Tree = ({ data, children }) => {
	const isImperative = data && !children;
	return (
		<StyledTree>
			{isImperative ? <TreeRecursive data={data} /> : children}
		</StyledTree>
	);
};

Tree.File = File;
Tree.Folder = Folder;

export default Tree;
