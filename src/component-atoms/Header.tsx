import Logo from "./Logo";

type HeaderProps = {
  handleSearchValue: (value: string) => void;
};

const Header = ({ handleSearchValue }: HeaderProps) => {
  return (
    <div className="sticky top-0 flex justify-center items-center bg-gray-400 w-full p-4 rounded-md">
      <div className="absolute left-4">
        <Logo />
      </div>
      <input
        className="rounded-md focus:outline-none p-2"
        onChange={(e) => handleSearchValue(e.target.value)}
        placeholder="write a stock name..."
        type="text"
        name="search"
      />
    </div>
  );
};

export default Header;
