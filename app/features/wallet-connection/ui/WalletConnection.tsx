'use client'

import { Button } from "@/shared/ui-kit/ui/button";
import { Copy } from "@/shared/ui-kit/ui/copy";
import { useWalletBalances, useWalletState } from "../model";
import { Toggle, useToggle } from "@/shared/ui-kit/ui/toggle";
import { Balance } from "./Balance";
import { Skeleton } from "@/shared/ui-kit/ui/skeleton";

export function WalletConnection() {
    const hiddenState = useToggle()
    const {
        ensAvatar,
        status,
        disconnect,
        ensName,
        address,
        disconnectStatus
    } = useWalletState()
    const { balance, balanceStatus, pyusdBalance } = useWalletBalances()

    return (
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col">
          {status === 'connected' && <>
            {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
            {address && <div>{ensName ? `${ensName} (${address})` : <Copy value={address}/>}</div>}
            </>}
          {status !== 'connected' && <Skeleton className="h-4 w-[400px]" />}
          {balanceStatus === 'success' && <div className="flex items-center gap-2">
            {balance ? <Balance balance={balance} hidden={hiddenState.toggleValue} title="Balance"/>: null}
            {pyusdBalance ? <Balance balance={pyusdBalance} hidden={hiddenState.toggleValue} title="Balance PYUSD"/>: null}
            <Toggle
                    value={hiddenState.toggleValue}
                    onToggleAction={hiddenState.onToggle}
            />
            </div>}
          {balanceStatus === 'pending' && <Skeleton className="h-4 w-[400px]" />}
        </div>
        <div className="flex flex-col">
          <Button disabled={disconnectStatus !== 'idle'} onClick={() => disconnect()}>Disconnect</Button>
        </div>
      </div>
    )
}