import React from "react";
import classes from "./Icons.module.css";

function Icons(props) {
  return (
    <div className={classes.container}>
      <div className={classes.cards}>
        <div className={classes.wraper}>
          <div className={classes.title_wraper}>
            <p className={classes.title}>Build with the best ecosystems</p>
          </div>
          <div className={classes.title_wraper}>
            <p className={classes.title}>
              on <span className={classes.gradient_text}>DoraHacks</span>
            </p>
          </div>
        </div>
        <div className={classes.wraper_two}>
          <div className={classes.img_container}>
            <img
              className={classes.centered}
              alt="icons"
              src={"https://dorahacks.io/_nuxt/b1cefbd7.svg"}
            />
            <img
              className={classes.centered2}
              alt="icons1"
              src={"https://dorahacks.io/_nuxt/b1cefbd7.svg"}
            />
            <img
              className={classes.centered3}
              alt="icons2"
              src={"https://dorahacks.io/_nuxt/d8f74907.svg"}
            />
            <img
              className={classes.centered4}
              alt="icons3"
              src={"https://dorahacks.io/_nuxt/a7a03cd4.svg"}
            />
            <img
              className={classes.centered5}
              alt="icons4"
              src={"https://dorahacks.io/_nuxt/198992be.svg"}
            />
            <img
              className={classes.centered6}
              alt="icons5"
              src={"https://dorahacks.io/_nuxt/133b503b.svg"}
            />
            <img
              className={classes.centered7}
              alt="icons6"
              src={"https://dorahacks.io/_nuxt/4b8b7e8c.svg"}
            />
            <img
              className={classes.centered8}
              alt="icons7"
              src={"https://dorahacks.io/_nuxt/133b503b.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;
