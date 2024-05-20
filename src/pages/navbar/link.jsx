import AnchorLink from "react-anchor-link-smooth-scroll";

// const SelectedPage = {
//   Home: "home",
//   Benefits: "benefits",
//   OurClasses: "ourclasses",
//   AboutUs: "aboutus",
// };
const ALink = ({ page, selectedPage, setSelectedPage }) => {
  //debugger;
  const lowerCasePage = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "selectedItem-color" : ""}
        navbar-item
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default ALink;
