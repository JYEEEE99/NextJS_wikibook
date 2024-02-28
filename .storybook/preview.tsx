import type { Preview } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../src/app/themes";
import * as NextImage from "next/image";
import React from "react";
import { Story } from "@storybook/blocks";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export const GlobalStyle = createGlobalStyle`
html,
body,
textarea {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
}
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  transition: all 0.25s;
  color: #000;
}
`;
// theme 적용
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
// next/image 교체
const OriginalNextImage = NextImage.default;

Object.defineProperty(OriginalNextImage, "default", {
  configurable: true,
  value: (props) =>
    typeof props.src === "string" ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});
export default preview;
