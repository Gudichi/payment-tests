"use client";

import { FormEvent, useState } from "react";
import styles from "./Adv2.module.css";

type Comment = {
  username: string;
  time: string;
  body: string;
};

const staticComments: Comment[] = [
  {
    username: "marina.veljac",
    time: "13.11.2025. u 18:42",
    body:
      "Ja sam se zaledila kad sam pročitala onaj dio “ako mu ne daš zeleno svjetlo, neće prić”. Toliko istinito 😭 Kupila sam Signale prošli tjedan i prvi put nakon dugo — lik mi sam prišao u kafiću. Preporučam stvarno.",
  },
  {
    username: "softblush_23",
    time: "13.11.2025. u 19:15",
    body:
      "Ovo je baš pogodilo… onaj osjećaj kad se središ ko kraljica i nitko te ne pogleda. 😅 Ako će mi ovo makar malo promijenit energiju, idem probat.",
  },
  {
    username: "anja.macek",
    time: "13.11.2025. u 21:03",
    body:
      "Najviše mi se sviđa što kaže da ne moram glumit. Ne podnosim igrice. Ako je stvarno samo govor tijela — to mi je top. Upravo kupila vodič 🙈",
  },
  {
    username: "lena.kovac",
    time: "13.11.2025. u 22:47",
    body:
      "Ja sam probala jedan od signala (onaj za dućan) i lik se nasmija i rekao: “hej, smijem ti nešto pitat?” — JA ŠOK. 😂 Radi ženo, radi.",
  },
  {
    username: "moonhoney",
    time: "14.11.2025. u 08:22",
    body:
      "Nisam inače fan ovih programa, ali ovaj tekst mi je imao smisla. Pogotovo dio da njima treba znak da nisu napadni. Sad me baš zanima što je dalje.",
  },
  {
    username: "jovana_.petrov",
    time: "14.11.2025. u 09:41",
    body:
      "Ona rečenica “Ako nije 99% siguran da ga nećeš odbit – neće prići” me pogodila ko grom. Sad bar kužim zašto me normalni ignoriraju. Idem vidit te signale.",
  },
  {
    username: "zelena_magnolija",
    time: "14.11.2025. u 11:05",
    body:
      "8. signal mi je promijenio sve. Frajer me gledao cijelu kavu i ništa… primijenim to i dođe za 30 sekundi. Program vrijedi više od 17€, realno.",
  },
  {
    username: "milica.mar",
    time: "14.11.2025. u 12:27",
    body:
      "Iskreno, malo sam skeptična. Nisam ja za neke velike gestikulacije… al ako traje minutu dnevno, možda stvarno nije ništa napadno. Razmišljam da probam.",
  },
  {
    username: "crystal_nova",
    time: "14.11.2025. u 14:18",
    body:
      "Kad sam pročitala advertorial — sve mi je sjelo na mjesto. Ja mislim da sam samo ostavljala dojam pre-zatvorene. Sad sam kupila program, jedva čekam primijenit u uredu haha.",
  },
  {
    username: "dorisf",
    time: "14.11.2025. u 15:39",
    body:
      "U teretani sam probala onaj “meki pogled” i lik mi prvi put rekao: “Oprosti jel ti ovo još treba?” — a inače me nitko ni ne pogleda 😭😂 Valjda stvarno radi.",
  },
  {
    username: "natalija.grubic",
    time: "14.11.2025. u 17:02",
    body:
      "Ovo mi je prvi put da osjećam da mi netko objašnjava mušku psihu na NORMALAN način. Ako im treba signal — ok, naučit ćemo ga dat.",
  },
  {
    username: "sunset.vibes",
    time: "14.11.2025. u 18:21",
    body:
      "Malo sam starija i mislila sam da ovo nije za mene, ali iskreno… jako lijepo objašnjeno. Ne loviš nikoga, samo otvaraš prostor. Zvuči stvarno elegantno.",
  },
];

export function CommentsSection() {
  const [username, setUsername] = useState("");
  const [text, setText] = useState("");
  const [userComments, setUserComments] = useState<Comment[]>([]);

  const formatTimestamp = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const datePart = `${day}.${month}.${year}.`;
    const timePart = date.toLocaleTimeString("hr-HR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${datePart} u ${timePart}`;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || !text.trim()) {
      return;
    }

    const newComment: Comment = {
      username: username.trim(),
      body: text.trim(),
      time: formatTimestamp(new Date()),
    };

    setUserComments((prev) => [...prev, newComment]);
    setUsername("");
    setText("");
  };

  return (
    <section id="comments" className={styles.commentsSection}>
      <h2 className={styles.commentsTitle}>Komentari korisnica</h2>

      <div className={styles.commentList} aria-live="polite">
        {staticComments.map((comment) => (
          <div key={`${comment.username}-${comment.time}`} className={styles.comment}>
            <div className={styles.commentHeader}>
              <span className={styles.commentUsername}>{comment.username}</span>
              <span className={styles.commentTime}>{comment.time}</span>
            </div>
            <p className={styles.commentBody}>{comment.body}</p>
          </div>
        ))}

        {userComments.map((comment, index) => (
          <div key={`user-${index}-${comment.time}`} className={styles.comment}>
            <div className={styles.commentHeader}>
              <span className={styles.commentUsername}>{comment.username}</span>
              <span className={styles.commentTime}>{comment.time}</span>
            </div>
            <p className={styles.commentBody}>{comment.body}</p>
          </div>
        ))}
      </div>

      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="comment-name">Ime ili username</label>
          <input
            id="comment-name"
            name="name"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="npr. marina.veljac"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="comment-text">Komentar</label>
          <textarea
            id="comment-text"
            name="text"
            rows={3}
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Podijeli iskustvo ili pitanje..."
            required
          />
        </div>
        <button type="submit" className={styles.submitButton}>
          Objavi komentar
        </button>
      </form>
    </section>
  );
}
