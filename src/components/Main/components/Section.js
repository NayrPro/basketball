import React, {useState, useRef} from 'react'

export default function Section() {
    
    const [heading, setHeading] = useState();
    const [opacity, setOpacity] = useState(0);
    const [transitionDuration, setTransitionDuration] = useState("1.5s");
    const [transitionDelay, setTransitionDelay] = useState("0.5s");

    // References of each side of the container
    const front = useRef();
    const back = useRef();
    
    // References of the images
    const courses = useRef();
    const students = useRef();
    const videos = useRef();
    const blog = useRef();

    // This constant contains the title for each images that will be clicked on    
    const Headings = {
        courses : "Follow our Courses", 
        students : "Read our students' feeback", 
        videos : "Watch our videos", 
        blog : "Read our blog"
    };

    /* The function flips the image container
     and displays either all the images or
     a single image based on which side you clicked on*/
    function imgChange(e){
        
        /*These variables will contain the direction the rotation 
         will take for each side of the container*/
        let transformFront, transformBack;
        
        /* The container will display the image clicked
         in full size*/
        if(e.target.className !== "main-sections-back"){ 
            
            //The title corresponding to the image clicked will be selected
            const title = Object.keys(Headings).filter(title => title === e.target.id);
            setHeading(Headings[title]);

            // The background image of the back side is set
            back.current.style.backgroundImage = getComputedStyle(e.target).backgroundImage;
            back.current.style.backgroundSize = "cover";
        
            transformFront = "perspective(600px) rotateY(-180deg)";
            transformBack = "perspective(600px) rotateY(0deg)";
            // The description tag of the back side fades in
            setOpacity("1"); 
            setTransitionDuration("1.5s");
            setTransitionDelay("0.5");
    
        }else{ // The rotation will show the gallery of images and hide the back side
        
            transformFront = "perspective(600px) rotateY(0deg)";
            transformBack = "perspective(600px) rotateY(180deg)";
            // The description tag of the back side fades out
            setOpacity("0"); 
            setTransitionDuration("0.5s");
            setTransitionDelay("0s");
    
        }
            // The rotation takes place
            front.current.style.transform = transformFront;
            back.current.style.transform = transformBack;
    }

    function handleClick(e){
        /* the function that flip the container isn't called
         if you click anywhere on the description tag of the
         back side*/
        !e.target.id.includes("info") && imgChange(e); 
    }
    return (
        <div className="main-sections">
                <div 
                    className="main-sections-front" 
                    id="front"
                    ref={front}
                >
                    <div className="main-section courses" 
                         id="courses"
                         onClick={handleClick}
                         ref={courses}
                    ></div>
                    <div className="main-section students" 
                         id="students"
                         onClick={handleClick}
                         ref={students}
                    ></div>
                    <div className="main-section videos" 
                         id="videos"
                         onClick={handleClick}
                         ref={videos}
                    ></div>
	                <div className="main-section blog" 
                         id="blog"
                         onClick={handleClick}
                         ref={blog}
                    ></div>
                </div>
                <div className="main-sections-back" 
                     id="back"
                     onClick={handleClick}
                     ref={back}
                >
                    <div 
                        className="main-section-info" 
                        id="info"
                        style={{
                            opacity : opacity,
                            transitionDuration : transitionDuration,
                            transitionDelay: transitionDelay  
                        }}
                        onClick={handleClick}
                    >
	                    <h3 id="info-title">{heading}</h3>
	                    <p id="info-paragraph">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem totam provident ullam reiciendis labore quaerat ad? Explicabo, eius provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem totam provident ullam reiciendis labore quaerat ad? Explicabo, eius provident.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit autem totam provident ullam reiciendis labore quaerat ad? Explicabo, eius provident.
	                    </p>
	                    <a href="/" id="info-link">Click here!</a>
                    </div>

                </div>
        </div>
    )
}
