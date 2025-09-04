import '../styles/Greeting.css'

const Greeting = () => {
  return (
    <div className='greeting-container'>
      <div className="greeting-bg"></div>
      <div className="envalope">
        <div className="envalope-design-back"></div>
        <div className="envalope-design-mid"></div>
        <div className="envalope-design-front">
          <div className="title">{/* Title and image here */}</div>
          <div className="description"></div>
          <div className="greeting-btns">
            <button>About Me</button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
