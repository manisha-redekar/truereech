import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogBackLink = () => (
  <Link
    to="/blog"
    className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 hover:underline transition-colors mb-4 block"
  >
    <ArrowLeft size={16} />
    Back to Blogs
  </Link>
);

export default BlogBackLink;
