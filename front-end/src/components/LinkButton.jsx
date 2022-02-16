import { Link } from "react-router-dom";

const LinkButton = ({ link, name, children, className }) => {
  return (
    <Link to={link} className="px-0">
      <span className={className}>
        {children}

        <p>{name}</p>
      </span>
    </Link>
  );
};

export default LinkButton;
