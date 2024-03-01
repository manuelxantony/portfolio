// this feature is not using write now,
// because I want to keep porfolio to be very simple one without any db dependencies
// Im keeping this feature for scaling in future
import BlogWriter from '@/components/blogWriter';

export default function EditorPage() {
  return (
    <div>
      <BlogWriter />
    </div>
  );
}
