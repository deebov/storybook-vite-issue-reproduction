import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../@(components|examples)/**/*.@(stories|story).@(js|jsx|ts|tsx)"],
    framework: "@storybook/react-vite",
    staticDirs: ["../public"],
};

export default config;
