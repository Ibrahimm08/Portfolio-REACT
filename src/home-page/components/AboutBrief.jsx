import { useEffect, useRef, useState } from "react";
import "../styles/AboutBrief.css";

const slides = [
  {
    id: "a",
    heading: "Content A",
    text: "Content content",
    img: "",
  },
  {
    id: "b",
    heading: "Content B",
    text: "More content",
    img: "https://www.bing.com/th/id/OIP.YZe8XEROfuOjqPf0JsrC8wHaEK?w=275&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&pid=3.1&rm=3&ucfimg=1",  // image for testing purposes not final
  },
  {
    id: "c",
    heading: "Content C",
    text: "More more more content",
    img: "",
  },
];

const AboutBrief = () => {
  const [current, setCurrent] = useState(0);
  const [locked, setLocked] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  // https://codepen.io/eehayman/pen/qdGZJr?editors=0110

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.scrollIntoView({
            behavior: "auto",
            block: "center",
          });
        }
      },
      { threshold: 0.75 } // How much % the element with ref has to be in view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  // To prevent scrolling if its midway
  useEffect(() => {
    if (inView && (current > 0 || current < slides.length - 1)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [inView, current]);

  useEffect(() => {
    const onWheel = (event) => {
      if (!inView || locked) return;

      if (event.deltaY > 0) {
        // On down ScRoll
        if (current < slides.length - 1) {
          setCurrent((previous) => previous + 1);
          lock();
        } else {
          document.body.style.overflow = "";
        }
      } else if (event.deltaY < 0) {
        // On up scroll
        if (current > 0) {
          setCurrent((previous) => previous - 1);
          lock();
        } else {
          document.body.style.overflow = "";
        }
      }
    };

    const lock = () => {
      setLocked(true);
      setTimeout(() => setLocked(false), 800); // Match the 800 to the transistion duration in .content
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [current, locked, inView]);

  return (
    <div className="about container">
      <div className="about-content" ref={containerRef}>
        <div className="display" />
        {slides.map((slide, index) => {
          let classEdit = "content";
          if (index < current) classEdit += " up-scroll";
          if (index > current) classEdit += " down-scroll";
          if (index === current) classEdit += " active";

          return (
            <div key={slide.id} className={classEdit}>
              <div>
                <h1>{slide.heading}</h1>
                <p>{slide.text}</p>
              </div>
              {slide.img && <img src={slide.img} alt="" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutBrief;
