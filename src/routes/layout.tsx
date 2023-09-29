import "@mantine/core/styles.css";
import { LayoutProps } from "rakkasjs"
export default function Layout({children}: LayoutProps) {
return (
<div className="w-full h-full flex items-center justify-center">
 {children}
</div>
)}
