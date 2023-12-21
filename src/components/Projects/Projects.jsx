import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import github from '../images/github.png';

import { FaSchool } from 'react-icons/fa';

// Web projects
const cardItem = [
  {
    link: 'https://www.youtube.com/shorts/SYsiZ7sy9gg',
    title: 'Certicate of Insurance To JSON parser',
    techStack: 'Tech Stack: OCR, LLM',
    desc: 'A tool to parse Certificate of Insurance to JSON',
    color: '#0FFFFF',
    githubLink: 'https://www.youtube.com/shorts/SYsiZ7sy9gg'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
          </a>
          <div
            onClick={() => {
              window.open(cardItem.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            <img src={github} className={classes.card__title__img} />
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>MY WORK</span>
        <h2 className={classes.heading}>PROJECTS</h2>
        <ul className={classes.cards}>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <article className={classes.timeline_entry}>
            <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
              <FaSchool />
            </div>
            <div className={classes.label}>
              <h2>
                Distributed training for OASIS Alzheimer Detection - accuracy 96%
              </h2>
              <p>
                Problem statement: Binarily Classified an MRI brain scan into either Malignant or Benign   <br></br>
                1. Need distributed training because image cost a lot of time to train using traditional CPU <br></br>
                2. Enabled GPU on training worker. Using Tensorflow to coordinate master and worker to communicate on cost function <br></br>
                3. Once Neural Network is identified. Using a grid-search for optimizing hyper-parameters such as layers, steps, learning rate  <br></br>
                4. Achieved accuracy of 96% <br></br>
                5. More detail found here (<a href="https://github.com/leanhhoang2806/machine-learning-for-all/blob/main/README.md"> Code Reference</a>)
              </p>
            </div>
          </article>
        </ScrollAnimation>
        </ul>
      </ScrollAnimation>
    </div>
  );
}
