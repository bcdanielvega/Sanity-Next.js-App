import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default async function Page() {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-10 prose prose-xl p-f flex items-center justify-center bg-mintcream flex-col mb-0 font-agrandir">
        <h1 className="text-center uppercase mb-5 font-agrandir">About</h1>
        <div className="text-center">
          My name is Daniel Vega, and I'm the father to Miles. I play the drums
          and went to school for music, before become a public high school
          teacher, and now I work in tech (it's a long story).
        </div>
        <div className="text-center mt-5">
          I play drums in a band called Mt. Grey. Come see us play and we can
          talk about music, or the NBA, or anything else you want to talk about.
          I'm pretty open to any conversation.{" "}
        </div>
        <div className="flex">
          <Image
            className="rounded-lg mx-4"
            src={"/mohawk-daniel-drums.jpg"}
            width={300}
            height={300}
            alt="Daniel playing drums"
          />
          <Image
            className="rounded-lg mx-4"
            src={"/mohawk-daniel-smile.jpg"}
            width={300}
            height={300}
            alt="Daniel playing drums"
          />
        </div>
        <div className="text-center mb-10">
          Do you have music you think my son should listen to? Cool. Let me know
          @crookednumbers on Instagram.
        </div>
      </div>
      <Footer companyName="Milestones" />
    </>
  );
}
