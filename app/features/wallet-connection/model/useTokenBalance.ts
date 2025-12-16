import { useReadContracts } from "wagmi";
import { erc20Abi } from "viem";

export const useTokenBalance = (address: `0x${string}` | undefined, token: `0x${string}` | undefined): {
    value: bigint,
    decimals: number
    symbol: string
} | undefined => {
    const { data } = useReadContracts({
        contracts: [
            {
                address: token,
                abi: erc20Abi,
                functionName: "balanceOf",
                args: address ? [address] : undefined,
            },
            {
                address: token,
                abi: erc20Abi,
                functionName: "decimals",
            },
            {
                address: token,
                abi: erc20Abi,
                functionName: "symbol",
            },
        ],
        query: {
            enabled: !!address && !!token,
        },
    })
    const value = data?.[0]?.result
    const decimals = data?.[1]?.result
    const symbol = data?.[2]?.result

    if (value !== undefined && decimals !== undefined && symbol !== undefined) {
        return { value, decimals, symbol }
    }
}