const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div className={`card-hover ${hover ? '' : 'hover-none'} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;