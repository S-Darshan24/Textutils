import React from 'react'



export default function About(props) {

    let mystyle = {
        color: props.alldark === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }

    // const [mystyle, setmystyle] = useState(
    //     {
    //         color: "white",
    //         backgroundColor: "black"
    //     }
    // )
    // const [btntext, setbtnText] = useState("dark mobe off");
    // const [btnstyle, setbtnstyle] = useState({ backgroundColor: "white" });

    // const aboutdark = () => {
    //     if (mystyle.color === "black") {
    //         setmystyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: '1px solid white'
    //         })
    //         setbtnText("dark mode on");
    //         setbtnstyle({ backgroundColor: "white", color: "black" });
    //     } else {
    //         setmystyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setbtnText("dark mode off");
    //         setbtnstyle({ backgroundColor: "black", color: "white" });
    //     }

    // }


    return (
        <div className='conteiner' >
            <h1 className='my-3'>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            <strong>Analyze Your text</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>Textutils gives you a way to analyze your text quickly and efficiently.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>TextUti1s is a free character counter tool that provides instant character count & word count statistics for a given
                            text. TextUti1s reports the number of words and characters. Thus it is suitable for writing text with word/ character
                            limit.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatible</strong>

                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={mystyle}>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer,suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                            Safari, Opera It</div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type="button" style={btnstyle} className="btn btn-dark my-3" onClick={aboutdark}>{btntext}</button>
            </div> */}
        </div>
    )
}
