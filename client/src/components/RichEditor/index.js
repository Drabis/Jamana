import React, { useRef, useState, useEffect } from "react";
import { Editor, EditorState, RichUtils, convertFromRaw } from "draft-js";

import BlockStyleControls from "./BlockStyleControls";
import InlineStyleControls from "./InlineStyleControls";

import "./styles.css";

const RichEditor = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const editorRef = useRef();

  const handleFocus = () => editorRef.current.focus();

  const handleChange = (newState) => {
    setEditorState(newState);
  };

  useEffect(() => {
    props.updateBlog(editorState.getCurrentContent());
  }, [editorState]);

  useEffect(() => {
    if (Object.keys(props.post).length > 0) {
      const content = convertFromRaw(props.post);
      const editor = EditorState.createWithContent(content);
      setEditorState(editor);
    } else {
      setEditorState(EditorState.createEmpty());
    }
  }, [props.post]);

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleChange(newState);
      return true;
    }
    return false;
  };

  const handleTab = (e) => {
    const maxDepth = 4;
    const newState = RichUtils.onTab(e, editorState, maxDepth);
    handleChange(newState);
  };

  const toggleBlockType = (blockType) => {
    const newState = RichUtils.toggleBlockType(editorState, blockType);
    handleChange(newState);
  };

  const toggleInlineStyle = (inlineStyle) => {
    const newState = RichUtils.toggleInlineStyle(editorState, inlineStyle);
    handleChange(newState);
  };

  const getEditorClassName = () => {
    const contentState = editorState.getCurrentContent();
    const hasText = contentState.hasText();

    if (!hasText) {
      const isStyled =
        contentState.getBlockMap().first().getType() !== "unstyled";

      return `RichEditor-editor${
        isStyled ? " RichEditor-hidePlaceholder" : ""
      }`;
    }

    return "RichEditor-editor";
  };

  return (
    <div className="RichEditor-root">
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={getEditorClassName()} onClick={handleFocus}>
        <Editor
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={handleChange}
          onTab={handleTab}
          placeholder="Your blog..."
          ref={editorRef}
          spellCheck
        />
      </div>
    </div>
  );
};

export default RichEditor;
