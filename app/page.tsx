import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { getContentfulData } from "@/utils/fetchProjets";

// interface ProjectData {
//     entries: Project[];
//     error: string;
// }

// interface Project {
//     title: string;
//     description: string;
//     image: string;
//     githubUrl: string;
//     liveUrl: string;
//     stack: string[];
//     featured: boolean;
// }

export default async function Home() {
    const { entries, error } = await getContentfulData();
    // const result: ProjectData[] = await getContentfulData();
    // console.log(entries);

    if (error) {
        return (
            <main>
                <h1>Oops! something went wrong!</h1>
            </main>
        );
    }

    return (
        <main>
            <Hero />
            <Projects contentfulData={entries} error={error} />
        </main>
    );
}
