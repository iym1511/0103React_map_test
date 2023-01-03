import './Home.css'

const Printmap = ({place, image}) => {
    return (  
        <div className='box2'>
            <div>
                <h3>{place}</h3>
                <img src={image} width="300px" />
            </div>
        </div>
    );
}
 
export default Printmap;