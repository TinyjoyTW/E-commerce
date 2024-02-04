import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <Link to={`/`}>Home</Link>
      <Link to={`/about`}>About</Link>
    </aside>
  );
}
