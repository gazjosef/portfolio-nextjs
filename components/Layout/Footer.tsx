const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div>Copyright &copy; Gareth Hind {currentYear}</div>
    </footer>
  );
}
