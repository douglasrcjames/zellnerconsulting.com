import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import ContactForm from '../misc/ContactForm';
import { Timeline } from 'rsuite';
import { Helmet } from 'react-helmet';

export default class About extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>About | Smith-Zellner Consulting</title>
                </Helmet>
                <div className="wrapper m-padding-t-b">
                    <Grid fluid>
                        <Row>
                            <Col sm={12} md={8} lg={10}>
                                <h1>About Smith-Zellner Consulting</h1>
                                <p>
                                    Our goal is to raise our collective consciousness by facilitating the healing of our racial and genocidal national history. 
                                    Through the lens of our collective history, we aim to demonstrate how to respect differences of race, gender, religion and ideology. 
                                    Listening to our neighbors and fellow citizens, searching for the common threads that bind us into this vibrant weave of many colors.
                                </p>
                                <br/>
                                <h2>The Founders</h2>
                                <p>As dedicated human rights activists, we focus our work on social justice causes and offer our consulting skills to:</p>                              
                                <ul>
                                    <li>lead civil rights history tours throughout the South</li>
                                    <li>train youth leaders in non-violent direct action</li>
                                    <li>
                                        teach organizations how to listen well, respect differences of race,
                                        gender, religion and ideology, and work together effectively with
                                        people of opposing viewpoints
                                    </li>
                                    <li>
                                        instruct companies on the beneficial business application of
                                        equality and diversity
                                    </li>
                                    <li>
                                        and share our firsthand accounts of international civil rights
                                        campaigns and their memorable key leaders.
                                    </li>
                                </ul>
                            </Col>
                            
                            <Col sm={12} md={4} lg={2}>
                                <Row start="xs" center="xs" className="s-margin-l">
                                    <Col>
                                        <img src={require("../../assets/images/SS1_6241.jpg")} alt="pamela smith" className="medium responsive m-padding-t-b" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    
                   
                    <br/>
                    <hr/>
                    <br/>
                    
                        <Row>
                            <Col sm={12} md={4} lg={2}>
                                <img src={require("../../assets/images/BobZellner3-sq.jpg")} alt="bob zellner" className="medium rounded responsive" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>Bob Zellner</h2>
                                        <p>
                                            Bob Zellner brings to life the victories, struggles and heartbreaks of the Civil Rights era in a way that empowers and instructs audiences and the modern-day movement. 
                                        </p>
                                        <p>
                                            Bob is one of the most influential leaders in the Civil Rights Movement, from the 1960s to today. The son and grandson of Ku Klux Klan members, 
                                            he risked his life – and nearly lost it – many times in the fight to achieve The Second Emancipation. As an organizer of The Freedom Rides of 1961 
                                            and the first white southerner to serve as field secretary for the Student Nonviolent Coordinating Committee, he worked alongside Martin Luther King, Jr., 
                                            John Lewis, Rosa Parks and many other civil rights leaders. Famous for battles with the KKK, segregationist lynch mobs, and violent police, 
                                            he is now the individual that a new generation turns to with questions on the racial, historical and cultural assumptions on which they were raised, 
                                            as they ask themselves, "What is my place in this struggle?"
                                        </p>
                                        <p>
                                            Bob presents a modern-day message for combating deep-seated racism, discrimination and prejudice and sparking widespread social change.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <br/>
                        <hr/>
                        <br/>
                        <Row>
                            <Col sm={12} md={4} lg={2}>
                                <img src={require("../../assets/images/SS1_6252.jpg")} alt="pamela smith" className="medium rounded responsive m-padding-t-b" />
                            </Col>
                            
                            <Col sm={12} md={8} lg={10} >
                                <Row start="xs" className="s-margin-l">
                                    <Col>
                                        <h2>Pamela Smith</h2>
                                        <Timeline align={"left"} className="m-margin-t">
                                            <Timeline.Item>
                                                <b className="display-block">2018-Present</b>
                                                <p>Co-Founder &amp; Managing Partner, Smith-Zellner Consulting, Fairhope, Alabama</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2014-2018</b>
                                                <p>Nurse’s Aide, In-home Palliative Care, Boulder, Colorado, Nurse’s Aide</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2014-2018</b>
                                                <p>Nurse’s Aide, Dignity Care Boulder, Colorado, <a href="https://www.dignitycare.com" target="_blank" rel="noopener noreferrer">www.dignitycare.com</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2013-2014</b>
                                                <p>Midwife Assistant, Manos Abiertas Clinic, full-spectrum Maya Women’s Healthcare, in Ciudad Vieja, Guatemala, <a href="https://www.asociasionmanosabiertas.org" target="_blank" rel="noopener noreferrer">www.asociasionmanosabiertas.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">2005-2010</b>
                                                <p>Staff Manager &amp; Medical Aide, Cerebral Palsy patient, private facility, Colorado</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1994-1998</b>
                                                <p>Board Member, Thistle Community Housing, Boulder, Colorado, <a href="https://www.thistle.us" target="_blank" rel="noopener noreferrer">www.thistle.us</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1990-1998</b>
                                                <p>Founder, Wee Care, Doula service, in-home maternity support for new babies &amp; mothers, Boulder, Colorado</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1972-1989</b>
                                                <p>Full-time Mother of five</p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1974-1977</b>
                                                <p>Founding Member, Plenty International, construction and health care relief for Maya communities. <a href="https://www.plenty.org" target="_blank" rel="noopener noreferrer">www.plenty.org</a></p>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <b className="display-block">1971-1978</b>
                                                <p>Founding member, The Farm, Summertown, Tennessee, <a href="https://www.thefarm.org" target="_blank" rel="noopener noreferrer">www.thefarm.org</a></p>
                                            </Timeline.Item>
                                        </Timeline>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="center-text">
                        <h4>We'd love to credit our beautiful black &amp; white shots of Bob Zellner we are using around the website to Danny Lyons @ <a href="https://bleakbeauty.com/" target="_blank" rel="noopener noreferrer">bleakbeauty.com</a></h4>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                </div>
                
                <div className="hero-container-1">
                    <div className="hero-image-3">
                        <div className="hero-text-2">
                            <h1><a id="Contact" className="anchor" href="/#">Contact</a>Contact</h1>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
