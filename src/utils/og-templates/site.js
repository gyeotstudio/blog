import satori from "satori";
import { SITE } from "@/config";
import loadGoogleFonts from "../loadGoogleFont";

export default async () => {
  return satori(
    {
      type: "div",
      props: {
        style: {
          background: "#4a7c59",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "72px 80px",
        },
        children: [
          // Top: favicon mark
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                alignItems: "center",
                gap: "16px",
              },
              children: [
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-end",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "18px",
                            height: "44px",
                            borderRadius: "5px",
                            background: "#f7f8f5",
                          },
                        },
                      },
                      {
                        type: "div",
                        props: {
                          style: {
                            width: "18px",
                            height: "34px",
                            borderRadius: "5px",
                            background: "rgba(247,248,245,0.7)",
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Center: title + desc
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              },
              children: [
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 80,
                      fontWeight: "bold",
                      color: "#f7f8f5",
                      margin: 0,
                      lineHeight: 1.1,
                    },
                    children: SITE.title,
                  },
                },
                {
                  type: "p",
                  props: {
                    style: {
                      fontSize: 30,
                      color: "rgba(247,248,245,0.8)",
                      margin: 0,
                      lineHeight: 1.5,
                      maxWidth: "800px",
                    },
                    children: SITE.desc,
                  },
                },
              ],
            },
          },
          // Bottom: domain
          {
            type: "span",
            props: {
              style: {
                fontSize: 24,
                color: "rgba(247,248,245,0.6)",
                fontWeight: "bold",
              },
              children: new URL(SITE.website).hostname,
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      embedFont: true,
      fonts: await loadGoogleFonts(SITE.title + SITE.desc + SITE.website),
    }
  );
};
