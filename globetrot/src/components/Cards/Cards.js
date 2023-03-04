// import '../../styles/Cards.css'
import Star from './Images/Star.png'


const Cards = (props)=>{
    return(
        <div className='CardComponent'>
            <div className='CardImage'>
                <img src={props.image} width= '300px' height= '400px' alt='Card'></img>
            </div>
            <div className='CardText'>
                <div className='Rating'>
                    <img src={Star} height='20px' width='20px' alt='Star'></img>
                    <p>{props.rating}</p>
                </div>
                <div className='Title'><p>Abcd</p></div>
                <div className='Price'><p>150rupaya</p></div>
            </div>
        </div>
    )
}

export default Cards


