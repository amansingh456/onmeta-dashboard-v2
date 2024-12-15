export default function Loadings() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex space-x-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={`w-1 h-3 rounded-full animate-wave`}
            style={{
              animationDelay: `${index * 0.3}s`,
              backgroundColor: getColor(index),
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

function getColor(index) {
  const colors = ["#cceadd", "#66c29b", "#00864e", "#009a59"];
  return colors[index % colors.length];
}
