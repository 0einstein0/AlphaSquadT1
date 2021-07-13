import React from "react";

function Grad({ children }) {
  return (
    <div
      style={{ fontFamily: "Mulish, sans-serif" }}
      class="md:w-screen  h-auto  p-10 grid md:grid-flow-col  clear-both bg-gradient-to-r from-blue-100 via-blue-200 to-blue-50"
    >
      {children}
    </div>
  );
}

export default Grad;
