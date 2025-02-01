import { Link } from 'react-router-dom';
import ImgProfile from '../../../images/person1.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'material-design-icons/iconfont/material-icons.css';



export default function Profile() {
	return (
		<div>
			<div className='card'>
				<div className='card-image'>
					<img className='activator' src={ImgProfile} alt='aina ali'/>
					<Link
  className="btn-floating halfway-fab waves-effect waves-light red"
  style={{
    right: '-10px',
    transform: 'scale(0.8)',
  }}
>
  <i className="material-icons activator">more_vert</i>
</Link>
				</div>
				<div className='card-content'>
					<span className='card-title activator grey-text text-darken-4'>
AINA ALI
					</span>
					<p>Frontend developer</p>
					<p>React JS</p>

				</div>
				<div className='card-reveal'>
					<span className='card-title grey-text text-darken-4'>
						Follow Me
						<i className='material-icons right'>close</i>
					</span>
					<p className='flex-container'>
						<i className='fab fa-facebook-f grey-text text-darken-4 social_style'></i>
						<i className='fab fa-twitter grey-text text-darken-4 social_style'></i>
						<i className='fab fa-google-plus-g grey-text text-darken-4 social_style'></i>
						<i className='fab fa-instagram grey-text text-darken-4 social_style'></i>
						<i className='fab fa-pinterest grey-text text-darken-4 social_style'></i>
					</p>
				</div>
			</div>
		</div>
	);
}
