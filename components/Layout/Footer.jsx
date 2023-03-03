const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container | u-mx-auto u-center-text">
        <div>Copyright &copy; Gareth Hind {currentYear}</div>
      </div>
    </footer>
  );
};

export default Footer;
