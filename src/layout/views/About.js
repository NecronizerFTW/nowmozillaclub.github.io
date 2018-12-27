import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div className="About">
        <section className="hero is-fullheight-with-navbar is-warning">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">About Us</h1>
              <p className="subtitle is-3">
                We are a <b>Mozilla Campus Club</b> at <b>NMIMS MPSTME</b>.
              </p>
              <p className="subtitle is-3">
                Network for the Open Web was founded to serve as a platform for <b>Internet Education</b>.
                We strive to <b>Learn</b>, <b>Build</b> and <b>Advocate</b> for the <b>Open Web</b>.
              </p>
            </div>
          </div>
        </section>
        <section className="hero is-fullheight-with-navbar is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-1 is-spaced">Activities</h1>
              <p className="subtitle is-3">
                <b>Develop</b> new skills and contribute to projects.
              </p>
              <p className="subtitle is-3">
                Be a part of a powerful <b>network</b> of students dedicated to keeping the internet a global public resource, <b>open</b> and <b>accessible</b> to all.
              </p>
              <p className="subtitle is-3">
                <NavLink to="/events" className="button is-danger is-large">View Events</NavLink>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
