import Button from "./button";

export default {
    title: "Components/Button",
};

export const Primary = () => <Button variant="primary">Primary Button</Button>;

export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;

export const Outline = () => <Button variant="outline">Outline Button</Button>;

export const Small = () => <Button size="sm">Small Button</Button>;

export const Large = () => <Button size="lg">Large Button</Button>;

export const Loading = () => <Button isLoading>Loading Button</Button>;

export const Disabled = () => <Button disabled>Disabled Button</Button>;
