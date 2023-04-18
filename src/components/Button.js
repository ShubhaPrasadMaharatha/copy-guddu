import "./Button.css";

const Button = ({ symbol, color, handleClick }) => {
   return (
   <div 
   onClick={() => handleClick(symbol)}
   className="button-grid" 
   style={{ backgroundColor: color }}
   >
      {symbol}
   </div>
   );
};

export default Button;