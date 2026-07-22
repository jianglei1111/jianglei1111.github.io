const noteFiles = import.meta.glob("../content/notes/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const updateFiles = import.meta.glob("../content/updates/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export function getNoteMarkdown(slug) {
  const matchingEntry = Object.entries(noteFiles).find(([path]) =>
    path.endsWith(`/${slug}.md`),
  );

  return matchingEntry?.[1] ?? "";
}

export function getUpdateMarkdown(slug) {
  const matchingEntry = Object.entries(updateFiles).find(([path]) =>
    path.endsWith(`/${slug}.md`),
  );

  return matchingEntry?.[1] ?? "";
}
