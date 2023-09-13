import React from "react";
import classes from "./Money.module.css";
import { useState, useRef, useEffect } from "react";
import Count from "./Count";
import Icons from "./Icons";

function Money() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-150px" }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  const [cls, setCls] = useState(false);
  const [cls1, setCls1] = useState(false);
  const [cls2, setCls2] = useState(false);

  useEffect(() => {
    if (!isIntersecting) return;
    let timeout = setTimeout(() => setCls(true), 300);
    let timeout1 = setTimeout(() => setCls1(true), 500);
    let timeout2 = setTimeout(() => setCls2(true), 900);

    return () => {
      clearTimeout(timeout);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [isIntersecting]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 900;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <div className={classes.container}>
      <Icons data={isIntersecting} />
      <div className={classes.cards} ref={ref}>
        <div className={classes.color}>
          <h1 className={classes.title}>Funded</h1>
          {isIntersecting ? (
            <div className={classes.number_container}>
              <div className={`${classes.centered} ${classes.number}`}>
                <p className={classes.number_items}>$</p>
                <Count number={"29"} duration={"2"} />
                <p className={classes.number_dot}>.</p>
                <Count number={"33"} duration={"2"} />
                <p className={classes.number_unit}>M</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {isMobile ? "" : <div className={classes.right__actions}></div>}

        <div className={classes.color}>
          <h1 className={classes.title}>Community Contributions</h1>
          {isIntersecting && cls ? (
            <div className={classes.number_container}>
              <div className={`${classes.centered} ${classes.number}`}>
                <p className={classes.number_items}>$</p>
                <Count number={"88"} duration={"2"} />
                <p className={classes.number_dot}>.</p>
                <Count number={"88"} duration={"2"} />
                <p className={classes.number_unit}>M</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {isMobile ? "" : <div className={classes.right__actions}></div>}
        <div className={classes.color}>
          <h1 className={classes.title}>BUIDLS</h1>
          {isIntersecting && cls1 ? (
            <div className={classes.number_container}>
              <div className={`${classes.centered} ${classes.number}`}>
                <div className={classes.number}>
                  <Count number={"7"} duration={"2"} />
                  <p className={classes.number_dot}>,</p>
                  <Count number={"182"} duration={"2"} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {isMobile ? "" : <div className={classes.right__actions}></div>}
        <div className={classes.color}>
          <h1 className={classes.title}>Active Builders</h1>
          {isIntersecting && cls2 ? (
            <div className={classes.number_container}>
              <div className={`${classes.centered} ${classes.number}`}>
                <div className={classes.number}>
                  <Count number={"98"} duration={"2"} />
                  <p className={classes.number_dot}>,</p>
                  <Count number={"92"} duration={"2"} />
                  <Count number={"6"} duration={"2"} />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Money;
