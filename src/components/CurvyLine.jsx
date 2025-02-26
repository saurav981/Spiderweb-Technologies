const CurvyLine = () => {
  return (
    <div>
      <svg
        width={16}
        height={23}
        style={{
          transform: "translateX(-2px)",
        }}
        viewBox="0 0 16 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 0L1 7C1 15.2843 7.71573 22 16 22V22"
          strokeWidth={2}
          className="text-white"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
};

export default CurvyLine;
