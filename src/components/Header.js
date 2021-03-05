import React from "react";

const Header = (props) => {
  const { headerImg } = props;

  const bannerLink = headerImg !== null ? headerImg : "";

  const banner = <img src={bannerLink} id="banner" alt="banner"></img>;

  return <div>{banner}</div>;
};

export default Header;
