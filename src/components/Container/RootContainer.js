import Menu from "../Menu/Menu";
export default function RootContainerComponent({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}
