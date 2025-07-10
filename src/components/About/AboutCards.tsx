import React from "react";
import { Col, Row, Card} from "react-bootstrap";

const Aboutcards: React.FC = () => {
    return(
        <Card className="quote-card-view">
            <Card.Body>
            <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Krishna </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br />
            I am currently a Student at Indiana Weselyean University.
            <br />
            I am doing my Master's (MS) in Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
            </Card.Body>
        </Card>
    );
};
export default Aboutcards;