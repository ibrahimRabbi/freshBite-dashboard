'use client';

import {
  useEditor,
  EditorContent,
} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import CharacterCount from '@tiptap/extension-character-count';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
// import Markdown from '@tiptap/extension-markdown';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Image as ImageIcon,
  Link as LinkIcon,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
} from 'lucide-react';
import { useEffect } from 'react';
import { Button } from 'antd';
import { FiPlus } from 'react-icons/fi';



const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      BulletList,
      Link.configure({ openOnClick: false }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Write something awesome...',
      }),
      CharacterCount.configure({
        limit: 500,
      }),
    ],
    content: '',
  });

  useEffect(() => {
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  const addImage = () => {
    const url = window.prompt('Enter image URL');
    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  const addLink = () => {
    const url = window.prompt('Enter URL');
    if (url) {
      editor?.chain().focus().setLink({ href: url }).run();
    }
  };

  if (!editor) return null;

  return (
    <div className="space-y-4">
      {/* Fancy Toolbar */}
      <div className="bg-zinc-800 text-white p-2 rounded-xl flex flex-wrap gap-2 items-center w-[52%]">
        <button onClick={() => editor.chain().focus().toggleBold().run()}><Bold size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()}><Italic size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()}><UnderlineIcon size={18} /></button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()}><Strikethrough size={18} /></button>

        <div className="border-l border-white h-5 mx-2" />

        <button onClick={() => editor.chain().focus().setTextAlign('left').run()}><AlignLeft size={18} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('center').run()}><AlignCenter size={18} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('right').run()}><AlignRight size={18} /></button>
        <button onClick={() => editor.chain().focus().setTextAlign('justify').run()}><AlignJustify size={18} /></button>

        <div className="border-l border-white h-5 mx-2" />

        <button onClick={() => editor.chain().focus().toggleBulletList().run()}><List size={18} /></button>
        <button onClick={addImage}><ImageIcon size={18} /></button>
        <button onClick={addLink}><LinkIcon size={18} /></button>
      </div>

      {/* Editor */}
      <EditorContent editor={editor} className="min-h-[150px] border bg-white  border-gray-200 rounded-md p-4" />

      {/* Character Count */}
      
     <div className='flex justify-between'>
         <Button style={{ backgroundColor: '#1C2D07', color: 'white', width: '140px', borderRadius: '20px' }}><FiPlus />Add</Button>
        <div className="text-sm text-right text-gray-500">
        {editor.storage.characterCount.characters()}/500 characters
      </div>
     </div>
    </div>
  );
};

export default TiptapEditor;
