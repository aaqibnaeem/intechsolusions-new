import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "8px",
      }}
    >
      <div
      // style={{
      //   // background: "white",
      //   // padding: "4px 6px",
      //   // width: "200px",
      //   // borderRadius: 100,
      // }}
      >
        <p
          style={{
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
            padding: "8px 16px",
            textAlign: "center",
            margin: 0,
          }}
        >
          InTech Solusions
        </p>
      </div>
      <ul
        style={{
          color: "white",
          listStyle: "none",
          display: "flex",
          gap: "10px",
        }}
      >
        <li>Home</li>
        <li>Products</li>
        <li>Services</li>
      </ul>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          width: "150px",
          height: "40px",
          borderRadius: 100,
        }}
      >
        <p
          style={{
            fontSize: "14px",
            padding: "8px 16px",
            textAlign: "center",
            margin: 0,
          }}
        >
          Contact us
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
