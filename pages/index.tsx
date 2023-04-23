import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';
import Link from 'next/link'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import EnrollmentPage from './EnrollmentPage';



const Home: NextPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Brand>
          <Text b color="inherit">
            Learn To Hack
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="md">
          <Navbar.Link href="#">Learning Platform</Navbar.Link>
          <Navbar.Link href="#">Community</Navbar.Link>
          <Navbar.Link href="#">Contact Us</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="/login">Login</Navbar.Link>
          <Navbar.Link href="/Signup"><Button auto flat> Sign Up </Button></Navbar.Link>
        </Navbar.Content>
      </Navbar>
      {/* Jumbotron */}
      <Grid.Container justify="center" css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)"}}>
        <Grid xs={12} sm={6} alignItems="center">
          <Col css={{"width": "100%"}}>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>The Education Platform</Text>
            <Text weight={"bold"} size={70} css={{"textAlign": "center"}}>Of The Future</Text>
            <Button size="md" shadow color="gradient" css={{"width": "100%", "marginTop": "10px"}}>Join For Free</Button>
          </Col>
        </Grid>
      </Grid.Container>

      {/* 3 Displaying Product Cards */}
      <Grid.Container>
        <Grid xs={20} sm={4}>
          <InfoCard
            label="Course"
            title="Certified Ethical Hacker Course"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="3,500"
          />
        </Grid>
      </Grid.Container>

      {/* Footer */}
      <Grid.Container justify="center" css={{ backgroundColor: '#1c1c1c', height: '200px', marginTop: '50px' }}>
  <Grid xs={12} sm={6} css={{ display: 'flex', alignItems: 'center' }}>
    <Col>
      <Text color="white" size={16} css={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '10px' }}>Follow us on social media:</span>
        <Link href="https://www.facebook.com/your-facebook-page" passHref>
          <a target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
            <FontAwesomeIcon icon={faFacebook} style={{ color: '#4267B2', fontSize: '24px' }} />
          </a>
        </Link>
        <Link href="https://www.instagram.com/your-instagram-page" passHref>
          <a target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
            <FontAwesomeIcon icon={faInstagram} style={{ color: '#E1306C', fontSize: '24px' }} />
          </a>
        </Link>
      </Text>
    </Col>
  </Grid>
</Grid.Container>

    </Container>
  )
}

export default Home
