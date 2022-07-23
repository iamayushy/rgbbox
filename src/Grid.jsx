import { useEffect, useState } from "react";

const Grid = ({ children }) => {
  const [color, setRgb] = useState({
    r: 45,
    g: 90,
    b: 180
  });
  const generateRandomColor = () => {
    const x = Math.floor(Math.random() * 255);
    const y = Math.floor(Math.random() * 255);
    const z = Math.floor(Math.random() * 255);

    setRgb({ r: x, g: y, b: z });
  };

  useEffect(() => {
    generateRandomColor();
  }, []);

  const handleColor = (e) => {
    generateRandomColor();
    const box = e.target;
    box.style.backgroundColor = `rgb(${color.r},${color.g}, ${color.b})`;
  };
  return (
    <table className="table">
      <tbody onClick={handleColor}>{children}</tbody>
    </table>
  );
};
export { Grid };
