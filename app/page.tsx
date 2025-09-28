import Menubar from "./component/menubar/page";
import { Bungee } from "next/font/google";

const bungee = Bungee({
  weight: ["400"],
  subsets: ["latin"],
});

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      <Menubar />
      <h1 className="text-center">Hello To Syndicate</h1>
      <h1 className="text-center font-bold text-green-800">
        Naruenat Kumhiran
      </h1>
      <hr />
      <p className={`${bungee.className} antialiased`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error
        magni voluptates tempora doloremque in aut, at saepe laudantium qui
        nobis vitae repellendus eum dolore ipsam sapiente nostrum suscipit amet.
      </p>
    </>
  );
}
