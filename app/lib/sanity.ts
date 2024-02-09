import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  apiVersion: "2023-05-03",
  dataset: "production",
  projectId: "d4umb42t",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

// Function to convert images to urls
export function urlFor(source: any) {
  return builder.image(source);
}
