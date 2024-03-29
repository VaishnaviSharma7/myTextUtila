import React,{useState} from 'react'

function About(props) {
    
    const [btnText, setbtnText] = useState("Enable Dark")
   let style = {
    color:props.mode === "dark" ? "white":"rgb(80, 78, 78)",
    backgroundColor:props.mode==="dark"?"rgb(80, 78, 78)":"white"
   }
      
  return (
<>
<div className='container' style={style}> 
<h1 className='my-4'>About Us</h1>
    <div className="accordion" id="accordionExample">
    <div className="accordion-item" style={style}>
        <h2 className="accordion-header">
        <button className="accordion-button"style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        </button>
        </h2>
        <div id="collapseOne" style={style}className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={style}>
        <h2 className="accordion-header" style = {style}>
        <button className="accordion-button collapsed"style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        </button>
        </h2>
        <div id="collapseTwo" style={style}className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={style}>
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={style}type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        </button>
        </h2>
        <div id="collapseThree" style={style}className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
        </div>
    </div>
    </div>
   
</div>
</>
  )
}
export default About;