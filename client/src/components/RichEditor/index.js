import React, { useRef, useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import BlockStyleControls from './BlockStyleControls';
import InlineStyleControls from './InlineStyleControls';

import './styles.css';

const RichEditor = () => {
	const [ editorState, setEditorState ] = useState( EditorState.createEmpty() );
	const editorRef = useRef();

	const handleFocus = () => editorRef.current.focus();

	const handleChange = newState => setEditorState( newState );

	const handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand( editorState, command );
		if ( newState ) {
			handleChange( newState );
			return true;
		}
		return false;
	}

	const handleTab = e => {
		const maxDepth = 4;
		const newState = RichUtils.onTab( e, editorState, maxDepth );
		handleChange( newState );
	}

	const toggleBlockType = blockType => {
		const newState = RichUtils.toggleBlockType( editorState, blockType );
		handleChange( newState );
	}

	const toggleInlineStyle = inlineStyle => {
		const newState = RichUtils.toggleInlineStyle( editorState, inlineStyle );
		handleChange( newState );
	}

	const getEditorClassName = () => {
		const contentState = editorState.getCurrentContent();
		const hasText = contentState.hasText();

		if ( !hasText ) {
			const isStyled = contentState
				.getBlockMap()
				.first()
				.getType() !== 'unstyled';
				
			return `RichEditor-editor${ isStyled ? ' RichEditor-hidePlaceholder' : '' }`;
		}

		return 'RichEditor-editor';
	}

	return (
		<div className="RichEditor-root">
			<BlockStyleControls
				editorState={ editorState }
				onToggle={ toggleBlockType }
			/>
			<InlineStyleControls
				editorState={ editorState }
				onToggle={ toggleInlineStyle }
			/>
			<div
				className={ getEditorClassName() }
				onClick={ handleFocus }
			>
				<Editor
					editorState={ editorState }
					handleKeyCommand={ handleKeyCommand }
					onChange={ handleChange }
					onTab={ handleTab }
					placeholder="Your blog..."
					ref={ editorRef }
					spellCheck
				/>
			</div>
		</div>
	);
}

export default RichEditor;
