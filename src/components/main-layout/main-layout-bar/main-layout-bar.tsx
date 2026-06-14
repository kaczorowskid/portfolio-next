import { MainLayoutBarIndicator } from "./main-layout-bar-indicator";

export const MainLayoutBar = () => (
  <div className="w-full fixed z-50">
    <div className="mx-auto max-w-318 flex justify-center bg-black border border-r-green-600 border-l-green-600 border-b-green-600 rounded-bl-2xl rounded-br-2xl">
      <MainLayoutBarIndicator />
    </div>
  </div>
);
