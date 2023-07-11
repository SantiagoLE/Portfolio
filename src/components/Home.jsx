import React from 'react'
import ReactTyped from 'react-typed';
import "./style/home.css"


const Home = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/CV_Santiago_Loaiza_Escobar.pdf';
        link.download = 'CV Santiago Loaiza Escobar.pdf';
        link.click();
    };


    const text = ["Full Stack Developer", "Front-End Developer", "Back-End Developer"]

    return (
        <section id='home'>


            <div className='home__img-container'>
                <img className='home_img' src="/Santiago Loaiza Escobar.png" alt="" />
            </div>

            <div className='home_info-container'>
                <h2 className='home_title'>¡Hola! Soy Santiago Loaiza Escobar</h2>

                <div className='text_animate'>
                    <ReactTyped strings={text} typeSpeed={100} loop />
                </div>
            </div>




            <button className='home_btn' onClick={handleDownload}><i className='bx bx-download'></i> CV</button>

        </section>
    )
};

export default Home;
