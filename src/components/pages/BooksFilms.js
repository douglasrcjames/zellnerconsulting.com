import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class BooksFilms extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>Books &amp; Films</h1>
                <Grid fluid>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/murder-creek-cover.jpg")} alt="presentation" className="medium responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="s-margin-b">The Wrong Side of Murder Creek</h2>
                                    <h3 className="no-margin">A White Southerner in the Freedom Movement</h3>
                                    <p>
                                        Even forty years after the civil rights movement, the transition from son and grandson of Klansmen to field secretary of SNCC seems quite a journey. 
                                        In the early 1960s, when Bob Zellner’s professors and classmates at a small church school in Alabama thought he was crazy for even wanting to do research 
                                        on civil rights, it was nothing short of remarkable. Now, in his long-awaited memoir, Zellner tells how one white Alabamian joined ranks with the black 
                                        students who were sitting-in, marching, fighting, and sometimes dying to challenge the Southern “way of life” he had been raised on but rejected. Decades 
                                        later, he is still protesting on behalf of social change and equal rights. Fortunately, he took the time, with co-author Constance Curry, to write down 
                                        his memories and reflections. He was in all the campaigns and was close to all the major figures. He was beaten, arrested, and reviled by 
                                        some but admired and revered by others.
                                    </p>
                                    <p>
                                        The Wrong Side of Murder Creek, winner of the 2009 Lillian Smith Book Award, is Bob Zellner’s larger-than-life story, and it was worth waiting for.
                                    </p>
                                    <br/>
                                    <a href={`https://www.amazon.com/Wrong-Side-Murder-Creek-Southerner/dp/1588383946/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-shopping-cart"/>&nbsp; Buy on Amazon</button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/son-of-the-south-tall.jpg")} alt="presentation" className="medium responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Son of the South</h2>
                                    <h3 className="no-margin">An upcoming film based on The Wrong Side of Murder Creek</h3>
                                    <p>
                                        Son of the South is an upcoming American biographical drama film, written and directed by Barry Alexander Brown and with executive producer Spike Lee. 
                                        Based on Bob Zellner's autobiography, The Wrong Side of Murder Creek: A White Southerner in the Freedom Movement, it stars Lucas Till, Lucy Hale, 
                                        Lex Scott Davis, Julia Ormond, Cedric the Entertainer, Sharonne Lainer, Mike C. Manning, Brian Dennehy and Chaka Forman.
                                    </p>
                                    <label>Recent Media:</label>
                                    <ul>
                                        <li>
                                            <a href={`http://lvbxmag.com/2018/07/26/part-ii-son-of-the-south`} rel="noopener noreferrer" target="_blank">
                                                <u>LVBX Magazine feature: Son of the South: Part I</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`http://lvbxmag.com/2018/07/26/part-ii-son-of-the-south`} rel="noopener noreferrer" target="_blank">
                                                <u>LVBX Magazine feature: Son of the South: Part II</u>
                                            </a>
                                        </li>
                                        <li>
                                            <a href={`https://variety.com/2019/film/news/spike-lee-son-of-the-south-1203129386`} rel="noopener noreferrer" target="_blank">
                                                <u>Variety Magazine feature: Spike Lee Exec Producing Civil Rights Drama Son of the South</u>
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={4} className="s-margin">
                                    <a href={`https://www.imdb.com/title/tt2235372/`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-film"/>&nbsp; View IMDb </button>
                                    </a>
                                </Col>
                                <Col xs={12} sm={4} className="s-margin">
                                    <a href={`https://en.wikipedia.org/wiki/Son_of_the_South_(film)`} rel="noopener noreferrer" target="_blank">
                                        <button className="s-btn-success" type="button"><i className="fas fa-book"/>&nbsp; View Wiki article </button>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <br/>
                    <hr/>
                    <br/>
                    <Row className="m-margin-t-b">
                        <Col sm={12} md={4} lg={2}>
                            <img src={require("../../assets/images/McCombBridge2.jpg")} alt="presentation" className="medium responsive" />
                        </Col>
                        
                        <Col sm={12} md={8} lg={10} >
                            <Row start="xs" className="s-margin-l">
                                <Col>
                                    <h2 className="no-margin">Woodcutters of the Southern Pines</h2>
                                    <p>
                                        Upcoming project, stay tuned!
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
