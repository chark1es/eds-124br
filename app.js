const projects = [
  {
    title: "Week 1: WP Sequencing",
    description: "Video overview of the sequencing project.",
    url: "https://youtu.be/jfdEyVxiOwE",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "Week 2: WP Repeats",
    description: "Video overview of the repeats project.",
    url: "https://youtu.be/JNGkJOV2OYo",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "Week 2: Loops",
    description: "Video overview of the loops scratch project.",
    url: "https://youtu.be/w2smPyft174",
    linkLabel: "Watch on YouTube",
  },
  {
    title: "Week 3: Nested Repeats",
    description: "Video overview of the nested repeats project.",
    url: "EDS_124BR_WP_Nested_Repeats",
    linkLabel: "Watch on YouTube",
  }
];

function renderProjects() {
  const list = document.getElementById("project-list");
  if (!list) return;

  const fragment = document.createDocumentFragment();

  for (const p of projects) {
    const li = document.createElement("li");
    const article = document.createElement("article");
    article.className = "project-card";

    const titleEl = document.createElement("h3");
    titleEl.className = "project-title";

    const hasRealLink = p.url && p.url !== "#";
    if (hasRealLink) {
      const titleLink = document.createElement("a");
      titleLink.href = p.url;
      titleLink.target = "_blank";
      titleLink.rel = "noopener noreferrer";
      titleLink.textContent = p.title;
      titleEl.appendChild(titleLink);
    } else {
      titleEl.textContent = p.title;
    }

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = p.description;

    article.appendChild(titleEl);
    article.appendChild(desc);

    if (hasRealLink) {
      const meta = document.createElement("p");
      meta.className = "project-meta";
      const link = document.createElement("a");
      link.className = "project-link";
      link.href = p.url;
      link.target = "_blank";
      link.textContent = p.linkLabel ?? "Open link";
      link.rel = "noopener noreferrer";
      meta.appendChild(link);
      article.appendChild(meta);
    }

    li.appendChild(article);
    fragment.appendChild(li);
  }

  list.appendChild(fragment);
}

renderProjects();
