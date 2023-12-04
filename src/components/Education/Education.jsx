import React, { Component } from 'react';
import classes from './Education.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            EvidentId (startup) <span>September (2021) - December (2023)</span>
                          </h2>
                          <p>
                            I was a Sr. Software engineer at EvidentId. <br></br>
                            1. Lead teams (2-4 engineers) to develop features requested by PM. <br></br>
                            2. Responsible for scalability, architecture, performance issues, cost-saving measurement, and observability for the entire company software. <br></br>
                            3. Led a hackathon to build a chatbot with ability to report on customer data. This chatbot was later integrated to the current system and became an official chatbot called Evie. <br></br>
                            4. Saved ~$50K/yr on MongoDB and ~$60K/yr on RDS by optimizing query <br></br>
                            5. Convert a vertical scaling service to a horizontal scaling service. Employed RabbitMQ and event-driven design. Decoupled sharing data dependencies. This becomes a centralized architect for the company moving forward <br></br>
                            6. Led a project to speed up a page load from 7s to 0.5 secs. Utilized cache, pagination, endless scrolling
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            TeamSupport LLC <span>January (2021) - September (2021)</span>
                          </h2>
                          <p>
                            Lead a team to develop a full-stack feature for customers to reduce their duplicated data. This tool is estimated to reduce ~ 60% of duplication of data which lead to large saving in data storage. Front-end was React. Back-end was .NET and Database is MySQL
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Tenable <span>November (2018) - Dec (2020)</span>
                          </h2>
                          <p>
                            1. Developed a full-stack PCI reviewing process to integrate with the current core application. This Application helps customers and analysts work through their security for compliances. <br></br>
                            2. Back-end developer for Cloud Security Product: Parsed cloud resources and then applied proprietary checks to measure cybersecurity risk score. Left the company before the project was launched to production.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Contractor at Apple <span>June (2017) - Sept (2018)</span>
                          </h2>
                          <p>
                            Maintained legacy code authentication service.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                          PhD dropout with a Master Degree at University of California, Riverside.
                          </h2>
                          <p>
                            I felt that academic research is slow compared to the speed the development of technology. I decided to drop out with a Master and pursue my career in software engineering.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
  }
}

export default Education;
