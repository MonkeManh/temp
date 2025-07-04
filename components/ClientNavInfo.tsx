"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function ClientNavInfo() {
  const pathname = usePathname();
  const [callsign, setCallsign] = useState<string | null>("C-000");
  const [zuluTime, setZuluTime] = useState<string>("00:00");
  const router = useRouter();

  const dispatchPaths = ["/dispatch", "/create-call", "/summary"];
  const isDispatchPage = dispatchPaths.some((path) =>
    pathname.startsWith(path)
  );

  useEffect(() => {
    if (isDispatchPage) {
      const storedCallsign = localStorage.getItem("CALLSIGN");
      if(!storedCallsign) {
        router.push('/start');
      }
      setCallsign(storedCallsign);
    }
  }, [isDispatchPage]);

  useEffect(() => {
    const updateZuluTime = () => {
      setZuluTime(new Date().toUTCString().split(" ")[4].substring(0, 5));
    };

    updateZuluTime();
    const interval = setInterval(updateZuluTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: "/protocols", label: "Protocols" },
    { href: "/response-plans", label: "Response Plans" },
    { href: "/glossary", label: "Glossary" },
  ];

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 hidden h-full items-center justify-center lg:flex">
      {isDispatchPage ? (
        <>
          {callsign && (
            <div className="bg-muted px-3 py-1 rounded-md font-medium text-lg mr-2">
              Dispatcher: {callsign}
            </div>
          )}
          <div className="bg-muted px-3 py-1 rounded-md font-medium text-lg">
            {zuluTime}
          </div>
        </>
      ) : (
        <nav className="flex items-center gap-2 text-sm">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-4 py-2 rounded-md font-medium transition-all hover:bg-muted hover:text-primary ${
                pathname === href ? "bg-muted text-primary" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
