type Props = { children: React.ReactNode };

function Header({ children }: Props) {
  return (
    <header>
      <h1 className="inline basis-3/5 border-b-4 border-primary-50 font-geometricsans text-3xl font-bold text-black">
        {children}
      </h1>
    </header>
  );
}

export default Header;
