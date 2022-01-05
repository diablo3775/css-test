import './App.css';
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import img5 from './images/img5.png';
import img6 from './images/img6.png';
import img7 from './images/img7.jpg';
import prfl1 from './images/prfl1.png';
import prfl2 from './images/prfl2.png';
import prfl3 from './images/prfl3.png';
import { RiArrowRightSLine } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
import { AiOutlineApple } from 'react-icons/ai'
import { FaCarrot } from 'react-icons/fa'



function App() {
  return (
    <>
    <div className='header'>
      <div className='text'>Culinary kitchen</div>
      </div>
    <div className="App">
    <div className='img'>
      <img className='pizza'  src={img1} alt=""/>
      <div className='pizza__container'>
          {/*  pica*/}
        <p className="image__french4">Lorem Ipsum is simply dummy tet of te prinitn and typesetting industry</p>
        <br></br>
        <div className='explore4'>
        <p className='arrow4'><button className='button'>Explore <RiArrowRightSLine /></button></p>
        <p className='star4'><AiOutlineStar /> Rate</p>
        </div>
      
          {/* pica */}
      </div>
    
    </div>

    <div>
      <div>
        <p className='Eties'>E T I E S</p>
      </div>
    <div className='Grid'>
      <div>
      <img className='grid' src={img2} alt=""/>
      <div className='image__text'>
        <div className='image__text__inline'>
        <div className="image__french__fries">Crispy French Fries</div>
        <p className="image__french">Lorem Ipsum is simply dummy tet of te prinitn and typesetting industry</p>
        <br></br>
        <div className='explore'>
        <p className='arrow'>Explore <RiArrowRightSLine /></p>
        <p className='star'><AiOutlineStar /> Rate</p>
        </div>
        </div>
      </div>
    
      </div>
      {/*  */}
      <div>
      <img className='grid' src={img3} alt=""/>
      <div className='image__text'>
        <div className='image__text__inline'>
        <div className="image__french__fries">Crispy French Fries</div>
        <p className="image__french">Lorem Ipsum is simply dummy tet of te prinitn and typesetting industry</p>
        <br></br>
        <div className='explore'>
        <p className='arrow'>Explore <RiArrowRightSLine /></p>
        <p className='star'><AiOutlineStar /> Rate</p>
        </div>
        </div>
      </div>
    
      </div>
      {/*  */}
      {/* fe */}
      <div>
      <img className='grid' src={img4} alt=""/>
      <div className='image__text2'>
        <div className='image__text__inline2'>
        <div className="image__french__fries2">Crispy French Fries</div>
        <p className="image__french2">Lorem Ipsum is simply dummy tet of te prinitn and typesetting industry</p>
        <br></br>
        <div className='explore2'>
        <p className='arrow2'>Explore <RiArrowRightSLine /></p>
        <p className='star2'><AiOutlineStar /> Rate</p>
        </div>
        </div>
      </div>
    
      </div>
      {/* fe */}
      {/* last */}
      <div>
      <img className='grid' src={img5} alt=""/>
      <div className='image__text3'>
        <div className='image__text__inline3'>
        <div className="image__french__fries3">Crispy French Fries</div>
        <p className="image__french3">Lorem Ipsum is simply dummy tet of te prinitn and typesetting industry</p>
        <br></br>
        <div className='explore3'>
        <p className='arrow3'>Explore <RiArrowRightSLine /></p>
        <p className='star3'><AiOutlineStar /> Rate</p>
        </div>
        </div>
      </div>
    
      </div>
      {/* last */}
    </div>
    </div>
    </div>
    {/* 2nd */}
    <div className="second">
      <h3>Indian Cuisine<p className='second__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p></h3>

      <h3>American Cuisine
        <p className='second__text'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quisquam, quidem!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quisquam, quidem!Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Quisquam, quidem!</p></h3>
    
      <h3>Chinese Cuisine<p className='second__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p></h3>
    </div>

    {/* 3rd */}
    <div>
      <p className="top">T O P &nbsp;&nbsp; C H E F S</p>
    </div>

    <div>
      {/* <img className="image6" src={img6} alt="" /> */}
      <div className='image6'></div>
      <div className="pos">
        <div className='card2'>
          <img className='profile1' src={prfl3} />
          <div className='chef2'>Eileen Johnson</div>
          <div className='chef22'>Executive Chef, USA</div>
        </div>
        <div className="card">
          <img className='profile2' src={prfl2} />
          <div className='ro'>Robert Downey Jr</div>
          <div className='lo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
        </div>
        <div className="card3">
          <img className='profile3' src={prfl1} />
          <div className='chef3'>Amanda Dority</div>
          <div className='chef33'>Sous Chef, India</div>
        </div>
      </div>
    </div>

    <div>
      <img className="coffee" src={img7} alt='' />

      <div className='i'>
        <div className='w'>
        <AiOutlineApple style={{marginLeft:20,marginTop:15}} />
          <p style={{color:'black',fontSize:13,marginLeft:20}}>FRUITS</p>
        </div>
        <div className='a'>
          <FaCarrot style={{marginLeft:20,marginTop:15}} />
          <p style={{color:'black',fontSize:13}}>VEGETABLES</p></div>
        <div className='s'>
          <AiOutlineApple style={{marginLeft:20,marginTop:15}} />
          <p style={{color:'black',fontSize:13,marginLeft:20}}>FRUITS</p>
          </div>
        <div className='d'>
        <AiOutlineApple style={{marginLeft:20,marginTop:15}} />
          <p style={{color:'black',fontSize:13,marginLeft:20}}>FRUITS</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
