import React from "react";
import resources from "../assets/ressurser.js"

const Resources = ({urlCategory}) => {
    const filteredResources = resources.filter(resource => resource.category === urlCategory)
    console.log(urlCategory)
  return (
    <div>
      {filteredResources.map((resource) => {
        return (
            <li key={resource.title}>
            <a
              href={resource.url}>
              {resource.title}
            </a>
          </li>
        );
      })}
    </div>
  );
}

export default Resources;
