import Menubar from "./component/menubar/page"

export default async function Page({ params }: { params: Promise <{ id: string }> }) {
  return (
    <>
      <Menubar />
      <h1 className="text-center">Hello To Syndicate</h1>
      <h1 className="text-center font-bold text-green-800">Naruenat Kumhiran</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum error
        magni voluptates tempora doloremque in aut, at saepe laudantium qui
        nobis vitae repellendus eum dolore ipsam sapiente nostrum suscipit amet.
      </p>
    </>
  );
}
