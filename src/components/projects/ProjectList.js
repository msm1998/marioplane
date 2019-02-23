import React from 'react';
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom';
const ProjectList =({projects})=>{
    // console.log(projects)
    return(
        <div className="project-list sections">
            {projects && projects.map(project=>{
                return(
                    <Link to={'/projects/'+project.id} key={project.id}>
                        <ProjectSummary project={project}  />
                    </Link>
                )
            })}            
        </div>
    )
}

export default ProjectList;