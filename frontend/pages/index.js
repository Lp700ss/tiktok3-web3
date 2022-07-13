import MainView from "../components/MainView";


let connected = false;

export default function Home() {
  return (
    <div className="app">
      {connected ? (
        <MainView />
      ) : (
        <div className="loginContainer">
          <div className="loginTitle">Log in to TikTok</div>
          <div className="loginSubtitle">
            Manage your accout, check notifications, comment on videos, more
          </div>
        </div>
      )}
    </div>
  );
}
