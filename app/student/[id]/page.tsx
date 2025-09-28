export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <>
      <h1>DekDok ID : {id} </h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eius
        quaerat aliquam ad blanditiis. Corrupti asperiores quidem sapiente iure
        rem.
      </p>
    </>
  );
}
