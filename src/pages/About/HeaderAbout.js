import React from 'react'
import '../About.css'

const HeaderAbout = () => {
    return (
      <div className='container'>
          <div className='about-img'>
            <img src="/img/leaf-2.png" alt="leaf-2" />
          </div>
          <div className='section'>
            <div className='about-header-info'>
              <div className='about-header-info-h2'>
                <h2>We Are Your Favourite Store.</h2>
              </div>
              <div className='about-header-info-p'>
                <p>Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
                <p>Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
              </div>
            </div>
            <div className='about-header-img'>
              <img src="/img/about-header.jpg" alt="about-header" />
            </div>
          </div>
        </div>
    )
}

export default HeaderAbout
