import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../components/**/*.story.tsx"],
    framework: "@storybook/react-vite",
    staticDirs: ["../public"],
};

export default config;
