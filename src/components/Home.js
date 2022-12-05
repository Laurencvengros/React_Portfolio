import React from "react";
import ParticlesBg  from "particles-bg";

const styles={
    homeText: {
        display: 'block',
        textAlign: 'center',
        lineHeight: '100px',
        marginTop: '300px',
        
    },
  
}

const Home = () => {
    return (
        <div>
            <ParticlesBg type="cobweb" bg={true} />
        
        
        
            <div style={styles.homeText} >
                <h1 style={{ fontSize: "70px" }} >Hi,</h1>
                <h1 style={{ fontSize: "70px"}} >My Name is Lauren</h1>
                <h3 style={{ fontSize: "40px" }}> I am a Full Stack Developer</h3>
            </div>
          
        </div>
      );
    };

export default Home;