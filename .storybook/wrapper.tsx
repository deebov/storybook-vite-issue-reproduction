import React, { useEffect } from "react";
// import { Inter } from "next/font/google";

// const inter = Inter({
//     subsets: ["latin"],
//     display: "swap",
//     variable: "--font-inter",
// });

const Wrapper = (Story: any) => {
    useEffect(() => {
        const handler = (event: SubmitEvent) => {
            event.stopPropagation();
            event.preventDefault();

            alert("Form submitted!");
        };

        window.addEventListener("submit", handler);

        return () => {
            window.removeEventListener("submit", handler);
        };
    }, []);

    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if ((event.target as any)?.tagName !== "A") return;

            event.stopPropagation();
            event.preventDefault();

            alert("Link clicked!");
        };

        window.addEventListener("click", handler);

        return () => {
            window.removeEventListener("click", handler);
        };
    }, []);

    return (
        <div>
            <Story />
        </div>
    );
};

export default Wrapper;
