import { ExpertiseDesktop } from "./expertise-desktop/expertise-desktop";
import { ExpertiseMobile } from "./expertise-mobile";

export const Expertise = () => (
  <>
    <div className="hidden lg:block">
      <ExpertiseDesktop />
    </div>
    <div className="block lg:hidden">
      <ExpertiseMobile />
    </div>
  </>
);
