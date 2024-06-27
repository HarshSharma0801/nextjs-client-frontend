import Image from "next/image";
import NavHead from "./Components/navbar";
import Bar from "./Components/Bar";
import MainPage from "./Components/mainPage";
export default function Home() {
  return (
    <>
      <NavHead />
      <Bar/>
      <MainPage/>
    </>
  );
}
