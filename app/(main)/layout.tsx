type props = { children: React.ReactNode };

export default function Layout(props: props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <div className="w-full">{props.children}</div>
    </div>
  );
}
