import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class Alliances extends Component {
    render() {
        return (
            <div className="wrapper">
                <Helmet>
                    <title>Alliances | Smith-Zellner Consulting</title>
                </Helmet>
                <h1>Alliances</h1>
                <p>Smith-Zellner Consulting has partnered with many great organizations and groups around the nation over the years. Here are a few of our partnerships!</p>
                <Grid fluid className="s-margin-t">
                    <Row className="m-margin-b">
                        <Col sm={12} md={4} lg={2} className="box-text-v-align">
                            <img src={require("../../assets/images/alliances/common-power.png")} alt="presentation" className="xxlarge responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="s-margin-b">Common Power</h2>
                                    <p>
                                        Common Power mobilizes volunteers for voters around the country, while investing in the next generation of leaders and building lasting community. 
                                        Because they believe the power of the vote should be shared by all.
                                    </p>
                                    <br/>
                                    <a href={`https://commonpower.org/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-globe"/>&nbsp; Visit website</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="box-text-v-align">
                            <img src={require("../../assets/images/alliances/pp.jpeg")} alt="presentation" className="xxlarge responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="s-margin-b">Project Pilgrimage</h2>
                                    <p>
                                        Bob and Pamela travel biannually with Project Pilgrimage a civil rights tour from Seattle. Citizens and students from the Seattle area travel through 
                                        the deep south to significant places that transformed America during the Civil rights Movement of the 1950’s and 60’s. Such as, Money Mississippi were 
                                        Emmett Till was murdered, eji, Equal Justice Initiative, in Montgomery, the Edmund Pettus bridge, the Home of Medgar Evers and Philadelphia Mississippi 
                                        where the three young Civil Rights organizers were lynched in 1964.
                                    </p>
                                    <br/>
                                    <a href={`https://projectpilgrimage.org/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-globe"/>&nbsp; Visit website</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="box-text-v-align">
                            <img src={require("../../assets/images/alliances/fnp.png")} alt="presentation" className="xxlarge responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="s-margin-b">Faith &amp; Politics Institute of United States Congress</h2>
                                    <p>
                                        For over 15 years Bob has traveled with John Lewis to Selma to reenact the Bloody Sunday March over the Edmund Pettus bridge, with the Faith and Politics 
                                        Institute of the United States Congress. For the past four years Pamela and Bob have been a team on the Congressional Pilgrimage
                                    </p>
                                    <br/>
                                    <a href={`https://www.faithandpolitics.org/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-globe"/>&nbsp; Visit website</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="box-text-v-align">
                            <img src={require("../../assets/images/alliances/saa.png")} alt="presentation" className="xxlarge responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="s-margin-b">Shirts Across America</h2>
                                    <p>
                                        Shirts Across America (SAA) is a youth leadership organization from Seattle. This exemplary group has been sending teams of young people to New Orleans since 2007 
                                        to help in the reconstruction of the 9th ward following hurricane Katrina. They have financed 16 homes and helped in the rebuilding of 200. Pamela and Bob work 
                                        with SAA leadership striving to give youth the tools they need to effectively and safely help create change in our current volatile political climate.
                                    </p>
                                    <br/>
                                    <a href={`http://shirtsacrossamerica.org/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-globe"/>&nbsp; Visit website</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2} className="box-text-v-align">
                            <img src={require("../../assets/images/alliances/doug-jones.jpg")} alt="presentation" className="xxlarge responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="s-margin-b">Senator Doug Jones</h2>
                                    <p>
                                        Bob and Pamela are currently working to reelect Congressman, Doug Jones as US senator from Alabama.
                                    </p>
                                    <br/>
                                    <a href={`https://www.jones.senate.gov/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-globe"/>&nbsp; Visit website</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
