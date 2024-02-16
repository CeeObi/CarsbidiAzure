/** @type {import('next').NextConfig} */
const nextConfig = {
//     experimental:{
//         serverActions:true,
//     },
    output: "standalone",
    images:{
        domains: ["cdn.pixabay.com","media.istockphoto.com","carma.com.au","carsales.pxcrush.net"]
    },
    env:{
        NEXTAUTH_SECRET: "e85d99a51f44c3c0e67332b0f6d555189fc8d4cfd330ad992af9776ec2d37418",//process.env.NEXTAUTH_SECRET, //Need to make this acces from the .env file later
        NEXTAUTH_URL:"https://carsbidi.onrender.com"// process.env.NEXTAUTH_URL
    },
    reactStrictMode: false,
    
}

module.exports = nextConfig
