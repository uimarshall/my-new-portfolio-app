type Props = { children: React.ReactNode };

function HeaderText({ children }: Props) {
  return (
    <h1 className="basis-3/5 font-neogrotesque text-3xl font-bold">
      {children}
    </h1>
  );
}

export default HeaderText;
