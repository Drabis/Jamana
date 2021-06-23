import React from 'react';

const StyleButton = ( {
	active,
	label,
	onToggle,
	style
} ) => {
	const handleToggle = e => {
		e.preventDefault();
		onToggle( style );
	};

	const className = `RichEditor-styleButton${ active ? ' RichEditor-activeButton' : '' }`;

	return (
		<span
			className={className}
			onMouseDown={ handleToggle }
		>
			{ label }
		</span>
	);
}

export default StyleButton;