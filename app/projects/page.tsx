import { Stringifier } from "postcss"
import { client } from "../lib/sanity"
import Image from "next/image"

// new kind of interface
interface Data {
    title: string;
    overview: string;
    link: string;
    _id: string;
    imageUrl: string;
}

// fetch projects with sanity query
async function getProjects() {
    // define query
    const query = `*[_type == "project"] {
        title,
          overview,
          link,
          _id,
          "imageUrl": image.asset->url
      }`

    // fetch data
    const data = await client.fetch(query)

    return data
}

export const revalidate = 60

export default async function Projects() {

    // Data is defined as interface above
    const data: Data[] = await getProjects()

    console.log(data)

    return (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sma:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    All Projects
                </h1>
            </div>

            <div className="grid gap-y-8 sm:gap-6  sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
                {data.map((project) => (
                    <article key={project._id} className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-sky-100">
                        <div className="h-56 w-full relative">
                            <Image
                                fill
                                src={project.imageUrl}
                                alt="Image of the project" 
                                className="w-full h-ful object-cover"/>
                        </div>
                        <div className="p-4 sm:p-6">
                            <a href={project.link} target="_blank">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                            </a>
                                <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400 line-clamp-3">
                                    {project.overview}
                                </p>
                                <a href={project.link} target="_blank" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-sky-500">
                                    Learn More
                                    <span className="block transition-all group-hover:ms-0.5">&rarr;</span>
                                </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}