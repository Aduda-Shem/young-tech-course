import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from 'react-router';
import Calltoaction from '../Calltoaction/Calltoaction';
import './Home.css';

const Home = () => {
  /**useHistory hook from the react-router-dom library to access the history object, which allows you to navigate to a different page.  */
  let history = useHistory();
  const GoToAllCourses = () => {
    history.push('/courses');
 };
    return (
      <div>
        <div className="banner mb-5 d-flex align-items-center">
          <Container>
            <Row>
              <Col>
                <h2>Start your coding journey!!!</h2>
                <h5 className="mb-3">
                  Get to be the best in the coding industry
                </h5>

                <button className="btn-v1" onClick={GoToAllCourses}>Kickstart your coding journey</button>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Load Call to Action  */}
        <Calltoaction></Calltoaction>

        {/* Load Featured Courses */}
   
      </div>
    );
};

export default Home;
