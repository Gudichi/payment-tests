"use client";

import styles from "./Adv2.module.css";

const placeholderComments = [
  { name: "Maja", text: "Podsjetilo me koliko malo treba da mu dam zeleno svjetlo. Drago mi je pročitati ovako konkretno objašnjenje." },
  { name: "Ivana", text: "Članak mi je baš sjeo. Sviđa mi se što ne forsira igrice nego signalizira prirodno." },
  { name: "Tea", text: "Najviše me pogodilo ono da ne prilaze jer nisu sigurni smiju li. To objašnjava puno." },
  { name: "Lara", text: "Hvala na detaljnim primjerima, baš izgleda kao novinski feature a tema mi je korisna." },
];

export function CommentsAdv2() {
  return (
    <section className={styles.commentsWrap} aria-labelledby="comments-heading">
      <div className={styles.commentsHeader}>
        <h2 id="comments-heading">Komentari čitateljica</h2>
        <span className={styles.commentsCount}>{placeholderComments.length} komentara</span>
      </div>
      <div className={styles.commentList}>
        {placeholderComments.map((comment, index) => (
          <article key={comment.name + index} className={styles.commentCard}>
            <div className={styles.commentMeta}>
              <span className={styles.commentName}>{comment.name}</span>
              <span className={styles.commentTag}>Čitateljica</span>
            </div>
            <p className={styles.commentText}>{comment.text}</p>
          </article>
        ))}
      </div>
      <div className={styles.commentFormStub}>
        <p>Želiš dodati komentar? Prijavi se i napiši svoje mišljenje.</p>
      </div>
    </section>
  );
}
