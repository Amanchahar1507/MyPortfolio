import React from "react";
import icon1 from '../images/github.svg'
import icon2 from '../images/linkedin.svg'
import icon from '../images/download.svg';
import resumeUrl from '../images/AmanChaharResume.pdf'

const styles = {
    footer: {
        position: 'relative',
        // bottom: '-370px',
        padding: '5rem 0',
        width: '100%'
    },
  };
function footer (){
    return (
        <footer style={styles.footer} className="footer bg-black text-light text-center ">
            <a href="https://github.com/Amanchahar1507?tab=repositories"><img className="icons"src={icon1} alt="" /></a>
            <a href="https://www.linkedin.com/in/aman-chahar-8445b0211/"><img className="icons"src={icon2} alt="" /></a>
            <a  href={resumeUrl} rel="noreferrer" target="_blank" download = "AmanChaharResume.pdf"><img className='icons icon' src={icon} alt="Download Resume"></img></a>
        </footer>

    )
}
export default footer;