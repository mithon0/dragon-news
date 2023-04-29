import React from 'react';
import Header from '../Pages/Header';
import { Col, Container, Row } from 'react-bootstrap';
import Left from '../components/Navigation/Left';

import RightSide from '../components/Navigation/RightSide';
import News from '../components/Navigation/News';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <Left></Left>
                    </Col>
                    <Col lg={6}>
                        <News></News>
                    </Col>
                    <Col lg={3}>
                        <RightSide></RightSide>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default Main;