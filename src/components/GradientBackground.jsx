const GradientBackground = () => {
  return (
    <div className="-z-10 relative opacity-20">
      <div className="blur-bg animation-delay-2000 -right-60 bg-purple-400"></div>
      <div className="blur-bg bg-pink-400 top-10 -right-60"></div>
      {/* <div className="blur-bg animation-delay-4000 bg-blue-300 top-40 -right-20"></div> */}
    </div>
  );
};

export default GradientBackground;
