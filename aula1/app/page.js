import Image from "next/image";
import styles from "./page.module.css";
import { Profile} from "@/components/Profile"

export default function Home() {
  return (
    <div className="container">
      <div className="rectangle">
        <h1 className="title">
          Olá, teste
        </h1>
        <section>
        <Profile /> 
        <Profile />
        <Profile />
        <Profile />
        </section>
       
      </div>
    </div>
  );
}
