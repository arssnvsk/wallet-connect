'use client'

import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/shared/ui-kit/ui/dialog";
import { Button } from "@/shared/ui-kit/ui/button";
import { WalletOptions } from "./WalletOptions";
import { useWalletConnect } from "../model";

export const WalletConnect = () => {
    const { status } = useWalletConnect()
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button disabled={status !== 'disconnected'} variant="outline">Connect</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] px-10" aria-describedby="wallet options">
          <DialogHeader>
            <DialogTitle>
              Choose Wallet
            </DialogTitle>
          </DialogHeader>
          <WalletOptions/>
        </DialogContent>
      </Dialog>
    );
};
