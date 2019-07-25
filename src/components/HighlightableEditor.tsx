import React, {
  useRef,
  MouseEvent,
  ReactNode,
  UIEvent,
  ChangeEvent,
} from 'react';
import nanoid from 'nanoid';
import { connect } from 'react-redux';

import styles from './HighlightableEditor.module.css';
import {
  addHighlight as addHighlightAction,
  removeHighlight as removeHighlightAction,
  changeHighlight as changeHighlightAction,
} from '../redux/modules/highlights';
import { changeText as changeTextAction } from '../redux/modules/text';
import { areRangesEquals, doRangesOverlap, indexOfFirstDiff } from '../utils';

type Highlight = import('../types').Highlight;

type HighlightableEditorProps = {
  highlights: Array<Highlight>;
  text: string;
  addHighlight: typeof addHighlightAction;
  removeHighlight: typeof removeHighlightAction;
  changeText: typeof changeTextAction;
  changeHighlight: typeof changeHighlightAction;
};

const applyHighlightsToText = (
  _text: string,
  _highlights: Array<Highlight>
): ReactNode => {
  const orderedHighlights = _highlights.sort(
    (a, b) => a.selectionRange.start - b.selectionRange.start
  );

  const output: ReactNode = orderedHighlights.reduce(
    (acc: Array<ReactNode>, selection, index, source) => {
      const textBeforeSelection: string = _text.slice(
        index > 0 ? source[index - 1].selectionRange.end : 0,
        selection.selectionRange.start
      );

      const selectionText = (
        <mark key={selection.id} style={{ backgroundColor: 'yellow' }}>
          {_text.slice(
            selection.selectionRange.start,
            selection.selectionRange.end
          )}
        </mark>
      );

      let outputParts = acc.concat([textBeforeSelection, selectionText]);

      // If it is the last selection, capture the rest of the text.
      if (index === source.length - 1) {
        const textAfterAllSelections: string = _text.slice(
          selection.selectionRange.end
        );
        outputParts = outputParts.concat(textAfterAllSelections);
      }

      return outputParts;
    },
    []
  );

  return output;
};

export const HighlightableEditor = ({
  highlights,
  addHighlight,
  removeHighlight,
  text,
  changeText,
  changeHighlight,
}: HighlightableEditorProps) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleMouseUp = (e: MouseEvent) => {
    const editor = editorRef && editorRef.current;
    if (!editor) return;

    const { selectionStart, selectionEnd } = editor;
    const selectionRange: import('../types').Range = {
      start: selectionStart,
      end: selectionEnd,
    };

    // if the selection is empty or the selection already exist, do nothing.
    if (
      selectionStart === selectionEnd ||
      highlights.some(highlight =>
        areRangesEquals(highlight.selectionRange, selectionRange)
      )
    ) {
      return;
    }

    // If the selection range overlaps any of the previously added highlights
    // then remove the highlight.
    highlights.forEach(highlight => {
      if (doRangesOverlap(highlight.selectionRange, selectionRange)) {
        removeHighlight(highlight.id);
      }
    });

    addHighlight({
      id: nanoid(),
      selectionRange,
      color: 'RED',
    });
  };

  // Sync scroll between the textarea and the highlights container.
  const handleScroll = (e: UIEvent<HTMLTextAreaElement>) => {
    const backdrop = backdropRef && backdropRef.current;

    if (backdrop && e.target) {
      backdrop.scrollTop = (e.target as HTMLTextAreaElement).scrollTop;
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value: changedText } = e.target;
    // Check if the changed text affects a highlight and if so, then update
    // the highlight range.
    const indexDiff = indexOfFirstDiff(changedText, text);
    if (indexDiff > -1) {
      changeHighlight(indexDiff, changedText.length - text.length);
    }

    changeText(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div ref={backdropRef} className={styles.backdrop}>
        <div className={styles.highlights}>
          {applyHighlightsToText(text, highlights)}
        </div>
      </div>
      <textarea
        onMouseUp={handleMouseUp}
        className={styles.editor}
        ref={editorRef}
        value={text}
        onScroll={handleScroll}
        onChange={handleOnChange}
      />
    </div>
  );
};

const mapStateToProps = (state: import('../redux/modules').AppState) => ({
  highlights: state.highlights,
  text: state.text,
});

export default connect(
  mapStateToProps,
  {
    addHighlight: addHighlightAction,
    removeHighlight: removeHighlightAction,
    changeText: changeTextAction,
    changeHighlight: changeHighlightAction,
  }
)(HighlightableEditor);
