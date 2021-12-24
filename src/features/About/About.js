import './about.css'

export const About = () => {
    return (
        <div className="container">
            <section className='about'>
                <header>
                    <h1>
                        ABOUT!
                    </h1>
                </header>
                <div>
                    <p>
                        Welcome! Donutland, which was founded just now, 
                        is home to some of the best donuts in the 
                        country, if not in the whole world. 
                        Just about everything is made from scratch, and it taste like it too! 
                        Why settle for factory made donuts when you can get the real stuff here!
                        We pride ourselves on our quality and we promise that your taste buds will take pride in the best donuts in the world!
                    </p>
                </div>
            </section>
            <section className='contact'>
                <header>
                    <h1>
                        CONTACT!
                    </h1>
                </header>
                <div>
                    <p><b>We'd love to have you!</b></p>
                    <br></br>
                    <p><b>Address: </b>000 Donutland Lane, Donut City, Donut State 00000, Donut Country</p>
                    <br></br>
                    <p><b>Phone: </b>+0 000 0000</p>
                </div>
            </section>
            <section className='donuts'>
                <header>
                    <h1>
                        CHECKOUT SOME DONUTS!
                    </h1>
                    <div>
                        <img src='./images/arrow.png'/>
                    </div>
                </header>
            </section>
        </div>
    )
}