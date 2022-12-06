import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  Container from 'react-bootstrap/Container'


const data = [
  {
    id: 1,
    name: "Level Up Fitness",
    description: "A full stack application to plan your workouts using Node, Express, MySql and Handlebars to build RESTful APIs",
    view: "https://github.com/Laurencvengros/Project_2",
    deploy: "https://github.com/Laurencvengros/Project_2"
  },
  {
    id: 2,
    name: "JATE Text Editor",
    description: "A text editor appliaction that meets PWA criteria and runs both online and offline.",
    view: "https://pacific-thicket-62202.herokuapp.com/",
    deploy: "https://pacific-thicket-62202.herokuapp.com/"
  },
  {
    id: 3,
    name: "ORM E-Commerce",
    description: "A node.js application that uses and Express.js server and MySQL database for a backend Ecommerce site. ",
    view: "https://github.com/Laurencvengros/ORM_E-Commerce",
    deploy: "https://github.com/Laurencvengros/ORM_E-Commerce"
  },
  {
    id: 4,
    name: "Social Media App",
    description: "A social network API that uses Mongo DB as a database, Mongoose ODM, Express.JS and seeds data through insomnia.",
    view: "https://github.com/Laurencvengros/18_Social_Media_API",
    deploy: "https://github.com/Laurencvengros/18_Social_Media_API"

  },
  {
    id: 5,
    name: "Weather Dashboard",
    description: "A Javascript application that uses the OpenWeather API so the user may search the forecast for any city they'd like",
    view: "https://github.com/Laurencvengros/Weather_Dashboard",
    deploy: "https://laurencvengros.github.io/Weather_Dashboard/"
  },
  {
    id: 6,
    name: "Team Profile Generator",
    description: "A Node.js application that generates an HTML page that displays information from your terminal.",
    view: "https://github.com/Laurencvengros/Team_Profile_Generator",
    deploy: "https://github.com/Laurencvengros/Team_Profile_Generator"
  }
  
  
  
];  

const styles ={
  cardStyle: {
    marginTop: '20px',
    height: '30rem',
    width: '20rem',
    textAlign: 'center',
    
  },
  textStyle: {
    marginTop: '30px'
      
    
  },
  linkStyle: {
   
    marginTop: '30px'
  },
  wrapper: {
    padding: '30px'
  }
}

const Projects = () => {

    return (
      <Container>
          <Row>
              {data.map((data, k) => (
                  <Col key={k} xs={12} md={6} lg={4} style={styles.wrapper}>
                      <Card style={styles.cardStyle}>
                          <Card.Img src="https://via.placeholder.com/150x75" />

                          <Card.Body >
                              <Card.Title style={styles.textStyle}>{data.name}</Card.Title>
                              <Card.Text style={styles.textStyle}>({data.description})</Card.Text>
                              
                                <a href={data.view}> <Button variant="dark" className='mt-auto' >View Code</Button></a> 
                                <a href={data.deploy}> <Button variant="dark" className='mt-auto' >View App</Button></a> 
                          </Card.Body>
                      </Card>
                  </Col>
              ))}
          </Row>
      </Container>
  )
}
    


export default Projects;