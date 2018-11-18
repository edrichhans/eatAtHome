import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Grid, Row, Col } from 'native-base';
import styles from './styles';


export default class Info extends Component {
    render() {
        return(
            <Container style={styles.mainContainer}>
                <Content>
                    <Grid>
                        <Row style={styles.center}>
                            <Text style={styles.dateText}>{this.props.screenProps.curDate}</Text>
                        </Row>
                        <Row style={styles.center}>
                            <Text style={styles.timeText}>{this.props.screenProps.curTime}</Text>
                        </Row>
                        <Row>
                            <Text>{this.props.screenProps.minutesLeft} minutes before reminder</Text>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}