const Nav = () => {
  // const navigation = [
  //   { name: 'Profile', href: '#' },
  //   { name: 'Other', href: '#' },
  // ];

  return (
    <nav className="container flex min-w-full items-center justify-between p-7 md:px-40">
      <span className=" text-gray-900 text-xl font-bold hover:cursor-default">
        NextJS Starter
      </span>
      <button className="hover:underline">Log In</button>
    </nav>
  );
};

export default Nav;
