import Nav from "../component/Nav";
import UserNav from "../component/UserNav";
import usePermission from "../function/usePermission";
import "./css/Home.css"


function Home() {
  usePermission()

  return <div className="HomeDiv">
    <UserNav />
    <div className="navDiv">
      <Nav textContent={'Posts'} />
      <Nav textContent={'Albums'} />
      <Nav textContent={'Todos'} />
    </div>
  </div>
}

export default Home