import { useState } from 'react';
import './Games.css'
import VKComments from "./Comments.jsx";
const Games = () => {
  const [position, setPosition] = useState(0)
  const [selectImage, setSelectImage] = useState('https://www.youtube.com/embed/SWVPA1lMJQc')
  const moveRight = () => {
    setPosition(position - 110); 
  };
  const moveLeft = () => {
    setPosition(position + 110)
  }

  return(
    <section className='games_section'>
      <div className="left_side_main">
        <div className="main_game_screen">
        {selectImage.includes("youtube.com") ? (
            <iframe
              key={selectImage}
              width="640"
              height="300"
              src={selectImage}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: '10px',
                border: 0
              }}
            ></iframe>
          ) : (
            <img src={selectImage} alt="" className="main_game_screen_img" />
          )}

        </div>
       
        <div className="main_slider_container">
          <div className="cicle_button_left" onClick={position < 0 ? moveLeft : null}>
            <img className='left_arrow' src="public\left-arrow.png" alt="" style={{
              opacity: position < 0 ? 1 : 0.3
            }} />
          </div>
            <div className="main_slider_wrapper">
                <div className="main_slider_major"
                style={{
                  transform: `translateX(${position}px)`,
                  transition: 'transform 0.5s ease-in-out'
               }}>
                  <div className="main_slider_content" onClick={() => setSelectImage('https://www.youtube.com/embed/SWVPA1lMJQc')}
                    style={{
                      border: selectImage === 'public/i (2).webp' ? '1px solid #545454' : 'none'
                    }}>
                    <img src="public\i (2).webp" alt="" className='main_slider_content_img'/>
                  </div>
                  <div className="main_slider_content" onClick={() => setSelectImage('public/69c778756e5feea7f1675c6d3a2528ac.jpg')}
                    style={{
                      border: selectImage === 'public/69c778756e5feea7f1675c6d3a2528ac.jpg' ? '1px solid #545454' : 'none'
                    }}>
                    <img src="public\69c778756e5feea7f1675c6d3a2528ac.jpg" alt="" className='main_slider_content_img' />
                  </div>
                  <div className="main_slider_content" onClick={() => setSelectImage('public/i.webp')}
                    style={{
                      border: selectImage === 'public/i.webp' ? '1px solid #545454' : 'none'
                    }}>
                    <img src="public\i.webp" alt="" className='main_slider_content_img'/>
                  </div>
                  <div className="main_slider_content" onClick={() => setSelectImage('public/i (1).webp')}
                    style={{
                      border: selectImage === 'public/i (1).webp' ? '1px solid #545454' : 'none'
                    }}>
                    <img src="public\i (1).webp" alt="" className='main_slider_content_img'/>
                  </div>
                  <div className="main_slider_content"></div>
                  <div className="main_slider_content"></div>
                  <div className="main_slider_content"></div>
                  <div className="main_slider_content"></div>
                  <div className="main_slider_content"></div>
                  
              </div>
            </div>
          <div className="cicle_button_left">
            <img onClick={position > -400 ? moveRight : null} className='right_arrow' src="public\right-arrow (1).png" alt="" style={{
               opacity: position > -400 ? 1 : 0.3
            }}/>
          </div>
        </div>
        <div className="main_left_side_common_container">
          <h2 >About the game</h2>
          <p className="main_left_side_bottom_text">In this game you will feel like the king of jumping</p>
          <div className="main_left_side_bottom_line"></div>
        </div>
        <div className="main_left_side_common_container">
          <h2 >About the game</h2>
          <p className="main_left_side_bottom_text">In this game you will feel like the king of jumping</p>
          <div className="main_left_side_bottom_line"></div>
        </div>
        <div className="block_for_ad"></div>
        <button className='log-in-button' id='log-in-in-vk'>log in</button>
      
        <VKComments />


       
      </div>
      
      <div className="right_side_section">
        <h1 className="main_title_of_game">Doodle jump</h1>
        <p className="main_text_about_game">About the game</p>
        <p className="main_text_tags">platformer • 2D</p>
        <button className='main_button_play'>play</button>
      </div>

      
    </section>
    
  )
   
  };
  
  export default Games;
  