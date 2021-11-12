import React, { useState } from 'react';
import Joke from './ourstory.jpeg';
import Picture1 from './pic.png';

const tryarr = [Joke, Picture1, "https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=", "https://www.befunky.com/images/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=webp&format=jpg&width=1200&crop=16:9" ];
function Home(props) {
  const [img, setImg] = useState(Joke)
  const [c, setC] = useState(0);
  React.useEffect(()=>{
    const timer = setTimeout(async() => {
      let element = document.getElementById("slide");
      element.className = "";  
      void element.offsetWidth; 
      element.className = "try";
      setImg(tryarr[c]);
      console.log(c);
      let x = c;
      x++;
      setC(x);
      if(c>2){
        setC(0);
      }
    }, 4000);
    return () => clearTimeout(timer);
  })

  React.useEffect(()=>{
    props.p('Home');
  }, [])

  return (    
    

    // <><img src={Joke} height="50%" width="50%" className="Joke" alt="Joke" />
    <>

      <img src={img} height="50%" width="50%" id="slide" alt="Joke" />
    
    <table><br/>
      <tr>
        
        
        <td class=".td" style={{width:'50%', textAlign:'left', border:'10px solid #D6EEEE'}}><br/><h3>Our Values</h3><p>The Lao Foundation Inc. (LFI) started from the D&L Group
          of Companies’ small, often informal initiatives, which
          consisted of feeding programs, educational grants, and
          health-related projects. Formally established in 2010,
          The Lao Foundation Inc. (LFI) started from the D&L Group
          of Companies’ small, often informal initiatives, which
          consisted of feeding programs, educational grants, and
          health-related projects. Formally established in 2010,
          LFI’s projects have now grown into the structured
          scholarships, livelihood programs, and leadership
          sessions they are today. What makes LFI so special and
      personal is that it operates not only as the CSR arm of the
          D&L arm of the D&L Group of Companies, but as a family
          foundation as well.</p>
        </td>
        <td style={{width:'50%', backgroundColor:'#D6EEEE', textAlign:'left', border:'10px solid #355E3B' }}><h3>Our Mission</h3><p><b>“Providing individuals with the opportunities to change their lives and the community”</b><br />
          Lao Foundation Inc. works to build people of character and skill by providing the necessary education, livelihood skills,
          and support to help them improve their lives.
          Our goal is to empower the less fortunate to attain a better life for themselves and the entire community.</p>
        </td>
      </tr>

      <tr>
      <td style={{width:'50%', backgroundColor:'#D6EEEE', textAlign:'left', border:'10px solid #355E3B' }}><br/><h3>Our Story</h3> <p>Empowerment through Education, Values Formation,
          Livelihood Training and Leadership Development
          We believe that long lasting change comes from within.
          That is why the Lao Foundation is focused on developing
          and investing in individuals, their families, as well as the
          community at large through various programs, not only to
          help them succeed in life, but also to encourage them to
          help others succeed. By providing them with education,
          values formation, and other necessary programs, it is our
          goal to mold empowered individuals that can contribute
          to building a sustainable and healthy community.<br />
          We believe it is through empowering individuals that we
          can make long lasting changes. Our ultimate goal is to
          mold minds, transform hearts and develop life skills so
          that our end beneficiaries live and lead productive and
          meaningful lives.</p>
        </td>
        

        <td style={{width:'50%', textAlign:'left', border:'10px solid #D6EEEE'}}><br/><h3>Our Vision</h3><p><b>“Empowerment through Education, Values Formation, Livelihood Training and Leadership Development”</b><br />
          We believe that long-lasting change comes from within. That is why the Lao Foundation is focused on developing and
          investing in individuals, their families, as well as the community at large through various programs,
          not only to help them succeed in life, but also to encourage them to help others succeed.
          By providing them with education, values formation, and other necessary programs,
          it is our goal to mold empowered individuals that can contribute to building a sustainable and healthy community.</p></td><br/><br/><br/>
      </tr>
    </table></>
    
    
   
    
  );
}

export default Home;
