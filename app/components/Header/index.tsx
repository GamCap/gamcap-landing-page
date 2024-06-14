export function Header() {
  return (
    <div className=" bg-background-primary text-white fixed top-0 left-0 w-full py-2.5 z-50 border-b border-stroke">
      <div className=" px-16 flex flex-row justify-between">
        <div>Logo</div>

        <ul className="flex flex-row space-x-8">
          <li>Home</li>
          <li>Solutions</li>
          <li>Pricing</li>
        </ul>
        <div>Theme Switch</div>
      </div>
    </div>
  );
}
