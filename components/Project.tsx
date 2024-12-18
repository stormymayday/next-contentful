import Image from "next/image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";

interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    liveUrl: string;
    stack: string[];
    featured: boolean;
}

interface ProjectProps {
    project: Project;
    index: number;
}

const Project = ({ project, index }: ProjectProps) => {
    const { title, description, image, githubUrl, liveUrl, stack } = project;

    return (
        <article className="project">
            {image && (
                <Image
                    src={`https:${image}`}
                    alt={title}
                    height={500}
                    width={500}
                    className="project-img"
                />
            )}
            <div className="project-info">
                <span className="project-number">0{index + 1}.</span>
                <h3>{title}</h3>
                <p className="project-desc">{description}</p>
                <div className="project-stack">
                    {stack.map((item, index) => {
                        return <span key={index}>{item}</span>;
                    })}
                </div>
                <div className="project-links">
                    <a href={githubUrl} target="_blank">
                        <FaGithubSquare className="project-icon" />
                    </a>
                    <a href={liveUrl} target="_blank">
                        <FaShareSquare className="project-icon" />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default Project;
