import React, { Component } from 'react';
import classes from './Interest.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Interest() {
  return (
    <div className={classes.box} id='interest'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>WHAT I DO?</span>
        <h2 className={classes.heading}>AREA OF EXPERTISE</h2>
        <div className={classes.Interest}>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.web}>
              <h3>Full-stack Develpoment</h3>
              <p>
                I have built total 4 different full-stack applications using different stack from Python, Java, Javascript, .NET, ReactJs,, Node.js, MongoDB, PostgreSQL, GraphQL, Docker, Kubernetes, AWS, GCP, Azure.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.app}>
              <h3>AI/ML</h3>
              <p>
                After completing my Master, I keep continuing my passion in AI/ML through my courses of education. I possess a good working knowledge of current ML techniques. I have built a chatbot utilizting chatGPT to give customer the ability to interact with their own data through a chat interface.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn='fadeInLeft'
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.other}>
              <h3>Expanded Expertise</h3>
              <p>
                I'm continuing sharpening my skills in other areas such as DevOps, Cloud, Data Science, Data Engineering, and Data Analytics. Life is an ongoing learning process, and I'm always open to new opportunities to learn and grow.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}
