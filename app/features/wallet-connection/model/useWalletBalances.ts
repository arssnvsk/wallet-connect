import { useBalance, useConnection } from "wagmi";
import { useTokenBalance } from "./useTokenBalance";
import { useStableContract } from "@/shared/wallet";

export const useWalletBalances = () => {
    const { address, isConnected  } = useConnection()
    const { data: balance, status: balanceStatus } = useBalance({
        address,
        query: {
            enabled: isConnected,
        },
    })

    const { contractAddress } = useStableContract()

    const stableCoinBalance = useTokenBalance(address, contractAddress)

    return {
        balance,
        stableCoinBalance,
        balanceStatus,
    }
}