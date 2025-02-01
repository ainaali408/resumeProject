import { Link } from 'react-router-dom';

export default function Educations() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">PW Skills </span>

              <p><strong>Date:</strong> December 2024</p>
<p>Actively contributing as a   Full Stack Web Developer Intern.
</p>
            </div>
            <div className="card-action">
              <Link to="/details" className="btn blue lighten-2">View Details</Link>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">MCA</span>
              <p><strong>Date:</strong>  2021-2023 </p>
<p>
	IFTM University Moradabad
</p>
            </div>
            <div className="card-action">
              <Link to="/details" className="btn blue lighten-2">View Details</Link>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">BCA</span>
			  <p>
	IFTM University Moradabad
</p>
              <p><strong>Date:</strong> 2018-2021</p>
            </div>
            <div className="card-action">
              <Link to="/details" className="btn blue lighten-2">View Details</Link>
            </div>
          </div>
        </div>

        <div className="col s12 m6 l4">
          <div className="card">
            <div className="card-content">
              <span className="card-title">10th & 12th </span>
              <p><strong>Date:</strong>Father Son Public School,Bijnor</p>
            </div>
            <div className="card-action">
              <Link to="/details" className="btn blue lighten-2">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
