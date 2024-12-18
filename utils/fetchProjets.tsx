import { createClient } from "contentful";

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

export async function getContentfulData() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID || "",
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    });

    try {
        const entries = await client.getEntries({
            content_type: "projects",
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const projects: Project[] = entries.items.map((entry: any) => ({
            id: entry.sys.id,
            title: entry.fields.title as string,
            description: entry.fields.description as string,
            image: entry.fields.image?.fields?.file?.url as string,
            githubUrl: entry.fields.githubUrl as string,
            liveUrl: entry.fields.liveUrl as string,
            stack: entry.fields.stack as string[],
            featured: entry.fields.featured as boolean,
        }));

        return {
            entries: projects,
            error: "",
        };
    } catch (error) {
        console.error("Error fetching Contentful data:", error);
        return {
            entries: [],
            error: "Failed to fetch content",
        };
    }
}
