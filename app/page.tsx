import Strategy from "@/Components/Strategy";
import Deliver from "../Components/Deliver";
import Demand from "../Components/Demand";
import Hero from "../Components/Hero";
import Questions from "../Components/Questions";
import Speak from "../Components/Speak";
import Web3 from "../Components/Web3";
import Footer from "@/Components/Footer";
import Marketing from "@/Components/Marketing";
import Comp from "@/Components/Comp";
import Button from "@/Components/Button";
import Img1 from '@/assets/images/web3-Marketing.jpg.webp'
import Img2 from '@/assets/images/community-management.jpg.webp'
import Img3 from '@/assets/images/investor-strategy.jpg.webp'
import Img4 from '@/assets/images/content-mangement.jpg.webp'
import Img5 from '@/assets/images/social-media-mangement.jpg.webp'
import Img6 from '@/assets/images/ads-promotions.jpg.webp'
import Img7 from '@/assets/images/crypto-influencers-video.jpg.webp'
import Img8 from '@/assets/images/ui-ux-desing.jpg.webp'

export default function Home() {
  const details = [
    {
      title: "Full-stack digital marketing services",
      subtitle: "Web3 Marketing Strategy",
      text: "Let's make marketing strategy effortless. Our comprehensive marketing solution is designed to deliver on every aspect of your crypto marketing needs. Our holistic strategy covers everything from wallets, dApps, trading platforms, developer infrastructure, and an initial coin offering to a blockchain launch. Your marketing teams will work with our in-house team of marketers, community managers, writers, graphic & motion designers, and developers — to achieve your crypto project's goals.",
      position: "left",
        img: Img1,
      gradient: "linear-gradient(to right, red, blue)",
    },
    {
      title: "Build Discord and Telegram communities",
      subtitle: "Community Management",
      text: "Any successful launch in the crypto space needs a loyal community to drive its success. We help you build your tribe on Discord and Telegram. Your dedicated crypto community manager at Altorise would share updates with the community, engage any incoming queries, and discourage spam & scammers while fostering the growth of followers in the community. Find out how our team can help you set up the server, configure admin bots, create channels, and moderate roles and posts across the community.",
      position: "right",
      img: Img2,
      gradient: "linear-gradient(to right, purple, blue)",
    },
    {
      title: "Win investors with crypto pitch decks",
      subtitle: "Investor Strategy",
      text: "Let us help you create today's best crypto pitch deck for your crypto project. While you are a builder and expert in your domain area, we, on the other hand, contribute by crafting a compelling startup narrative based on a decade's experience in creating winning pitch decks. Our work involves market research, design, branding, business models, technology diagrams, litepapers, investor updates, and more. We can also help you develop a comprehensive go-to-market strategy for your project.",
      position: "left",
      img: Img3,
      gradient: "linear-gradient(to right, yellow, green)",
    },
    {
      title: "Impactful PR and content marketing",
      subtitle: "PR & Content Marketing",
      text: "Generate buzz around your project, new feature launches, and your marketing campaigns with smart and high-impact press releases and content marketing strategies. Benefit from our partnerships with leading crypto native and mainstream publications and capabilities to write powerful content across your blog, Medium, Mirror.xyz, and more. Our search engine optimization (SEO) processes also maximize the long-term, inbound search results discovery of your Web3 project.",
      position: "right",
      img: Img4,
      gradient: "linear-gradient(to right, orange, tomato)",
    },
    {
      title: "Engage across social media platforms",
      subtitle: "Social Media Management",
      text: "As networks grow and new ones emerge, we develop comprehensive social media marketing strategies for your project. Creating engaging content in your brand's unique voice and consistently keeping conversations active across platforms, we do what's needed to keep your project top-of-mind and in the news. Rely on us to keep tabs on trends, tap into memes, and build community trust with authentic and timely content. Activate X (formerly Twitter), YouTube, Farcaster, and more platforms today.",
      position: "left",
      img: Img5,
      gradient: "linear-gradient(to right, yellow, red)",
    },
    {
      title: "Grow with crypto native ad campaigns",
      subtitle: "Ads & Promotions",
      text: "We simplify how you can get the word out in the crypto space. We balance and adapt a mix of native crypto platforms with traditional marketing avenues to ensure your brand is seen by the right audience on time. We use a variety of tools and programmatic advertising techniques to ensure conversion rate optimization. The blockchain marketing ecosystem is constantly growing, and we work with you to benefit from every platform's global reach and impact.",
      position: "right",
      img: Img6,
      gradient: "linear-gradient(to right, pink, gray)",
    },
    {
      title: "KOL and influencer marketing for reach",
      subtitle: "Crypto Influencers & Videos",
      text: "Building credibility and educating users or potential investors about your crypto project offerings also benefits when you associate with ideal crypto influencers. We work with an array of creators across the globe to increase your customer base. Finding the key opinion leaders (KOL) for your project's unique needs requires systematic and ongoing strategies to get the highest ROI on your investment. We also produce videos and any content necessary to maximize the effectiveness of every campaign.",
      position: "left",
      img: Img7,
      gradient: "linear-gradient(to right, blue, yellow)",
    },
    {
      title: "UI/UX services for your crypto startup",
      subtitle: "UI/UX Design",
      text: "Differentiating your project and improving user experiences is a key goal every project hopes to achieve. Our bespoke crypto UI/UX design services ensure your product and development teams have the support to deliver fantastic experiences across platforms. Connect with us today to learn about the UI solutions Altorise can offer. Get started in days with a dedicated team or a bespoke team augmentation to meet your immediate UI design needs.",
      position: "right",
      img: Img8,
      gradient: "linear-gradient(to right, red, green)",
    },
  ];

  return (
    <main>
      <Hero />
      <Web3 />
      <Marketing />
      <Strategy />
      <Deliver />
      <div id="blog" className="py-20 padding bg-rose-100 space-y-12 lg:space-y-16">
        {details.map((data, key) => (
          <Comp
            img={data.img}
            position={data.position}
            title={data.title}
            subtitle={data.subtitle}
            text={data.text}
            gradient={data.gradient}
          />
        ))}
        <div className="py-10 center ">
          <Button text="Book a call" />
        </div>
      </div>
      <Demand />
      <Speak />
      <Questions />
      <Footer />
    </main>
  );
}
