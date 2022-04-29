import React from 'react';



const About = ({title}) => {
  return (
    <div className="about" id="about">
    <h2 className="title">{title}</h2>
    <div className="container">
        <div className="content">
              <div className="grid-container">
                <div className="paragraphs">
                  <div className="one"> 
                    <p> The San Antonio Nurse's Assoication is an a nurses association located in San Antonio, Texas.  We focus on career growth, education and opportunities to serve out community both here and in Nigeria. The San Antonio Nurse's Association was founded in 2019.  We hold meetings once a month and as needed.</p>
                    <br />
                  </div> 
                
                  <div className="two">
                    <p>Our  mission statement Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis illo corrupti vitae architecto deserunt voluptate sapiente quos error sequi sunt esse voluptatem ea, saepe placeat qui quod molestiae sed quibusdam alias blanditiis! Iure laudantium nisi ab, porro hic harum, ut saepe fugiat doloremque nemo explicabo assumenda voluptatum! Explicabo, quia sapiente.</p><br />

                    <p>To learn more about our organization or to join us, please enter your email in the space provided on our main page and someone will be in touch with you quickly.</p>
                  </div>  
                     <br />
                  </div> 
        </div> 
    </div>

</div>
</div>
  )
}

export default About