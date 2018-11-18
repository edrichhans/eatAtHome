import React, { Component } from 'react';
import View from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Grid, Col, Row } from 'native-base';
import styles from './styles';

export default class Home extends Component {
    render() {
        return(
            <Container style={styles.mainContainer}>
                <Content>
                    <Grid>
                        <Row>
                            <Text style={styles.mainText}>
                                WILL YOU EAT AT HOME?
                            </Text>
                        </Row>
                        <Row style={{height: '50%'}}>
                            <Col size={1} style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Button rounded iconLeft primary style={styles.yesNoButton}>
                                    <Icon name='md-checkmark' />
                                    <Text style={styles.yesNoText}>Yes</Text>
                                </Button>
                            </Col>
                            <Col size={1} style={{alignItems: 'center', justifyContent: 'center'}}>
                                <Button rounded iconLeft danger style={styles.yesNoButton}>
                                    <Icon name='md-close' />
                                    <Text style={styles.yesNoText}>No</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}