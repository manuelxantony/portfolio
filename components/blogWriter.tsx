'use client';

import Editor from '@/components/editor';

export default function BlogWriter() {
  const onSave = (outputData: any) => {
    console.log(outputData);
  };

  return (
    <div className="w-full">
      {/* blog titile */}
      <textarea
        name="title"
        id="title"
        placeholder="blog heading"
        className="w-full resize-none text-5xl font-bold focus:outline-none "
      ></textarea>
      {/* blog description */}
      <textarea
        name="description"
        id="description"
        placeholder="blog description"
        className="w-full resize-none focus:outline-none"
      ></textarea>
      <Editor onSave={onSave} />
    </div>
  );
}
