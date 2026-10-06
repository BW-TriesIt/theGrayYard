/*
  THE GRAY YARD LTD. CO. - SOLUTIONS DATA
  ----------------------------------------------------------
  To add a work sample: copy one block below, paste it at the end of
  the array (add a comma after the previous block), and edit it.
  To remove one: delete its block. Nothing else needs editing.

  FIELDS
    id        Label shown on the card (REF-04, REF-05, ...)
    title     Card heading
    category  Filter name. Use one of: "Systems & Audits",
              "Workflows & Portals", "Enablement & AI",
              "Digital Media & Assets", "Strategic Sourcing"
    summary   One or two sentences
    image     "" for a text-only card, or "assets/solutions/photo.jpg"
              for a preview thumbnail
    format    How the sample opens (see below). Leave out for "link".
    link      Where the sample lives (a file path or web address)
    linkText  The words on the card's link
    tags      Short skill or technology tags

  FORMATS  (set with  format: "..." )
    "link"    Default. Opens the link in the same tab, or a new tab for
              web addresses and PDFs.
    "pdf"     Same as link. Put the file in assets/solutions/ and use
              link: "assets/solutions/report.pdf"
    "embed"   Opens inside the page in a pop-up window, so visitors can
              click and interact. Use it for tools you build:
              put a folder in assets/solutions/my-tool/ containing an
              index.html, then link: "assets/solutions/my-tool/index.html"
              (start from assets/solutions/_template/). Also works for an
              outside web page that allows embedding.
    "video"   Local file (link: "assets/solutions/demo.mp4") or a YouTube
              or Vimeo address. Plays in the pop-up window.
    "image"   Shows a large version of the image in the pop-up window.

  Anything that cannot be shown in a pop-up still works with the
  default "link" format.

  EXAMPLES (copy, uncomment, edit)
  {
    id: "REF-04",
    title: "Floor Plan Explorer",
    category: "Systems & Audits",
    summary: "Click through a multi-site floor plan and inspect equipment.",
    image: "assets/solutions/floorplan-preview.jpg",
    format: "embed",
    link: "assets/solutions/floorplan/index.html",
    linkText: "Try it →",
    tags: ["Interactive", "Spatial Mapping"]
  },
  {
    id: "REF-05",
    title: "Audit Summary Report",
    category: "Systems & Audits",
    summary: "Sample executive audit deliverable.",
    image: "",
    format: "pdf",
    link: "assets/solutions/audit-summary.pdf",
    linkText: "Open PDF →",
    tags: ["Report"]
  },
*/
const SOLUTIONS_DATA = [
  {
    id: "REF-01",
    title: "Enterprise M365 & AI Enablement Framework",
    category: "Enablement & AI",
    summary: "Structured adult-learning lab architecture, meta-prompting playbooks, and facilitator guides designed for rapid workforce technology adoption.",
    image: "",
    link: "contact.html#capability",
    linkText: "Review Architecture →",
    tags: ["AI Adoption", "M365", "Instructional Design"]
  },
  {
    id: "REF-02",
    title: "Interactive Spatial Mapping & Technical Audit System",
    category: "Systems & Audits",
    summary: "16:9 vector schematics, hardware inventory tracking structures, and interactive 2D/3D floor plan visualization for multi-site assessments.",
    image: "",
    link: "contact.html#capability",
    linkText: "Explore Specification →",
    tags: ["Spatial Mapping", "Three.js", "Systems Audit"]
  },
  {
    id: "REF-03",
    title: "Automated Portal & Schedule Orchestration",
    category: "Workflows & Portals",
    summary: "End-to-end SharePoint list architecture integrated with Power Automate flows for automated stakeholder communications and scheduling.",
    image: "",
    link: "contact.html#capability",
    linkText: "View Workflow Spec →",
    tags: ["SharePoint", "Power Automate", "Web Architecture"]
  }
];
