import React from 'react';
import StyleButton from './StyleButton';

const BlockStyleControls = ( { editorState, onToggle } ) => {
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey( selection.getStartKey() )
		.getType();

	const BLOCK_TYPES = [
		{ label: 'H1', style: 'header-two' },
		{ label: 'H2', style: 'header-three' },
		{ label: 'H3', style: 'header-four' },
		{ label: 'UL', style: 'unordered-list-item' },
		{ label: 'OL', style: 'ordered-list-item' },
	];

	return (
		<div className="RichEditor-controls">
			{ BLOCK_TYPES.map( type =>
				<StyleButton
					key={ type.label }
					active={ type.style === blockType }
					label={ type.label }
					onToggle={ onToggle }
					style={ type.style }
				/>
			)}
		</div>
	);
};

export default BlockStyleControls;