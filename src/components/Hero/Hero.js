import './Hero.scss'
import HeroImg from '../../assets/images/dateknight.PNG'


function Hero() {
    return (
        <div className='hero'>
            <img className='hero__image' src={HeroImg} alt='date knight hero img'/>
        </div>
    )
}

export default Hero;