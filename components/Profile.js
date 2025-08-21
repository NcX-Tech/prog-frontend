import Image from "next/image";
import styles from "./Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.photoContainer}>
        <Image
          src="/profile-photo.jpeg"
          alt="Foto de perfil"
          width={200}
          height={200}
          className={styles.photo}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>Brenno Souza</h2>
        <p className={styles.bio}>
          Desenvolvedor back-end, fascinado por tecnologia e inovação. Sempre em
          busca de aprender novas linguagens e frameworks para criar soluções
          criativas e eficientes.
        </p>
      </div>
    </div>
  );
}
