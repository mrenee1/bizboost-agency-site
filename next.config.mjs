/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/pricing.html", destination: "/pricing", permanent: true },
      { source: "/calculator.html", destination: "/calculator", permanent: true },
      { source: "/process.html", destination: "/process", permanent: true },
      {
        source: "/testimonials.html",
        destination: "/testimonials",
        permanent: true,
      },
      { source: "/contact.html", destination: "/contact", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/terms.html", destination: "/terms", permanent: true },
    ];
  },
};

export default nextConfig;
