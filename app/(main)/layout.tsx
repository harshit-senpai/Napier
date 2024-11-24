import InfoBar from "@/components/infobar";
import Sidebar from "@/components/sidebar";

type props = { children: React.ReactNode };

export default function Layout(props: props) {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        <InfoBar/>
        {props.children}
    </div>
    </div>
  );
}
