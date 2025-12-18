'use client'

import { WalletConnect } from "@/features/wallet-connect";
import { WalletConnection } from "@/features/wallet-connection";
import { useConnection } from "wagmi";
import { Spinner } from "@/shared/ui-kit/ui/spinner";
import { Product } from "@/features/product";

export default function Home() {
    const { status } = useConnection()

  return (
    <main className="min-h-screen">
      <div className="flex flex-col gap-6">
        {status === 'connected' && <>
          <header className="p-2
              border-b border-border/50
              bg-background/70 backdrop-blur-xl
              shadow-sm"
          >
            <WalletConnection/>
          </header>
          <div className="px-6">
            <ul className="flex flex-wrap items-center gap-4">
              {[
                    {
                        title: "Wireless Headphones",
                        description: "High-quality wireless headphones with noise cancellation.",
                        image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439",
                        price: 19,
                    },
                    {
                        title: "Smart Watch",
                        description: "Modern smartwatch with health tracking and notifications.",
                        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
                        price: 24,
                    },
                ].map((product) =>
                  <Product key={product.title} {...product} />
              )}
            </ul>
          </div>
        </>}
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
    </main>
  );
}
