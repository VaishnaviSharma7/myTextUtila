import React,{useState} from "react";

import "./Navbar.css";

export default function Navbar(props) {
  const [checkedIndex, setCheckedIndex] = useState(null);

  const handleCheckboxChange = (index) => {
    setCheckedIndex(index);
  };
  
  
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
       <div>
            <span className="navbar-brand">
          {props.title}
        </span>
          
       </div>
      
   
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropstart</span>
          </button>
          <ul className="dropdown-menu p-3">
          <li><button className="dropdown-item" type="button"></button><div className="form-check form-switch">
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default Light Theme</label>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="theme"checked={checkedIndex === 0}
          onChange={() => handleCheckboxChange(0)} onClick={props.light}/>
</div></li>
          <li><button className="dropdown-item" type="button"></button><div className="form-check form-switch">
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Greenish Dark Theme</label>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="theme"checked={checkedIndex === 1}
          onChange={() => handleCheckboxChange(1)} onClick={props.green}/>
</div></li>

    <li><button className="dropdown-item" type="button"></button><div className="form-check form-switch">
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Bluish Dark Theme</label>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="theme"checked={checkedIndex === 2}
          onChange={() => handleCheckboxChange(2)} onClick={props.blue}/>
</div></li>
    <li><button className="dropdown-item" type="button"></button><div className="form-check form-switch">
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Reddish Dark Theme</label>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={checkedIndex === 3}
          onChange={() => handleCheckboxChange(3)} name="theme" onClick={props.red}/>
</div></li>
          </ul>
          <button type="button" className="btn btn-secondary">
            Dark Theme
          </button>

        </div>
        </div>
      
    </nav>
  );
}
