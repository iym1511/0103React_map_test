import './Home.css'
import Main from './Main';

const Home = () => {
    const imgArray = ([
        {
            title : "사진1",
            img : "img1.jpg",
            text : "물건설명1"
        },
        {
            title : "사진2",
            img : "img2.jpg",
            text : "물건설명2"
        },
        {
            title : "사진3",
            img : "img3.jpg",
            text : "물건설명3"
        }
    ])
    return (  
        <div>
            <a href="">더보기</a>
            <div className='box'>
            {
                imgArray.map((img, index)=>(
                <div key={index}>
                    <div className='mapimg'>
                        <p>{img.title}</p>
                        <img src={require(`../img/${img.img}`)}/>
                        <p>{img.text}</p>
                    </div>
                </div>
                )) 
            }
            </div>
        </div>
    );
}
 
export default Home;