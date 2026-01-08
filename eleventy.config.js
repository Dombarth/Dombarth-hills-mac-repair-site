import sitemap from "@quasibit/eleventy-plugin-sitemap";

export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"src/assets": "assets"});
  eleventyConfig.addPassthroughCopy({"src/robots.txt": "robots.txt"});
  eleventyConfig.addPassthroughCopy("google6775f3b3bbbe3bbf.html");   // <-- ADD THIS LINE
  eleventyConfig.addWatchTarget("src/assets/css/style.css");

  eleventyConfig.addFilter("iso", (dateObj) => {
    return new Date(dateObj).toISOString();
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://www.hillsmacrepair.com.au"
    }
  });

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
}
