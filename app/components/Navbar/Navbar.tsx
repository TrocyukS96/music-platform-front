"use client";
import { Flex, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SiMusicbrainz } from "react-icons/si";

const pathNames = [
  {
    title: "Главная",
    href: "/",
  },
  {
    title: "Треки",
    href: "/tracks",
  },
];

const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath,'--curentpath')
  console.log(currentPath.split('/'),'--curentpath')

  const showActive = (href:string) =>{
    const hrefArr = href.split('/')
    const currentPathArr =currentPath.split('/')
    if(href==='/' && href===currentPath){
      return true
    }else{
      if(currentPathArr.includes('tracks') && hrefArr.includes('tracks')){
        return true
      }else return false
    }
  }
  return (
    <div className="w-60 p-2 bg-neutral-900 p-x-1">
      <Flex align="center" gap="3" justify="between">
        <SiMusicbrainz fill="white" size="30" />
        <Text className="text-white">Music platform</Text>
      </Flex>
      <ul className="mt-4 flex flex-col gap-2">
        {pathNames.map((el) => (
          <li
            key={el.href}
            className={classNames({
              "px-1": true,
              rounded: true,
              "hover:bg-slate-300": true,
              "transition-all": true,
              "transition-duration:150ms": true,
              'bg-slate-300':showActive(el.href),
            })}
          >
            <Link href={el.href} className="text-white">
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
