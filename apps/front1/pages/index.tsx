import {lib2} from "@my-workspace/lib2"
export async function getServerSideProps(context) {
  const data = await fetch('http://localhost:3333/api')
  return {
    props: await data.json(), // will be passed to the page component as props
  }
}
export function Index({message}) {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
      <h1>Front {lib2()}</h1>
      <p>Back: {message} </p>
    </>
  );
}

export default Index;
