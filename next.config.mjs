import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["raw.githubusercontent.com"],
    },
};

export default withFlowbiteReact(nextConfig);