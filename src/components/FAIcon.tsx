import React from "react";

const FAIcon: React.FC<{ icon: string }> = ({ icon }: { icon: string }) => {
  return <i className={`fa fa-${icon}`}></i>;
};

export default FAIcon;
