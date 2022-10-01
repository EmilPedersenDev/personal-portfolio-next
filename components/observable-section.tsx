import React, { useEffect, useRef, useState, FC } from "react";
import { ObservableProps } from "../utils/interfaces";

const Observer: FC<ObservableProps> = (props) => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const observerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    // Html element to observe
    const { current } = observerRef;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, []);
  return (
    <section
      id={props.id}
      className={`${sectionVisible ? props.transitionClass : ""} ${props.class || ""}`}
      ref={observerRef}
    >
      {props.children}
    </section>
  );
};

export default Observer;
