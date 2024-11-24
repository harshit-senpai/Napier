type Props = { children: React.ReactNode };
export default function Layout({ children }: Props) {
  return (
    <div className="border-l-[1px] border-t-[1px] pb-20 h-screen rounded-l-3xl border-muted-foreground/30 overflow-scroll">
      {children}
    </div>
  );
}
