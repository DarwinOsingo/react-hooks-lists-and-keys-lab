import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectItem from "../components/ProjectItem";

const project = {
  id: 1,
  name: "Reciplease",
  about: "A recipe tracking app",
  technologies: ["Rails", "Bootstrap CSS"],
};

describe("ProjectItem component", () => {
  test("each <span> element has a unique key prop", () => {
    const errorSpy = jest.spyOn(global.console, "error").mockImplementation(() => {});
    
    render(<ProjectItem project={project} />);

    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  test("renders a <span> for each technology passed in as a prop", () => {
    render(<ProjectItem project={project} />);

    for (const technology of project.technologies) {
      const span = screen.queryByText(technology);
      expect(span).toBeInTheDocument();
      expect(span?.tagName).toBe("SPAN");
    }
  });
});
