import Image from "next/image";
import heroImg from "@/public/hero.svg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Next & Contentful</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Deleniti, aperiam placeat recusandae impedit
                        excepturi exercitationem harum accusamus voluptatem
                        assumenda quia eos possimus neque quas natus.
                    </p>
                </div>
                <div className="img-container">
                    <Image
                        src={heroImg}
                        alt="woman and a browser"
                        width={352}
                        height={307.93}
                        className="img"
                    />
                </div>
            </div>
        </section>
    );
}
export default Hero;
