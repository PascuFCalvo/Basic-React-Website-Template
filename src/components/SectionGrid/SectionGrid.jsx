import React from 'react';
import ProjectData from "../../data/projects.json";
import CardHorizontal from '../CardHorizontal/CardHorizontal';
import './SectionGrid.css';

const SectionGrid = () => {
    return (
        <div className='GridContainer'>

            
                {ProjectData.Projects.map((project, index) => {
                    return (
                        <CardHorizontal
                            key={index}
                            image={project.imgSrc}
                            subtitle={project.subtitle}
                            title={project.title}
                            description={project.description}
                            sourceCodeLink={project.sourceCodeLink}
                            viewlink={project.viewLink}
                        />
                    );
                })}
            

        </div>
    );
};

export default SectionGrid;
