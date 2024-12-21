import Image from "next/image";

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
        <section className="projects">
            <div className="title">
                <h2>projects</h2>
                <div className="title-underline"></div>
            </div>
            <div className="projects-center">
                {contentfulData.map((project) => {
                    const { id, title, image, liveUrl } = project;
                    return (
                        <a
                            key={id}
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project"
                        >
                            {image && (
                                <Image
                                    src={`https:${image}`}
                                    alt={title}
                                    height={500}
                                    width={500}
                                    className="img"
                                />
                            )}
                            <h5>{title}</h5>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
export default Projects;
