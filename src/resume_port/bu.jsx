import React ,{useState}from 'react'
import img from "../img/resu.jpg"
import img2 from "../img/tran.jpg"
function Bu() {

    const [showImage, setShowImage] = useState(false);
    const [showImage2, setShowImage2] = useState(false);
    return (
        
        <div style={{ textAlign: "center", margin: "40px",  }}>
            <div style={{ fontSize : "20px", margin : '30px'}}>
                <h2>My Resume & Transcript</h2>
            </div>
            <button 
                onClick={() => setShowImage(!showImage)} 
                style={{
                         backgroundColor:' rgb(22, 17, 47)',
                        borderRadius: '10px',
                        borderColor: 'rgb(175, 16, 16)',
                        color: 'white',
                        padding: '15px 32px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        display: 'inline-block',
                        fontSize: '16px',
                        marginRight: '40px',
                        cursor: 'pointer'
                
                }}
            >
                {showImage ? "Close" : "Resuma"}
            </button>
            {showImage && (
                <div>
                    <img 
                        src= {img}
                        alt="Resuma" 
                        style={{ width: "1241px", height: "1755px", borderRadius: "10px" }} 
                    />
                </div>
            )}


             <button 
                onClick={() => setShowImage2(!showImage2)} 
                style={{
                    backgroundColor:' rgb(22, 17, 47)',
                    borderRadius: '10px',
                    borderColor: 'rgb(175, 16, 16)',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '4px 2px',
                    cursor: 'pointer'
            }}
            >
                {showImage2 ? "Close" : "Transcript "}
            </button>

            {showImage2 && (
                <div>
                    <img 
                        src={img2 }
                        alt="Transcript" 
                        style={{ width: "1241px", height: "1755px", borderRadius: "10px" }}
                    />
                </div>
            )}
        </div>

        

        
    );
}

export default Bu
