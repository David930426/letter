import { content } from "@/content";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__heart" aria-hidden="true">
        &#9829;
      </span>
      <p>{content.footer.text}</p>
    </footer>
  );
}
