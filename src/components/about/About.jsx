import React, { Component } from 'react';
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

class About extends Component {
  render() {
    return (
      <div className={classes.box} id='about'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
            I am a seasoned Senior Software Engineer with over 7+ years of experience.
            I have led critical initiatives in scalability, architecture, 
            and performance optimization. 
            My technical proficiency spans languages such as JavaScript, Java, and Python, 
            coupled with expertise in databases like Postgres and MongoDB. Notably, 
            I've led projects resulting in substantial cost savings, 
            including optimizing queries that saved approximately $110K annually. 
            I bring a unique blend of analytical skills and a strong foundation in machine learning, making me a versatile professional capable of navigating complex technical challenges. 
            My passion lies in developing resilient and scalable systems, particularly in the realms of ML/AI, finance, and analytics.
            </p>
            <p className={classes.br}>
              I love building technology that the users can use to make their lives easier.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
