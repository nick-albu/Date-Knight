import './Hero.scss'
import Knight from '../../assets/images/dateknight_logo.png'
import HeroText from '../../assets/images/herotext.PNG'


function Hero() {
    return (
        <div className='hero'>
            <div className='hero__container'>
                <div className='hero__imageContainer'>
                    <img className='hero__header' src={HeroText} alt='Date Knight text'/>
                    <img className='hero__image' src={Knight} alt='date knight hero img'/>
                </div> 
                <div className='hero__btmContainer'>
                    <div className='hero__descContainer'>
                        <p className='hero__description'>A custom date builder and date generator, in one</p>
                        <p className='hero__description'>Choose or randomize your food, activity and dress code</p>
                        <p className='hero__description'>Go have fun together</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Hero;