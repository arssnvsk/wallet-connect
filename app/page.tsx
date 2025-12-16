'use client'

import { WalletConnect } from "@/features/wallet-connect";
import { WalletConnection } from "@/features/wallet-connection";
import { useConnection } from "wagmi";
import { Spinner } from "@/shared/ui-kit/ui/spinner";

export default function Home() {
    const { status } = useConnection()

    console.log(status)

  return (
    <div className="min-h-screen">
      <div className="p-2">
        {status === 'connected' && <WalletConnection/>}
      </div>
      {status === 'disconnected' &&
        <div className="min-h-screen flex justify-center items-center">
          <WalletConnect/>
        </div>
        }
      {['connecting', 'reconnecting'].includes(status) &&
      <div className="min-h-screen flex justify-center items-center">
        <Spinner className="size-10 text-blue-500"/>
      </div>}
    </div>
  );
}
