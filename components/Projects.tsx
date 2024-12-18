import Project from "./Project";

type ProjectType = {
    id: string;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
    stack: string[];
    featured: boolean;
};

interface ProjectsProps {
    contentfulData?: ProjectType[];
    error?: string;
}

function Projects({ contentfulData, error }: ProjectsProps) {
    console.log(contentfulData, error);

    if (contentfulData === undefined) {
        return null;
    }

    return (
        <section className="section projects">
            <div className="section-center projects-center">
                {contentfulData.map((project, index) => {
                    return (
                        <Project
                            key={project.id}
                            index={index}
                            project={project}
                        />
                    );
                })}
            </div>
        </section>
    );
}
export default Projects;
