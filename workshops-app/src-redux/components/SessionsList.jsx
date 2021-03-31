import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

import VotingWidget from './utils/VotingWidget';

// import './SessionsList.css';

SessionsList.propTypes = {
    sessions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            workshopId: PropTypes.number,
            sequenceId: PropTypes.number,
            name: PropTypes.string,
            speaker: PropTypes.string,
            duration: PropTypes.number,
            level: PropTypes.oneOf( [ 'Basic', 'Intermediate', 'Advanced' ] ),
            abstract: PropTypes.string,
            upvoteCount: PropTypes.number
        })
    ),
    upvote: PropTypes.func.isRequired,
    downvote: PropTypes.func.isRequired
};

SessionsList.defaultProps = {
    sessions: []
};

function SessionsList( { sessions, upvote, downvote } ) {
    const getBadgeClass = level => ({
        'Basic': 'badge-success',
        'Intermediate': 'badge-info',
        'Advanced': 'badge-warning'
    }[level]);

    return (
        <Container>
            <Row className="my-4">
                <Col sm={12}>
                    <h3>
                        Sessions in this workshop
                    </h3>
                    <hr />
                </Col>
                <Col sm={12}>
                    <ListGroup>
                        {
                            sessions.map( ( session, idx ) => (
                                <ListGroup.Item key={session.id}>
                                    <div className="row">
                                        <div className="col-1">
                                            <VotingWidget upvoteCount={session.upvoteCount} upvote={() => upvote( idx )} downvote={() => downvote( idx )} />
                                        </div>
                                        <div className="col-11">
                                            <div className="lead">{session.name}</div>
                                            <div className="h6">by {session.speaker}</div>
                                            <div>
                                                <span className={`badge ${getBadgeClass( session.level )}`}>{session.level}</span>
                                            </div>
                                            <div className="my-2">
                                                {session.duration} hours
                                            </div>
                                            <p>
                                                {session.abstract}
                                            </p>
                                        </div>
                                    </div>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default SessionsList;