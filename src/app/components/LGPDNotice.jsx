"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const LGPDNotice = () => {
  const [showLgpdBanner, setShowLgpdBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("lgpd-consent");
    if (consent) {
      setShowLgpdBanner(true);
    }
  }, []);

  const handleConsent = (accepted) => () => {
    localStorage.setItem("lgpd-consent", accepted ? "accepted" : "declined");
    setShowLgpdBanner(false);

    if (accepted) {
      // Implementar lógica para aceitar cookies
      console.log("Cookies aceitos");
    }
  };

  return showLgpdBanner ? (
    <Card className="fixed bottom-1 right-1 w-full bg-white shadow-md p-4 z-[100] max-w-[500px]">
      <p>
        Utilizamos cookies para melhorar sua experiência. Ao continuar
        navegando, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" className="text-blue-500">
          Política de Privacidade
        </a>
      </p>
      <div className="flex justify-end mt-2">
        <Button onClick={handleConsent(true)} className="mr-2">
          Aceito
        </Button>
        <Button
          onClick={handleConsent(false)}
          className="bg-gray-300 text-black"
        >
          Não Aceito
        </Button>
      </div>
    </Card>
  ) : null;
};

export default LGPDNotice;
