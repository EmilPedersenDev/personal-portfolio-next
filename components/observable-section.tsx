import React, { useEffect, useRef, useState } from "react";
import { ObservableProps } from "../utils/interfaces";

const Observer = (props: ObservableProps) => {
  const [sectionVisible, setSectionVisible] = useState(false);
  const observerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]): void => {
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

    return (): void => {
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
