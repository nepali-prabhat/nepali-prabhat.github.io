import Recursive from "../../../public/fonts/Recursive-Regular.ttf";
import RecursiveBold from "../../../public/fonts/Recursive-Bold.ttf";
import { getAllPosts } from "@/data/post";
import { siteConfig } from "@/site-config";
import { getFormattedDate } from "@/utils/date";
import { Resvg } from "@resvg/resvg-js";
import type { APIContext, InferGetStaticPropsType } from "astro";
import satori, { type SatoriOptions } from "satori";

const ogOptions: SatoriOptions = {
  // debug: true,
  fonts: [
    {
      data: Buffer.from(Recursive),
      name: "Recursive",
      style: "normal",
      weight: 400,
    },
    {
      data: Buffer.from(RecursiveBold),
      name: "Recursive",
      style: "normal",
      weight: 700,
    },
  ],
  height: 630,
  width: 1200,
};

const markup = (title: string, pubDate: string) => (
  <div className="flex h-full w-full flex-col bg-[#1d1f21] text-[#c9cacc]">
    <div className="flex w-full flex-1 flex-col justify-center p-10">
      <p className="mb-6 text-2xl"> ${pubDate} </p>
      <h1 className="text-6xl font-bold leading-snug text-white"> ${title} </h1>
    </div>
    <div className="flex w-full items-center justify-between border-t border-[#2bbc89] p-10 text-xl">
      <div className="flex items-center">
        <svg height="60" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272 480">
          <path
            d="M181.334 93.333v-40L226.667 80v40l-45.333-26.667ZM136.001 53.333 90.667 26.667v426.666L136.001 480V53.333Z"
            fill="#B04304"
          >
            {" "}
          </path>
          <path
            d="m136.001 119.944 45.333-26.667 45.333 26.667-45.333 26.667-45.333-26.667ZM90.667 26.667 136.001 0l45.333 26.667-45.333 26.666-45.334-26.666ZM181.334 53.277l45.333-26.666L272 53.277l-45.333 26.667-45.333-26.667ZM0 213.277l45.333-26.667 45.334 26.667-45.334 26.667L0 213.277ZM136 239.944l-45.333-26.667v53.333L136 239.944Z"
            fill="#FF5D01"
          >
            {" "}
          </path>
          <path
            d="m136 53.333 45.333-26.666v120L226.667 120V80L272 53.333V160l-90.667 53.333v240L136 480V306.667L45.334 360V240l45.333-26.667v53.334L136 240V53.333Z"
            fill="#53C68C"
          >
            {" "}
          </path>
          <path d="M45.334 240 0 213.334v120L45.334 360V240Z" fill="#B04304">
            {" "}
          </path>
        </svg>
        <p className="ml-3 font-semibold"> ${siteConfig.title} </p>
      </div>
      <p> by ${siteConfig.author} </p>
    </div>
  </div>
);

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export async function GET(context: APIContext) {
  const { pubDate, title } = context.props as Props;

  const postDate = getFormattedDate(pubDate, {
    month: "long",
    weekday: "long",
  });
  const svg = await satori(markup(title, postDate), ogOptions);
  const png = new Resvg(svg).render().asPng();
  return new Response(png, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": "image/png",
    },
  });
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return posts
    .filter(({ data }) => !data.ogImage)
    .map((post) => ({
      params: { slug: post.slug },
      props: {
        pubDate: post.data.updatedDate ?? post.data.publishDate,
        title: post.data.title,
      },
    }));
}
