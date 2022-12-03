import React from "react";
import styled from "styled-components";
import { AiOutlineFile } from "react-icons/ai";
import { DiNodejsSmall } from "react-icons/di";
import FileIcons from "./FileIcons";

const StyledFile = styled.div`
	padding-left: 20px;
	display: flex;
	align-items: center;
	span {
		margin-left: 5px;
	}
`;

const File = ({ name }) => {
	if (name === "package.json") {
		return (
			<StyledFile>
				<DiNodejsSmall className="text-green-400" />
				<span>{name}</span>
			</StyledFile>
		);
	}

	let ext = name.split(".")[1];

	return (
		<StyledFile>
			{FileIcons[ext] || <AiOutlineFile />}
			<span>{name}</span>
		</StyledFile>
	);
};

export default File;
