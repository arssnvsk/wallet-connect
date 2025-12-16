import { useBalance, useConnection } from "wagmi";
import { useTokenBalance } from "./useTokenBalance";
import { PYUSD_CONTRACT_ADDRESS } from "@/shared/wallet";

export const useWalletBalances = () => {
    const { address, isConnected  } = useConnection()
    const { data: balance, status: balanceStatus } = useBalance({
        address,
        query: {
            enabled: isConnected,
        },
    })

    const pyusdBalance = useTokenBalance(address, PYUSD_CONTRACT_ADDRESS)

    return {
        balance,
        pyusdBalance,
        balanceStatus,
    }
}