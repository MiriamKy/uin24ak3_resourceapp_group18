import React from "react";
import resources from "../assets/ressurser.js"

const Category = () => {
  return (
    <div>
      {resources.map((resource) => {
        return (
          <li>
            <button
              type="button"
              onClick="oppdaterInnhold('${resource.category}')">
              ${resource.category}
            </button>
          </li>
        );
      })}
    </div>
  );
}

export default Category;
