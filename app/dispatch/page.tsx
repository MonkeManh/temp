"use client";

import Footer from "@/components/footer";
import LoadingState from "@/components/loading-state";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import getSettings, { DEFAULT_SETTINGS } from "@/lib/utils";
import { ISettings } from "@/models/interfaces/ISettings";
import { Phone, Settings } from "lucide-react";
import Link from "next/link"
import { useEffect, useState } from "react";

export default function DispatchPage() {
  const [settings, setSettings] = useState<ISettings>(DEFAULT_SETTINGS);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadedSettings = getSettings();
    setSettings({
      ...settings,
      ...loadedSettings,
    });

    setIsLoading(false);

    const handleSettingsChange = (event: CustomEvent<ISettings>) => {
      setSettings(event.detail);
    };

    window.addEventListener(
      "settings-change",
      handleSettingsChange as EventListener
    );

    return () => {
      window.removeEventListener(
        "settings-change",
        handleSettingsChange as EventListener
      );
    };
  }, []);

  const CreateCallButton = (
    <Link href="/create-call">
      <Button
        variant="destructive"
        className="flex-1 sm:flex-none cursor-pointer"
        style={{ scale: settings.advancedMode ? "1" : "1.5" }}
      >
        <Phone className="mr-2 h-5 w-5" />
        Create Call
      </Button>
    </Link>
  );

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <header className="flex justify-center w-full my-12">
        <div className="container flex justify-between">
          <h1 className="text-2xl font-bold">Dispatch Panel</h1>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link href="/reconfigure">
              <Button
                variant="outline"
                className="flex-1 sm:flex-none cursor-pointer"
              >
                <Settings className="mr-2 h-5 w-5" />
                Reconfigure
              </Button>
            </Link>
            {settings.advancedMode && CreateCallButton}
          </div>
        </div>
      </header>

      <section className="flex w-full justify-center">
        <div className="container">
          {isLoading ? (
            <LoadingState />
          ) : settings.advancedMode ? (
            <p>Coming Soon!</p>
          ) : (
            <div className="w-full flex justify-center items-center h-100">
              {CreateCallButton}
            </div>
          )}
        </div>
      </section>

      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
