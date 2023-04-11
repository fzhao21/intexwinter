import React from 'react'
import pyramid from '../img/pyramid.jpg'

const Home = props => {

    return(
        <>
            <div className="Home">
                <img src={pyramid}/>
                <div className="projectDescription">
                    <h1>Project Description</h1>
                    <br></br>
                    <div className="typing">
                    <div className="text-cover"></div>
                    <p className="typed-out">
                    Fag el-Gamous (which means Way of the Water Buffalo) is a large and important cemetery in Egypt that has been under 
                    archeological investigation (primarily by BYU researchers) for over 25 years. The excavation has garnered international attention 
                    because of the interesting insights gained by studying the Fag el-Gamous mummies. Detailed background information on this site 
                    can be found in the academic article “Rethinking burial dates at a Graeco-Roman Cemetery: Fag el-Gamous, Fayoum, Egypt.”
                    During multiple years of study, researchers have excavated more than 1,000 mummies and collected data in field notes, spreadsheets, and 
                    simple databases about each mummy’s location, physical orientation in the ground, burial depth, hair color, wrapping 
                    (including information about the textiles used), sex, age, bone (including skull and teeth) dimensions, items accompanying the mummy, 
                    and more. And, of course, there are many, many photographs. Offsite, researchers have performed a variety of analyses on the 
                    excavated items including carbon dating, DNA sequencing, and others.
                    </p>
                </div>
                </div>
                <a href="#" class="link">
                <span class="mask">
                    <div class="link-container">
                    <span class="link-title1 title">Burial Records</span>
                    <span class="link-title2 title">Burial RecordsE</span>
                    </div>
                </span>
                <div class="link-icon">
                    <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                    <svg class="icon" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                </div>
                </a>
            </div>
        </>
    )
}

export default Home;