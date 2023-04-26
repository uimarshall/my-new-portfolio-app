type Props = { children: string };

function Header({ children }: Props) {
  return (
    <header>
      <p className="mt-8 text-sm">{children}</p>
    </header>
  );
}

export default Header;
