import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="icons-footer">
        <p>{/*Icons such as github and linkedin will go here*/}</p>
      </div>
      <div className="info-footer">
        <ul>
          {/*Contact info and name will go here*/}
          <p>
            <strong>Name: </strong>
          </p>
          <p>
            <strong>Email: </strong>
          </p>
          <p>
            <strong>Phone: </strong>
          </p>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
