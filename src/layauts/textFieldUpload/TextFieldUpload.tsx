import { ChangeEvent, useState } from 'react';
import { ContainerTextField, Input, ContainerInput, HelperText } from './styled';

interface Props {
	classes?: string;
	classesInput?: string;
	classesContainerInput?: string;
	placeholder?: string;
	label?: string;
	type?: 'file';
	name: string;
	handleChangeFile: (e: ChangeEvent<HTMLInputElement>) => void;
	isReadOnly?: boolean;
	isError?: boolean;
	isFull?: boolean;
	helperText?: string;
	colorHelperText?: string;
	weightHelperText?: string;
	sizeHelperText?: string;
	refInput?: { current: HTMLInputElement | null };
}

const TextField = ({
	classes = '',
	classesInput = '',
	classesContainerInput = '',
	placeholder = '',
	label = '',
	type = 'file',
	name,
	handleChangeFile,
	isReadOnly = false,
	isError = false,
	isFull = false,
	helperText = '',
	colorHelperText = '',
	weightHelperText = '',
	sizeHelperText = '',
	refInput = { current: null },
}: Props): JSX.Element => {

	const [isFocus, setIsFocus] = useState<boolean>(false);
	
	return (
		<ContainerTextField
			className={classes}
			onFocus={() => setIsFocus(true)}
			onBlur={() => setIsFocus(false)}>
			{label !== '' ? <span className='label'>{label}</span> : null}

			<ContainerInput
				isFocus={isFocus}
				isError={isError}
				isFull={isFull}
				className={`w-100 ${classesContainerInput}`}
			>
				<Input
					placeholder={placeholder}
					type={type}
					name={name}
					onChange={handleChangeFile}
					readOnly={isReadOnly}
					className={classesInput}
					autoComplete={"off"}
					ref={refInput}
				/>
			</ContainerInput>

			{
				helperText.length === 0
				? null
				: <HelperText
					color={colorHelperText}
					weight={weightHelperText}
					size={sizeHelperText}
				>{helperText}</HelperText>
			}
		</ContainerTextField>
	);
};

export default TextField;