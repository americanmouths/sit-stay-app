import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import selfieimg from './../images/about/selfie.jpg';
import goatimg from './../images/about/goat.jpg';
import horseimg from './../images/about/horse.png';
import catimg from './../images/about/cat.png';
import { IntroPhoto, IntroPhotoResize, IntroParagraphDiv, IntroParagraph } from './../styles/containers';

const About = () => {

  return (
    <div>
      <Jumbotron className="about-jumbotron">
        <center>
        <IntroPhotoResize>
          <img src={goatimg} alt={"goat_image"} className="intro-photo"/>
        </IntroPhotoResize>
        <IntroPhoto>
          <img src={horseimg} alt={"horse_image"} className="photo"/>
        </IntroPhoto>
        <IntroPhotoResize>
          <img src={selfieimg} alt={"selfie_image"} className="intro-photo"/>
        </IntroPhotoResize>
        <IntroPhoto>
          <img src={catimg} alt={"cat_image"} className="photo"/>
        </IntroPhoto>
          <h1>Hi I&#39;m Kayla</h1>
          <IntroParagraphDiv>
            <IntroParagraph>
              <p>
                Thanks for stopping by.  Sit/Stay was born out of my love for animals, my passion for animal care, and a desire to make my current dog walking job a bit easier.
              </p>
            </IntroParagraph>
          </IntroParagraphDiv>
        </center>
      </Jumbotron>
    </div>
    )
  }

export default About;
