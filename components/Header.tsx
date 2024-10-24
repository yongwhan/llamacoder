import Image from "next/image";
import emberLogo from "../public/emberLogo.png";
import bellIcon from "../public/bell.png"
import memoIcon from "../public/memo.png"

export default function Header() {
  return (
    <header className="relative mx-auto mt-5 flex w-full items-center justify-center px-2 pb-7 sm:px-4">
      <Image alt="Ember" src={emberLogo} style={{height:30, width:'auto'}}  />

      &nbsp; Christian's workspace

      <a
        href=""
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <span>Upgrade</span>
      </a>

      <a
        href=""
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <span>Feedback</span>
      </a>

      <a
        href=""
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <span>Changelog</span>
      </a>

      <a
        href=""
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <span>Support</span>
      </a>

      <a
        href=""
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <Image alt="bell" src={bellIcon} style={{height:25, width:'auto'}} />
      </a>

      <a
        href=""
        target="_blank"
        className="ml-auto hidden items-center gap-3 rounded-2xl bg-white px-6 py-2 sm:flex"
      >
        <Image alt="memo" src={memoIcon} style={{height:25, width:'auto'}} />
      </a>
    </header>
  );
}
