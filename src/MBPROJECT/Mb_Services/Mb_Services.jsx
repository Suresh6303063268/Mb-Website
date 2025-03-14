import React, { useState } from 'react';
import Typography from '@mui/material/Typography';








import './Mb_Services.css';





function MbSerivece() {
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleMenuOpen2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleMenuClose2 = () => {
    setAnchorEl2(null);
  };






























  
  
  

  
  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
     



























      <div>
     
          <img style={{ width: 1530, height: 450, marginTop: 85 }} src='home9.jpg' alt="Image 1" />
          <Typography className='sut'            style={{marginTop:-270, fontSize:70, marginLeft:150, color:'white', fontWeight:'600'}}>Our Services</Typography>
        
        </div>




    



<div className='serive' style={{ backgroundColor:'DarkBlue', marginTop: '150px', height: '80px', width: '1200px', justifyContent: 'center', marginLeft: '160px', paddingTop: '20px', borderRadius: '70px' }}>
  
      <div className='leo' style={{ marginTop: '15px', color: 'white', marginLeft: '80px', fontSize: '20px' }}>WEB DEVELOPMENT</div>
      <hr />
      <div className='leo' style={{ marginTop: '15px', color: 'white', marginLeft: '-10px', fontSize: '20px' }}>UI/UX DESIGN</div>
      <hr />
      <div className='leo' style={{ marginTop: '15px', color: 'white', marginLeft: '-20px', fontSize: '20px' }}>CYBER SECURITY</div>
      <hr />
      <div className='leo' style={{ marginTop: '15px', color: 'white', marginLeft: '-20px', fontSize: '20px' }}>DIGITAL MARKETING</div>
      <hr />
   
</div>










       
















     {/*Service*/}

     <div className='md'>
    
      <div className='mdo'              style={{fontWeight:'bolder', fontSize:34, marginTop:60, marginLeft:100, color:'darkblue'}}>Services</div>

      <div className='mdo1'          style={{fontWeight:'500', fontSize:58, marginTop:20, marginLeft:100, color:'black'}}>Transform your business</div>
      <div className='mdo2'           style={{fontWeight:'500', fontSize:58, marginTop:10, marginLeft:100, color:'darkblue', width:900}}>challenges into<span style={{color:'black', marginTop:-50}}> opportunities
with our </span>
                 innovative services.</div>
                
     </div>




   










<div className='md1' style={{display:'flex', marginLeft:100}}>

  <div className='md_1'>
  <img style={{ width: 530, height: 550, marginTop: 110}} src='' alt="Image 1" />
  </div>
  <div className='md_2' style={{ marginTop:100, marginLeft:100, lineHeight:2, fontSize:22}}>
    <div style={{fontSize:40, color:'darkblue', width:800, fontWeight:'bold'}}>WEB DEVELOPMENT</div>
    <p style={{width:600}}>The right web development design is the beginning of substantial ROI. Whether you are looking for a trusted partner or a high-quality, robust, and custom end-to-end development service to increase the agility of your website, you are here. Our solutions produce scalable, responsive, user-friendly, and SEO-friendly websites to boost operability, revenue, and customer experience.</p>
    <div className='iro' style={{display:'flex'}}>
  <div className='iro1'style={{lineHeight:2, color:'darkblue',fontSize:19}}>
    <li>Python</li>
    <li>NodeJS</li>
    <li>WordPress</li>
    <li>Mysql</li>
  </div>
  <div className='iro2' style={{lineHeight:2, color:'darkblue',fontSize:19, marginLeft:150}}>
    <li style={{}}>PHP</li>
    <li>ReactJS</li>
    <li>Oracle</li>
    <li>Java</li>
    <div className='' style={{marginTop:50}}>
    <a style={{marginLeft:-250, paddingTop:10, fontSize:30, fontWeight:'bold', textDecoration:'underline'}}            href="/contact" className="what4" onClick={handleMenuOpen2}>
              DICUSS YOUR PROJECT :-
              </a>
              </div>
  </div>
  </div>
  </div>
 
</div>
























<div className='md1' style={{display:'flex', marginLeft:100}}>

  <div className='md_1'>
  <img style={{ width: 530, height: 550, marginTop: 110}} src='' alt="Image 1" />
  </div>
  <div className='md_2' style={{ marginTop:100, marginLeft:100, lineHeight:2, fontSize:21}}>
    <div style={{fontSize:40, color:'darkblue', width:800, fontWeight:'bold'}}>Mobile App Development</div>
    <p style={{width:600}}>Our world has 83.4% mobile users; businesses need a superior mobile app functional on all platforms. As brands/companies navigate the turbulent waters of the digital ecosystem, they need robust, engaging, practical mobile applications to capture the demographic. Our mobile development solutions will enable you to make informed decisions across all platforms.</p>
    <div className='iro' style={{display:'flex'}}>
  <div className='iro1'style={{lineHeight:2, color:'darkblue',fontSize:19}}>
    <li>Ionic</li>
    <li>React Native</li>
  </div>
  <div className='iro2' style={{lineHeight:2, color:'darkblue',fontSize:19, marginLeft:150}}>
    <li style={{}}>Flutter</li>
    <li>Swift</li>
    <div className='' style={{marginTop:80}}>
    <a style={{marginLeft:-250, paddingTop:10, fontSize:30, fontWeight:'bold', textDecoration:'underline'}}            href="/contact" className="what4" onClick={handleMenuOpen2}>
              DICUSS YOUR PROJECT :-
              </a>
              </div>
  </div>
  </div>
  </div>
 
</div>





















<div className='md1' style={{display:'flex', marginLeft:100}}>
  <div className='md_1'>
  <img style={{ width: 530, height: 550, marginTop: 110}} src='' alt="Image 1" />
  </div>
  <div className='md_2' style={{ marginTop:100, marginLeft:100, lineHeight:2, fontSize:21}}>
    <div style={{fontSize:40, color:'darkblue', width:800, fontWeight:'bold'}}>UI/UX Design</div>
    <p style={{width:600}}>The best designs communicate your customer's emotions and enhance their experience as they navigate your website. Designs are simply visual aids that boost a brand's digital impression, but good businesses know that designs without the UI/UX impact are a waste of time. At Cyber Nest, we do not believe in simple designs but offer aesthetical concepts that sell your brand to the customer while telling a story. </p>
    <div className='iro' style={{display:'flex'}}>
  <div className='iro1'style={{lineHeight:2, color:'darkblue',fontSize:19}}>
    <li>Figma</li>
    <li>Adobe Xd</li>
    <li>Sketch</li>
  </div>
  <div className='iro2' style={{lineHeight:2, color:'darkblue',fontSize:19, marginLeft:150}}>
    <li style={{}}>Adobe Photoshop</li>
    <li>Illustrator</li>
    <li>Spline</li>
    <div className='' style={{marginTop:80}}>
    <a style={{marginLeft:-250, paddingTop:10, fontSize:30, fontWeight:'bold', textDecoration:'underline'}}            href="/contact" className="what4" onClick={handleMenuOpen2}>
              DICUSS YOUR PROJECT :-
              </a>
              </div>
  </div>
  </div>
  </div>
 
</div>


















<div className='md1' style={{display:'flex', marginLeft:100}}>

  <div className='md_1'>
  <img style={{ width: 530, height: 550, marginTop: 110}} src='' alt="Image 1" />
  </div>
  <div className='md_2' style={{ marginTop:100, marginLeft:100, lineHeight:2, fontSize:22}}>
    <div style={{fontSize:40, color:'darkblue', width:800, fontWeight:'bold'}}>Digital Marketing</div>
    <p style={{width:600}}>Digital marketing is your trusted partner in digital marketing excellence. With a proven track record of driven results for businesses of all sizes, we specelize in delivering tailored strategies that elevate your online presence and maximize ROI. From SEO and PPC to soical media managment and content marketing, and drive conversions.</p>
    <div className='iro' style={{display:'flex'}}>
  <div className='iro1'style={{lineHeight:2, color:'darkblue',fontSize:19}}>
    <li>Facebook Ads</li>
    <li>Google Ads</li>
    <li>Whatsapp Marketing</li>
    <li>Logo Design's</li>
  </div>
  <div className='iro2' style={{lineHeight:2, color:'darkblue',fontSize:19, marginLeft:150}}>
    <li style={{}}>Brochure Design's</li>
    <li>Google Tag's</li>
    <li>Google Analytic's</li>
    <li>AI Chatbot's</li>
    <div className='' style={{marginTop:50}}>
    <a style={{marginLeft:-330, paddingTop:10, fontSize:30, fontWeight:'bold', textDecoration:'underline'}}            href="/contact" className="what4" onClick={handleMenuOpen2}>
              DICUSS YOUR PROJECT :-
              </a>
              </div>
  </div>
  </div>
  </div>
 
</div>






















    </div>
  );
}

export default MbSerivece;
