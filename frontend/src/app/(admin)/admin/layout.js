import SideBar from "@/components/admin/sideBar";
export default function AdminLayout({ children }) {
return (
<div className="row mt-4">
<div className="col-md-3">
<SideBar />
</div>
<div className="col-md-9">
{children}
</div>
</div>
)
}