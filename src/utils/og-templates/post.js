import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async post => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#f7f8f5",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
        },
        children: [
          // Left accent bar
          {
            type: "div",
            props: {
              style: {
                width: "12px",
                height: "100%",
                background: "#4a7c59",
                flexShrink: 0,
              },
            },
          },
          // Content
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "72px 80px",
                flex: 1,
              },
              children: [
                // Tags
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      gap: "12px",
                      flexWrap: "wrap",
                    },
                    children: (post.data.tags ?? []).slice(0, 3).map(tag => ({
                      type: "span",
                      props: {
                        style: {
                          fontSize: 22,
                          color: "#4a7c59",
                          background: "rgba(74,124,89,0.1)",
                          padding: "4px 16px",
                          borderRadius: "999px",
                          fontWeight: "bold",
                        },
                        children: `#${tag}`,
                      },
                    })),
                  },
                },
                // Title
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 68,
                      fontWeight: "bold",
                      color: "#2a3028",
                      margin: 0,
                      lineHeight: 1.2,
                      maxHeight: "300px",
                      overflow: "hidden",
                    },
                    children: post.data.title,
                  },
                },
                // Bottom: author + site
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    },
                    children: [
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 24,
                            color: "#6a8068",
                          },
                          children: post.data.author ?? SITE.author,
                        },
                      },
                      {
                        type: "span",
                        props: {
                          style: {
                            fontSize: 26,
                            fontWeight: "bold",
                            color: "#4a7c59",
                          },
                          children: SITE.title,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(
        post.data.title +
          (post.data.author ?? SITE.author) +
          SITE.title +
          (post.data.tags ?? []).join("")
      ),
    }
  );
};
