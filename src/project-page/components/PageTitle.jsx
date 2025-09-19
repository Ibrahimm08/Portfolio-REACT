import "../styles/PageTitle.css";
import imgReactLogo from "../images/ReactLogo.png";
import imgHtmlCssJs from "../images/HtmlCssJs.png";

const PageTitle = () => {
  return (
    <div className="page-title container">
      <div className="pt-bg" />
      <div className="pt-title">
        <div className="pt-images">
          <img src={imgReactLogo} alt="" />
          <img src={imgHtmlCssJs} alt="" />
        </div>
        <h1>Projects</h1>
      </div>
    </div>
  );
};

export default PageTitle;
