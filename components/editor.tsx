'use client';

import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

import { useEffect, useRef, useState } from 'react';

export default function Editor({ onSave }) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const ref = useRef<EditorJS>();

  const initEditor = () => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          ref.current = editor;
        },
        placeholder: 'type here to start writing blog...',
        inlineToolbar: true,
        tools: {
          header: Header,
        },
      });
    }
  };

  // checking window is initialized
  // needed this for nextjs
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true);
    }
  }, []);

  // when window is initialized and mounted we are initializing the editor
  useEffect(() => {
    if (isMounted) {
      initEditor();
    }
  }, [isMounted]);

  const onSaveData = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          onSave(outputData);
        })
        .catch((error) => {
          console.log('error in saving data', error);
        });
    }
  };

  return (
    <div>
      <div id="editor" className="prose min-h-[500px]" />
      <button
        onClick={() => {
          onSaveData();
        }}
        className="w-[90px] h-[50px] bg-black text-white"
      >
        save
      </button>
    </div>
  );
}
