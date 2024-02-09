import { render } from "utils/test-utils";
import LayoutConfigSection from "./layout-config-section";
import { mockLandingPageSections } from "__mocks__/config";

const renderComponent = (
  onChange = jest.fn(),
  list = mockLandingPageSections
) => {
  return render(<LayoutConfigSection items={list} onChange={onChange} />);
};

describe("LandingPageSections", () => {
  it("should render into the document", () => {
    const component = renderComponent();
    const container = component.getByTestId("landing-page-section");

    expect(container).toBeInTheDocument();
  });

  it("should return null when no data", () => {
    const component = renderComponent(jest.fn(), []);
    const container = component.queryByTestId("landing-page-section");

    expect(container).toBeNull();
  });
});
